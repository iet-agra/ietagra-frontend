import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Math & science symbols to draw
    const symbols = [
      '+',
      '−',
      '×',
      '÷',
      '∫',
      'π',
      'Σ',
      '∞',
      'θ',
      '√',
      '∆',
      '≈',
      'λ',
      'α',
      'β',
      'Ω',
    ];
    const particles = [];

    // Create 50 particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 15 + 5,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.2 + 0.1,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update each particle
      particles.forEach((p) => {
        ctx.font = `${p.size}px Arial`;
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`;
        ctx.fillText(p.symbol, p.x, p.y);

        // Move particles
        p.x += p.speedX;
        p.y += p.speedY;

        // Boundary check
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      animationFrameId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
    />
  );
};

export default AnimatedBackground;
