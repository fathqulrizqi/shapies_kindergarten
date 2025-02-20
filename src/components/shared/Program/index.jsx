import { programs } from "../../../utils/constants/program";

export default function Programs() {
  return (
    <section className="py-16 px-12 dark:bg-yellow-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-pink-500 dark:text-pink-200 mb-10">
          Our Featured Programs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="flex flex-col items-center text-center"
            >
              <img
                src={program.icon}
                alt={program.title}
                className="w-20 h-20 mb-4 rounded-full shadow-md"
              />
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-100">
                {program.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-200 text-sm">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
