import { useAudio } from "../../context/audio-context";

interface SplashScreenProps {
  setShowSplash: (show: boolean) => void;
}

export function SplashScreen({ setShowSplash }: SplashScreenProps) {
  const { togglePlay } = useAudio();
  return (
    <div className="fixed inset-0 bg-[#0C0C0C] flex flex-col items-center justify-center text-white">
      <h1 className="text-center text-8xl mb-16 font-serif font-bold">Raghumanda Bharat</h1>
      <div className="mb-16">
        <button
          onClick={() => {
            togglePlay();
            setShowSplash(false)}}
          className="bg-[#0C0C0C] text-white text-3xl font-bold rounded-full w-48 h-48 flex items-center justify-center border border-white transition-all duration-300 ease-in-out shadow-white shadow-xl hover:shadow-2xl hover:shadow-white font-montserrat"
        >
          Launch
        </button>
      </div>
      <h2 className="text-4xl mb-8 font-bold font-montserrat">A Design Portfolio</h2>
      <button
        onClick={() => setShowSplash(false)}
        className="text-lg underline hover:text-gray-300 transition-colors font-bold font-montserrat"
      >
        ENTER WITHOUT AUDIO
      </button>
    </div>
  );
}
