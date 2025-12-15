'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface RotatingWordsProps {
  words: string[];
  className?: string;
  style?: React.CSSProperties;
}

export default function RotatingWords({ words, className, style }: RotatingWordsProps) {
  const wordRef = useRef<HTMLSpanElement>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    if (!wordRef.current) return;

    const timeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5
    });

    words.forEach((word, index) => {
      timeline
        .to(wordRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: 'power2.in',
          onComplete: () => setCurrentWordIndex(index)
        })
        .to(wordRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        })
        .to({}, { duration: 2 }); // Pause for 2 seconds
    });

    return () => {
      timeline.kill();
    };
  }, [words]);

  return (
    <span 
      ref={wordRef}
      className={className}
      style={style}
    >
      {words[currentWordIndex]}
    </span>
  );
}
