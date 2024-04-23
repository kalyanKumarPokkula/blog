import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="bg-gray-800 p-4 fixed top-0 w-full z-10">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center">
          <a href="#" class="text-white text-xl font-bold">
            MindFuel
          </a>
        </div>
        <div class="hidden md:block">
          <Link to="/">
            <a
              href="#"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
          </Link>
          <Link to="/about">
            <a
              href="#about"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
          </Link>
          <Link to="/blogs">
            <a
              href="#blogs"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              blogs
            </a>
          </Link>
          <Link to="/contact">
            <a
              href="#contact"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
          </Link>
          <a
            href="#"
            class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Sign In
          </a>
        </div>
        <div class="md:hidden">
          <button class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
