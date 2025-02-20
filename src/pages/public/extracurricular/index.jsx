import { Link } from "react-router-dom";
import { extracurricular } from "../../../utils/constants/extracurricular";

export default function Extracurricular() {
  return (
    <section className="py-20 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-purple-700 dark:text-purple-400 mb-8">Extracurricular</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          Explore our exciting extracurricular activities designed to nurture creativity, confidence, and teamwork in young minds.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {extracurricular.map((activity, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img src={activity.image} alt={activity.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-2">{activity.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link to="/registration" className="px-6 py-3 text-lg font-semibold text-white bg-purple-500 rounded-full shadow-lg hover:bg-purple-600 transition">
            Enroll Now
          </Link>
        </div>
      </div>
    </section>
  );
}
