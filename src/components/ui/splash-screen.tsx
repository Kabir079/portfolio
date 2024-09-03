import React from "react";

interface SplashScreenProps {
  setLaunched: (launched: boolean) => void;
}

export function SplashScreen({ setLaunched }: SplashScreenProps) {
  return (
    <div className="fixed inset-0 bg-[#0C0C0C] flex flex-col items-center justify-center text-white">
      <h1 className="text-8xl mb-16 font-serif font-bold">Raghumanda Bharat</h1>
      <div className="mb-16">
        <button
          onClick={() => setLaunched(true)}
          className="bg-[#0C0C0C] text-white text-3xl font-bold rounded-full w-48 h-48 flex items-center justify-center border border-white hover:bg-[#1A1A1A] transition-all duration-300 ease-in-out shadow-[0_0_1px_1px_rgba(255,255,255,0.5)] hover:shadow-[0_0_2px_2px_rgba(255,255,255,0.7)]"
        >
          Launch
        </button>
      </div>
      <h2 className="text-4xl mb-8 font-bold">A Design Portfolio</h2>
      <button
        onClick={() => setLaunched(true)}
        className="text-lg underline hover:text-gray-300 transition-colors font-bold"
      >
        ENTER WITHOUT AUDIO
      </button>
    </div>
  );
}
