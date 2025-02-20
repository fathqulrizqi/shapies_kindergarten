import { useState } from "react";
import ConfirmationMessage from "../../../components/ui/Confirmation";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 px-6 flex justify-center bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold text-center text-purple-700 dark:text-purple-400">
          Contact Us
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
          We would love to hear from you! 😊
        </p>

        {submitted ? (
          <ConfirmationMessage />
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              placeholder="Your Message"
              required
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-purple-500 appereance-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
