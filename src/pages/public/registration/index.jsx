import { useState } from "react";
import ConfirmationMessage from "../../../components/ui/Confirmation";

export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <ConfirmationMessage />;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-lg w-full p-8 bg-white dark:bg-gray-800 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-gray-200 mb-6">
          School Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 dark:text-gray-300">Full Name</label>
            <input
              type="text"
              name="full-name"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 dark:text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 dark:text-gray-300">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 dark:text-gray-300">Date of Birth</label>
            <input
              type="date"
              name="dob"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 dark:text-gray-300">Select Grade</label>
            <select
              name="grade"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Choose...</option>
              <option value="kindergarten">Kindergarten</option>
              <option value="grade1">Grade 1</option>
              <option value="grade2">Grade 2</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
