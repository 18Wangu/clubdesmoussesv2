"use client";

import React, { useEffect, useState } from 'react';

export const Carousel = ({ children }: { children: React.ReactNode }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % React.Children.count(children));
    }, 3000);
    return () => clearInterval(interval);
  }, [children]);

  return (
    <div className="relative overflow-hidden w-screen h-screen">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => (
          <div className="w-screen h-screen flex-shrink-0" key={index}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export const CarouselItem = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative w-screen h-screen">{children}</div>;
};
