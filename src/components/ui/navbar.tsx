import { Eclipse, House, Inbox, User } from "lucide-react";

const NAVBAR_ITEMS = [
  { title: "Home", icon: <House /> },
  { title: "About", icon: <User /> },
  { title: "Explore work", icon: <Eclipse /> },
  { title: "Contact Me", icon: <Inbox /> },
];

export function Navbar() {
  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] blur-lg">
      <div className="bg-white rounded-2xl shadow-md px-8 py-6">
        <ul className="flex justify-around items-center">
          {NAVBAR_ITEMS.map((navItem) => (
            <li key={navItem.title}>
              <a
                href="#"
                className="hidden md:block text-black text-2xl font-bold hover:text-gray-900 transition-colors"
              >
                {navItem.title}
              </a>
              <a
                href="#"
                className="block md:hidden text-black text-2xl font-bold hover:text-gray-900 transition-colors"
              >
                {navItem.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
