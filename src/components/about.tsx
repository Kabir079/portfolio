import React from "react";
import wave from "../../public/wave.svg";

export function About() {
  return (
    <div className="relative h-full w-full bg-blue-800 overflow-hidden">
      {/* Background image */}
      <img
        src={wave}
        alt="Wave"
        className="absolute inset-0 w-full h-full object-cover scale-[0.7]"
      />

      {/* Content container */}
      <div className="relative z-2 h-full w-full flex flex-col items-center justify-center p-6 gap-8">
        <h3 className="text-white text-3xl font-semibold mb-4 text-center max-w-lg">
          2+ years of experience across the
          <br />
          full spectrum of design
          <br />
          from graphic to product design.
        </h3>
        <h3 className="text-white text-3xl font-semibold mb-4 text-center max-w-lg">
          I am a bold person meaning
          <br />
          I don't hesitate to bring different
          <br />
          kinds of ways to tackle a problem
        </h3>
      </div>
    </div>
  );
}
