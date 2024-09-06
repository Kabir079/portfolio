import "./App.css";
import { Header } from "./components/ui/header";
import { Navbar } from "./components/ui/navbar";
import { Providers } from "./components/providers";
import { ComingSoon } from "./components/ui/coming-soon";

function App() {
  return (
    <Providers>
      <div className="h-screen w-full">
        <Header />
        <ComingSoon />
        <Navbar />
      </div>
    </Providers>
  );
}

export default App;
