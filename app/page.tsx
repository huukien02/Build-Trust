"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";

const images = [
  "https://wallpaperaccess.com/full/11782.jpg",
  "https://wallpaperaccess.com/full/11754.jpg",
  "https://wallpaperaccess.com/full/11740.jpg",
  "https://wallpaperaccess.com/full/489479.jpg",
  "https://c.wallhere.com/photos/c1/ff/Moon_rocks_sky_8k-1430191.jpg!d",
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const duration = 10000; // 10s auto slide

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, duration);

    return () => clearInterval(timer);
  }, []);

  // Next slide
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  // Prev slide
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="h-screen w-full relative overflow-hidden text-white">
      {/* Slider wrapper */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="flex h-full w-full transition-transform duration-[700ms] ease-in-out"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${index * (100 / images.length)}%)`,
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="h-full w-full bg-cover bg-center flex-shrink-0"
              style={{
                backgroundImage: `url(${img})`,
                width: `${100 / images.length}%`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* ANIMATION TEXT */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="text-center animate-slide-up-fade">
          <h2 className="text-3xl md:text-5xl font-bold drop-shadow-2xl">
            Xây Dựng Giá Trị Vững Bền
          </h2>
          <p className="mt-2 text-lg md:text-xl drop-shadow-xl opacity-90">
            Đồng hành cùng mọi công trình.
          </p>
        </div>
      </div>

      <Header />

      {/* Dots + Buttons */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
        {/* PREV */}
        <button
          onClick={prevSlide}
          className="text-white text-xl px-3 py-1 cursor-pointer relative top-[-1px]"
        >
          ‹
        </button>

        {/* Dots */}
        <div className="flex gap-4">
          {images.map((_, i) => (
            <div key={i} className="w-2 h-2">
              <span
                className={`
                  block w-full h-full rounded-full
                  ${i === index ? "bg-white" : "bg-gray-400"}
                `}
              ></span>
            </div>
          ))}
        </div>

        {/* NEXT */}
        <button
          onClick={nextSlide}
          className="text-white text-xl px-3 py-1 cursor-pointer relative top-[-1px]"
        >
          ›
        </button>
      </div>
    </div>
  );
}
