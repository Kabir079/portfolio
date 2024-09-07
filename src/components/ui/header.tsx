export function Header() {
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full blur-sm">
      <section className="flex items-center justify-between px-8 py-4">
        <div>
          <h1 className="text-3xl font-bold text-black">R. Bharat</h1>
        </div>
        <div className="flex items-center justify-center gap-4">
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
      </section>
    </div>
  );
}
