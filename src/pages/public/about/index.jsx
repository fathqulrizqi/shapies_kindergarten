export default function AboutUs() {
    return (
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-purple-700 dark:text-purple-400">
            About Us
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Shapies Kindergarten is a joyful learning space where kids explore, play, and grow with creativity. We nurture young minds with engaging activities, guiding them to a bright future.
          </p>
        </div>
  
        <div className="max-w-screen-xl mx-auto mt-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="/public/image/about.jpg"
              alt="Kids in Classroom"
              className="rounded-xl shadow-xl"
            />
          </div>
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400">
                Our Vision
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                To create a fun, safe, and inspiring environment where children can develop their potential and creativity to the fullest.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400">
                Our Mission
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Encourage curiosity and love for learning.</li>
                <li>Provide interactive and play-based education.</li>
                <li>Foster social, emotional, and cognitive development.</li>
                <li>Empower children with confidence and creativity.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
  