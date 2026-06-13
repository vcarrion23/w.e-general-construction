import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, className = "", delay = "" }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-hidden ${isIntersecting ? 'reveal-visible' : ''} ${delay} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;