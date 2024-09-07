import React, { useState, useEffect } from "react";
import { EyeOff } from "lucide-react";

export function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-09-21T23:59:59").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
      if (difference < 0) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center text-black font-montserrat">
      <EyeOff className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-4" />
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-8 sm:mb-12 md:mb-16">
        COMING SOON
      </h1>
      <div className="flex items-baseline mb-6 sm:mb-7 md:mb-8">
        {Object.entries(timeLeft).map(([unit, value], index, array) => (
          <React.Fragment key={unit}>
            <div className="text-center">
              <div className="text-4xl sm:text-6xl md:text-8xl font-inter font-light">
                {value.toString().padStart(2, "0")}
              </div>
              <div className="text-sm sm:text-base md:text-xl font-inter font-bold uppercase">
                {unit}
              </div>
            </div>
            {index < array.length - 1 && (
              <div className="text-4xl sm:text-6xl md:text-8xl font-medium mx-1 sm:mx-2">
                :
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="bg-white rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-xl sm:text-2xl md:text-3xl border-2 sm:border-3 md:border-4 border-black font-bold">
        21st Sept 2024
      </div>
    </div>
  );
}
