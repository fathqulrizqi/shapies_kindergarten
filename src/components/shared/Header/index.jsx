import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="mb-20">
      <nav className="w-full fixed top-0 left-0 z-50 bg-white border-gray-200 px-5 py-3 dark:bg-gray-900">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <img
              src="/public/image/logo.png"
              className="rounded-full mr-3 h-20"
              alt="Dream Cine Studios"
            />
          </Link>

          <ul className="hidden lg:flex space-x-8">
            <li><Link to="/about" className="text-gray-900 hover:text-purple-700 dark:text-white">About Us</Link></li>
            <li><Link to="/profile" className="text-gray-900 hover:text-purple-700 dark:text-white">Profile</Link></li>
            <li><Link to="/extracurricular" className="text-gray-900 hover:text-purple-700 dark:text-white">Extracurricular</Link></li>
            <li><Link to="/gallery" className="text-gray-900 hover:text-purple-700 dark:text-white">Gallery</Link></li>
            <li><Link to="/contact" className="text-gray-900 hover:text-purple-700 dark:text-white">Contact Us</Link></li>
          </ul>

          <button
            type="button"
            className="lg:hidden inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleMobileMenu}></div>}

        <div ref={mobileMenuRef} data-testid="mobile-menu" className={`fixed top-0 right-0 w-2/4 h-screen bg-white dark:bg-gray-800 p-5 transform transition-transform duration-300 ease-in-out z-50 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}>
          <button type="button" className="text-gray-500 dark:text-white self-end mb-5" onClick={toggleMobileMenu}>✕</button>
          <ul className="flex flex-col gap-4">
            <li><Link to="/about" className="text-gray-900 hover:text-purple-700 dark:text-white" onClick={toggleMobileMenu}>About Us</Link></li>
            <li><Link to="/profile" className="text-gray-900 hover:text-purple-700 dark:text-white" onClick={toggleMobileMenu}>Profile</Link></li>
            <li><Link to="/extracurricular" className="text-gray-900 hover:text-purple-700 dark:text-white" onClick={toggleMobileMenu}>Extracurricular</Link></li>
            <li><Link to="/gallery" className="text-gray-900 hover:text-purple-700 dark:text-white" onClick={toggleMobileMenu}>Gallery</Link></li>
            <li><Link to="/contact" className="text-gray-900 hover:text-purple-700 dark:text-white" onClick={toggleMobileMenu}>Contact Us</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
