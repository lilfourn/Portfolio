"use client";

import React, { useState, useEffect, useRef } from 'react';

interface GlowingTextProps {
  text: string;
  className?: string;
}

const GlowingText = ({ text, className = '' }: GlowingTextProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<Array<HTMLSpanElement | null>>([]);

  const setWordRef = (index: number) => (el: HTMLSpanElement | null) => {
    wordsRef.current[index] = el;
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current && isHovering) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });

        // Update each word's glow based on distance from mouse
        wordsRef.current.forEach((wordEl) => {
          if (!wordEl) return;
          
          const wordRect = wordEl.getBoundingClientRect();
          const containerRect = containerRef.current!.getBoundingClientRect();
          
          const wordX = wordRect.left - containerRect.left + (wordRect.width / 2);
          const wordY = wordRect.top - containerRect.top + (wordRect.height / 2);
          
          const distance = Math.sqrt(
            Math.pow(mousePosition.x - wordX, 2) + 
            Math.pow(mousePosition.y - wordY, 2)
          );
          
          const maxDistance = 100;
          const scale = distance < maxDistance 
            ? 1 + (0.2 * (1 - distance / maxDistance)) 
            : 1;
          const glow = distance < maxDistance 
            ? (1 - distance / maxDistance) 
            : 0;
            
          wordEl.style.transform = `scale(${scale})`;
          wordEl.style.textShadow = `0 0 ${glow * 30}px rgba(255, 255, 255, ${glow * 1.5})`;
          wordEl.style.filter = `brightness(${1 + glow * 0.5})`;
        });
      } else {
        // Reset all words when not hovering
        wordsRef.current.forEach((wordEl) => {
          if (wordEl) {
            wordEl.style.transform = 'scale(1)';
            wordEl.style.textShadow = 'none';
            wordEl.style.filter = 'brightness(1)';
          }
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mousePosition, isHovering]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        // Reset all words when mouse leaves
        wordsRef.current.forEach((wordEl) => {
          if (wordEl) {
            wordEl.style.transform = 'scale(1)';
            wordEl.style.textShadow = 'none';
            wordEl.style.filter = 'brightness(1)';
          }
        });
      }}
    >
      <div className="relative">
        {text.split(' ').map((word, index) => (
          <span
            key={index}
            ref={setWordRef(index)}
            className="inline-block transition-all duration-150 ease-out origin-center"
            style={{ 
              marginRight: '0.25em',
              willChange: 'transform, filter, text-shadow'
            }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GlowingText;
