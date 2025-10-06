import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function Carousel({ data }) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className="relative w-full h-[550px] overflow-hidden rounded-lg shadow-lg">
      <div
        className="flex w-full h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${slide * 100}%)` }}
      >
        {data.map((item, idx) => (
          <img
            key={idx}
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      <BsArrowLeftCircleFill onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 left-4 w-10 h-10 text-white cursor-pointer drop-shadow-lg hover:scale-110 transition"/>

      <BsArrowRightCircleFill onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-4 w-10 h-10 text-white cursor-pointer drop-shadow-lg hover:scale-110 transition"/>

      <div className="absolute bottom-5 w-full flex justify-center gap-2">
        {data.map((_, idx) => (
          <button key={idx} onClick={() => setSlide(idx)} className={`w-3 h-3 rounded-full ${slide === idx ? "bg-white" : "bg-gray-400"}`}/>
        ))}
      </div>
    </div>
  );
}
