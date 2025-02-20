import { Link } from "react-router-dom";

export default function Hero() {
    return (
      <>
        <section className="dark:bg-gray-900">
          <div className="grid max-w-screen-xl md:px-12 py-12 mx-auto xl:gap-0 lg:py-20 lg:grid-cols-12 items-center">
            <div className="mr-auto place-self-center lg:col-span-7 text-center lg:text-left">
                
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none text-purple-700 md:text-5xl xl:text-6xl">
                Play, Learn, and Grow Together!
              </h1>
              <p className="max-w-2xl mb-6 font-medium text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-white">
                Welcome to Shapies Kindergarten, a place where curiosity meets creativity! Fun-filled activities for happy little learners.
              </p>
              <Link
                to="/registration"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-purple-500 rounded-full shadow-lg hover:bg-purple-600 transition"
              >
                Join Now
              </Link>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img
                src="/public/image/hero.jpg"
                alt="Happy Kids Learning"
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </section>
      </>
    );
  }