import { ReactNode } from "react";
import { AudioProvider } from "../context/audio-context";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <AudioProvider>{children}</AudioProvider>;
}
