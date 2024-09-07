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
    <div className="relative h-full w-full flex flex-col items-center justify-center text-black font-montserrat gap-8">
      <EyeOff className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium">
        COMING SOON
      </h1>
      <div className="flex items-baseline">
        {Object.entries(timeLeft).map(([unit, value], index, array) => (
          <React.Fragment key={unit}>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl md:text-6xl font-inter font-light">
                {value.toString().padStart(2, "0")}
              </div>
              <div className="text-base sm:text-md md:text-lg font-inter font-bold uppercase">
                {unit}
              </div>
            </div>
            {index < array.length - 1 && (
              <div className="text-2xl sm:text-4xl md:text-6xl font-medium mx-1 sm:mx-2">
                :
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="bg-white rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-lg sm:text-xl md:text-2xl border-2 sm:border-3 md:border-4 border-black font-bold mt-10">
        21st Sept 2024
      </div>
    </div>
  );
}
