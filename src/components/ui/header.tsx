import { useState } from 'react';
import { Menu } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full blur-sm">
      <section className="flex items-center justify-between px-4 sm:px-8 py-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-black">R. Bharat</h1>
        </div>
        <div className="hidden sm:flex items-center justify-center gap-4">
          <button className="bg-[#1B6C44] rounded-2xl px-4 py-3 text-white font-bold">
            Hire me
          </button>
          <button>
            <img src="/theme-btn.svg" alt="Theme button" />
          </button>
          <button>
            <img src="/audio-btn.svg" alt="Audio button" />
          </button>
        </div>
        <button className="sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={24} />
        </button>
      </section>
      {isMenuOpen && (
        <div className="sm:hidden bg-white shadow-md">
          <div className="flex flex-col items-center py-4 space-y-4">
            <button className="bg-[#1B6C44] rounded-2xl px-4 py-3 text-white font-bold w-full max-w-xs">
              Hire me
            </button>
            <button className="w-full max-w-xs py-2">
              <img src="/theme-btn.svg" alt="Theme button" className="mx-auto" />
            </button>
            <button className="w-full max-w-xs py-2">
              <img src="/audio-btn.svg" alt="Audio button" className="mx-auto" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
