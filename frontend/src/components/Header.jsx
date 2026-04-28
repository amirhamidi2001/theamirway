import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-emerald-800">
          TheAmirWay
        </a>

        <nav className="hidden lg:block">
          <ul className="flex space-x-8">
            <li><a href="/" className="text-teal-700 hover:text-emerald-600 font-medium">Home</a></li>
            <li><a href="/about" className="text-teal-700 hover:text-emerald-600">About</a></li>
            <li><a href="/blog" className="text-teal-700 hover:text-emerald-600">Blog</a></li>
            <li><a href="/contact" className="text-teal-700 hover:text-emerald-600">Contact</a></li>
          </ul>
        </nav>

        <a
          href="/properties"
          className="hidden lg:inline-block bg-emerald-600 text-white px-5 py-2 rounded-full hover:bg-emerald-700 transition"
        >
          Get Started
        </a>

        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`bi ${isOpen ? "bi-x" : "bi-list"}`}></i>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden">
            <ul className="flex flex-col p-4 space-y-3">
              <li><a href="/" className="block text-teal-700 hover:text-emerald-600">Home</a></li>
              <li><a href="/about" className="block text-teal-700 hover:text-emerald-600">About</a></li>
              <li><a href="/blog" className="block text-teal-700 hover:text-emerald-600">Blog</a></li>
              <li><a href="/contact" className="block text-teal-700 hover:text-emerald-600">Contact</a></li>
              <li><a href="/properties" className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-full text-center">Get Started</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;