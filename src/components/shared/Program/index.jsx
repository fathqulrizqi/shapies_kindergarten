export default function FeaturedPrograms() {
  const programs = [
    {
      id: 1,
      title: "Creative Arts",
      description:
        "Encouraging children's creativity through art, crafts, and music.",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zWQtATmcqZ0P58l8EN3zrxD7rinIUm5UqQ&s",
    },
    {
      id: 2,
      title: "STEM Learning",
      description:
        "Introducing science, technology, engineering, and math in a fun way.",
      icon: "https://globalfutures.asu.edu/ciisl/wp-content/uploads/sites/7/2022/12/HOME-practice.jpg",
    },
    {
      id: 3,
      title: "Physical Activities",
      description:
        "Outdoor games and sports to promote healthy physical development.",
      icon: "https://www.fathermag.com/wp-content/uploads/2019/01/14-Outdoor-Activities-for-Kids.jpg",
    },
    {
      id: 4,
      title: "Character Building",
      description:
        "Instilling moral values, empathy, and social skills in daily life.",
      icon: "https://www.signupgenius.com/cms/images/school/character-educationarticle-600x400.jpg",
    },
  ];

  return (
    <section className="py-16 bg-yellow-50 dark:bg-yellow-900">
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
