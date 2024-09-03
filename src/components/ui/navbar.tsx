const NAVBAR_ITEMS = [
  { title: "Home" },
  { title: "About" },
  { title: "Explore work" },
  { title: "Contact Me" },
];

export function Navbar() {
  return (
    <nav className="fixed bottom-14 left-1/2 transform -translate-x-1/2 w-[80%]">
      <div className="bg-white rounded-2xl shadow-md px-8 py-6">
        <ul className="flex justify-around items-center">
          {NAVBAR_ITEMS.map((navItem) => (
            <li key={navItem.title}>
              <a href="#" className="text-black text-2xl font-bold hover:text-gray-900 transition-colors">
                {navItem.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
