import "./App.css";
import { Header } from "./components/ui/header";
import { Navbar } from "./components/ui/navbar";
import { Providers } from "./components/providers";
import { ComingSoon } from "./components/ui/coming-soon";

function App() {
  return (
    <Providers>
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-[url('/newspaper.svg')] bg-cover bg-center bg-no-repeat blur-md"></div>
        <div className="relative z-10 h-full">
          <Header />
          <ComingSoon />
          <Navbar />
        </div>
      </div>
    </Providers>
  );
}

export default App;
