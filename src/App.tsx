import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/ui/header";
import { Navbar } from "./components/ui/navbar";
import { SplashScreen } from "./components/ui/splash-screen";

const ANIMATION_TIMESPAN = 3000;

function App() {
  const [showInitialAnimation, setShowInitialAnimation] = useState(true);
  const [launched, setLaunched] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitialAnimation(false);
    }, ANIMATION_TIMESPAN);
    return () => clearTimeout(timer);
  }, []);

  if (showInitialAnimation) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white">
        Initial loading animation
      </div>
    );
  }

  if (!launched) {
    return <SplashScreen setLaunched={setLaunched} />;
  }

  return (
    <div className="h-screen w-full">
      <Header />
      <Navbar />
    </div>
  );
}

export default App;
