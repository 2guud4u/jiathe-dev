"use client";

import { useEffect, useRef, useState } from "react";

const FLICKER_MS = 3200;
const HANG_MS = 1400;
const FALL_MS = 1400;
const SNAP_RADIUS = 80;

type Phase =
  | "inplace"
  | "hanging"
  | "falling"
  | "fallen"
  | "dragging"
  | "restored";


export function FallingHua() {
  const [phase, setPhase] = useState<Phase>("inplace");
  const [piece, setPiece] = useState({ left: 0, top: 0 });
  const [font, setFont] = useState<React.CSSProperties>({});
  const slotRef = useRef<HTMLSpanElement>(null);
  const pieceRef = useRef<HTMLSpanElement>(null);
  const dragOffset = useRef({ x: 0, y: 0 });
  useEffect(() => {
    if (phase !== "inplace") return;
    const t = setTimeout(() => {
      const el = slotRef.current;
      const slot = el?.getBoundingClientRect();
      if (!el || !slot) return;
      const cs = getComputedStyle(el);
      setFont({ font: cs.font, letterSpacing: cs.letterSpacing });
      setPiece({ left: slot.left, top: slot.top });
      setPhase("hanging");
    }, FLICKER_MS);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "hanging") return;
    const t = setTimeout(() => setPhase("falling"), HANG_MS);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "falling") return;
    const t = setTimeout(() => {
      const h = pieceRef.current?.offsetHeight ?? 0;
      // The animation's forwards fill is discarded when it drops, so the
      // off-screen position must become real layout.
      setPiece((p) => ({ ...p, top: window.innerHeight + h }));
      setPhase("fallen");
    }, FALL_MS);
    return () => clearTimeout(t);
  }, [phase]);

  const falling =
    phase === "hanging" ||
    phase === "falling" ||
    phase === "fallen" ||
    phase === "dragging";

  const onPointerDown = (e: React.PointerEvent<HTMLSpanElement>) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    // Anchor to the rotated, on-screen rect — not the unrotated left/top —
    // or the piece teleports on grab.
    const rect = e.currentTarget.getBoundingClientRect();
    dragOffset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    setPiece({ left: rect.left, top: rect.top });
    setPhase("dragging");
  };

  const onPointerMove = (e: React.PointerEvent<HTMLSpanElement>) => {
    if (phase !== "dragging") return;
    setPiece({
      left: e.clientX - dragOffset.current.x,
      top: e.clientY - dragOffset.current.y,
    });
  };

  const onPointerUp = (e: React.PointerEvent<HTMLSpanElement>) => {
    if (phase !== "dragging") return;
    const slot = slotRef.current?.getBoundingClientRect();
    if (slot) {
      const dx = e.clientX - (slot.left + slot.width / 2);
      const dy = e.clientY - (slot.top + slot.height / 2);
      if (Math.hypot(dx, dy) < SNAP_RADIUS) {
        setPhase("restored");
        return;
      }
    }
    setPhase("fallen");
  };

  return (
    <>
      <span
        ref={slotRef}
        className={`font-normal ${phase === "restored" ? "neon-ignite" : phase === "inplace" ? "neon-flicker" : ""}`}
        style={{ opacity: falling ? 0.05 : undefined }}
      >
        hua
      </span>
      {falling && (
        <span
          ref={pieceRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className="fixed z-50 cursor-grab select-none touch-none text-[var(--foreground)] active:cursor-grabbing"
          style={{
            ...font,
            opacity: 0.3,
            left: piece.left,
            top: piece.top,
            animation:
              phase === "hanging"
                ? `hua-hang ${HANG_MS}ms ease-in-out forwards`
                : phase === "falling"
                  ? `hua-fall ${FALL_MS}ms cubic-bezier(0.5, 0, 1, 0.5) forwards`
                  : undefined,
            transformOrigin: "left bottom",
            transform:
              phase === "hanging" || phase === "falling"
                ? undefined
                : phase === "dragging"
                  ? "none"
                  : "rotate(12deg)",
          }}
        >
          hua
        </span>
      )}
    </>
  );
}
