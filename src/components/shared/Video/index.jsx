export default function Video() {
    return (
      <section className="bg-white dark:bg-gray-900 py-16 px-6">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-yellow-500 dark:text-yellow-400">
            Shapies Kindergarten - Back to School!
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            A new school year means new friends, new adventures, and endless 
            learning! At Shapies Kindergarten, we create a warm and playful 
            environment where kids feel excited to explore and grow. 
            Watch our Back to School video to see the fun-filled journey 
            of our little learners as they step into another year of discovery!  
          </p>
  
          <div className="mt-8 flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/KXVo9ZyBS50?si=cyv_IMMapUOaUKhk"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-xl shadow-xl"
            ></iframe>
          </div>
        </div>
      </section>
    );
  }
  