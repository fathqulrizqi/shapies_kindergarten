import CountUp from "../../ui/Count";

export default function Statistic() {
  return (
    <div className="w-full dark:bg-gray-900 py-16">
      <div className="max-w-5xl mx-auto px-6 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-purple-100 dark:bg-purple-900 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-300">
              Kids Graduated
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg">
              Celebrating success, one child at a time!
            </p>
            <div className="mt-4 text-5xl font-extrabold text-purple-800 dark:text-purple-200">
              <CountUp to={1200} duration={3} separator="," />
            </div>
          </div>

          <div className="bg-yellow-100 dark:bg-yellow-900 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-yellow-700 dark:text-yellow-300">
              Total Enrollments
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg">
              Welcoming new learners every year!
            </p>
            <div className="mt-4 text-5xl font-extrabold text-yellow-800 dark:text-yellow-200">
              <CountUp to={3000} duration={3} separator="," />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
