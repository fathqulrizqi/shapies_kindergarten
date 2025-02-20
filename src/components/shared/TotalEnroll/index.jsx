import CountUp from "../../ui/Count";

export default function StatsSection() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6 text-center md:text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Kids Graduated */}
        <div className="bg-purple-100 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-purple-700">Kids Graduated</h2>
          <p className="text-gray-600 mt-2 text-lg">
            Celebrating success, one child at a time!
          </p>
          <div className="mt-4 text-5xl font-extrabold text-purple-800">
            <CountUp to={1200} duration={3} separator="," />
          </div>
        </div>

        {/* Total Enrollments */}
        <div className="bg-yellow-100 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-yellow-700">Total Enrollments</h2>
          <p className="text-gray-600 mt-2 text-lg">
            Welcoming new learners every year!
          </p>
          <div className="mt-4 text-5xl font-extrabold text-yellow-800">
            <CountUp to={3000} duration={3} separator="," />
          </div>
        </div>
      </div>
    </div>
  );
}
