export default function Profile() {
    return (
      <section className="py-16 px-6">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-purple-700">
            Welcome to Shapies Kindergarten!
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            A place where learning meets fun! At Shapies Kindergarten, we nurture 
            curiosity, creativity, and confidence in a warm, engaging environment. 
            Here’s everything you need to know about us:
          </p>
  
          {/* Table Section */}
          <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-bold text-purple-600">🏫 School Name</td>
                  <td className="py-4 px-6 text-gray-700">Shapies Kindergarten</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-bold text-purple-600">📍 Location</td>
                  <td className="py-4 px-6 text-gray-700">123 Fun Street, Playtown</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-bold text-purple-600">🎓 Programs</td>
                  <td className="py-4 px-6 text-gray-700">
                    Playgroup, Kindergarten, Pre-Primary
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-bold text-purple-600">📅 Founded</td>
                  <td className="py-4 px-6 text-gray-700">2010</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-purple-600">☎️ Contact</td>
                  <td className="py-4 px-6 text-gray-700">+123 456 7890</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <p className="mt-6 text-lg text-gray-700">
            We believe that every child is unique, and we encourage them to explore, 
            learn, and grow in their own special way. Visit us and be part of our 
            happy learning community! 🎈✨
          </p>
        </div>
      </section>
    );
  }
  