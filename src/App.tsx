import { useEffect, useState } from "react";
import { Header } from "./components/ui/header";
import { Navbar } from "./components/ui/navbar";
import { SplashScreen } from "./components/ui/splash-screen";
import { Providers } from "./components/providers";

const ANIMATION_TIMESPAN = 5000;
const FADE_DURATION = 1000;

function App() {
  const [showInitialAnimation, setShowInitialAnimation] = useState(true);
  const [fading, setFading] = useState(false);
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setShowInitialAnimation(false);
        setShowSplash(true);
        setTimeout(() => {
          setFading(false);
        }, 50); // Small delay to ensure the black screen is fully visible
      }, FADE_DURATION);
    }, ANIMATION_TIMESPAN);

    return () => clearTimeout(animationTimer);
  }, []);

  return (
    <Providers>
      <div className="h-screen w-full">
        {showInitialAnimation && (
          <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white z-10">
            <video width={320} height={240} autoPlay>
              <source src="/animation.mp4" type="video/mp4" />
              Your browser does not support the video tag
            </video>
          </div>
        )}
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-1000 ${
            fading ? "opacity-100" : "opacity-0"
          } z-20`}
        />
        {showSplash ? (
          <div
            className={`fixed inset-0 bg-black transition-opacity duration-1000 ${
              fading ? "opacity-0" : "opacity-100"
            } z-30`}
          >
            <SplashScreen setShowSplash={setShowSplash} />
          </div>
        ) : (
          <>
            <Header />
            <Navbar />
          </>
        )}
      </div>
    </Providers>
  );
}

export default App;
