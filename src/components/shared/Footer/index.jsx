import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="dark:bg-gray-900 text-gray-600 dark:text-gray-300 body-font transition-colors duration-300">
      <div className="container px-5 py-10 mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between">
        <div className="w-64 flex-shrink-0 text-center sm:text-left">
          <a className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start text-gray-900 dark:text-white">
            <img
              src="/public/image/logo.png"
              className="rounded-full mb-2 sm:mb-0 sm:mr-3 h-12 sm:h-9"
              alt="Shapies Kindergarten"
            />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-xl"></span>
          </a>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Experience the best learning journey, anytime, anywhere. Your go-to kindergarten for fun and education.
          </p>
        </div>

        <ul className="hidden lg:flex space-x-8">
          <li><Link to="/about" className="text-gray-900 hover:text-purple-700 dark:text-white">About Us</Link></li>
          <li><Link to="/profile" className="text-gray-900 hover:text-purple-700 dark:text-white">Profile</Link></li>
          <li><Link to="/extracurricular" className="text-gray-900 hover:text-purple-700 dark:text-white">Extracurricular</Link></li>
          <li><Link to="/gallery" className="text-gray-900 hover:text-purple-700 dark:text-white">Gallery</Link></li>
          <li><Link to="/contact" className="text-gray-900 hover:text-purple-700 dark:text-white">Contact Us</Link></li>
        </ul>
      </div>

      <div className="bg-gray-600 dark:bg-gray-800">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-300 text-sm text-center sm:text-left">
            © 2025 Shapies Kindergarten - All Rights Reserved
          </p>

          <div className="flex mt-2 sm:mt-0 space-x-4">
            <a
              href="https://facebook.com"
              title="Facebook"
              target="_blank"
              className="text-gray-300 dark:text-gray-400 hover:text-blue-500"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://instagram.com"
              title="Instagram"
              target="_blank"
              className="text-gray-300 dark:text-gray-400 hover:text-pink-500"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
