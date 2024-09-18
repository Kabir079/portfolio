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
    const targetDate = new Date("2024-10-02T23:59:59").getTime();
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
    <div className="relative h-full w-full flex flex-col items-center justify-center text-black font-montserrat gap-4 md:gap-8">
      <EyeOff className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
      <h1 className="text-2xl sm:text-2xl md:text-4xl font-semibold text-center">
        COMING SOON
      </h1>
      <div className="flex items-center justify-center">
        {Object.entries(timeLeft).map(([unit, value], index, array) => (
          <React.Fragment key={unit}>
            <div className="flex flex-col items-center justify-center sm:mx-4 md:mx-6 px-2">
              <div className="text-4xl sm:text-6xl md:text-8xl font-inter font-light md:font-medium mb-1 tabular-nums">
                {value.toString().padStart(2, "0")}
              </div>
              <div className="text-sm sm:text-base md:text-xl font-inter font-medium md:font-semibold uppercase">
                {unit}
              </div>
            </div>
            {index < array.length - 1 && (
              <div className="text-4xl sm:text-6xl md:text-8xl font-medium self-start md:-mt-1">
                :
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="bg-white rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-lg sm:text-xl md:text-2xl border-2 sm:border-3 md:border-4 border-black font-semibold md:font-bold mt-2">
        2nd Oct 2024
      </div>
    </div>
  );
}
