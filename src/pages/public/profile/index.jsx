export default function Profile() {
    return (
      <section className="py-16 px-6 dark:bg-gray-900">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-purple-700 dark:text-purple-400">
            Welcome to Shapies Kindergarten!
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            A place where learning meets fun! At Shapies Kindergarten, we nurture 
            curiosity, creativity, and confidence in a warm, engaging environment. 
            Here’s everything you need to know about us:
          </p>
  
          {/* Table Section */}
          <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-4 px-6 font-bold text-purple-600 dark:text-purple-400">🏫 School Name</td>
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">Shapies Kindergarten</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-4 px-6 font-bold text-purple-600 dark:text-purple-400">📍 Location</td>
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">123 Fun Street, Playtown</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-4 px-6 font-bold text-purple-600 dark:text-purple-400">🎓 Programs</td>
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">
                    Playgroup, Kindergarten, Pre-Primary
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-4 px-6 font-bold text-purple-600 dark:text-purple-400">📅 Founded</td>
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">2010</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-purple-600 dark:text-purple-400">☎️ Contact</td>
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">+123 456 7890</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
            We believe that every child is unique, and we encourage them to explore, 
            learn, and grow in their own special way. Visit us and be part of our 
            happy learning community! 🎈✨
          </p>
        </div>
      </section>
    );
  }
  