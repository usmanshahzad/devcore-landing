"use client";
import { useEffect, useState } from "react";

export default function Particles({ count = 36 }) {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const arr = Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 4 + Math.random() * 5,
    }));
    setDots(arr);
  }, [count]);

  return (
    <div className="particles" aria-hidden="true">
      {dots.map((d) => (
        <span
          key={d.id}
          style={{
            width: `${d.size}px`,
            height: `${d.size}px`,
            top: `${d.top}%`,
            left: `${d.left}%`,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
          }}
        />
      ))}
    </div>
  );
}