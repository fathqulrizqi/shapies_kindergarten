import { useState } from "react";

export default function Gallery() {
  const images = [
    "https://aspencountryday.org/wp-content/uploads/2021/03/Kindergarten-classroom-wide-lens.jpg",
    "https://www.unicef.org/montenegro/sites/unicef.org.montenegro/files/styles/hero_extended/public/his_sofija-05-19-235_0.jpg.webp?itok=O4m03gxg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Kindergarten_is_fun_%282908834379%29.jpg/1200px-Kindergarten_is_fun_%282908834379%29.jpg",
    "https://dayearlylearning.org/wp-content/uploads/2024/04/AdobeStock_181872075-scaled.jpeg",
    "https://meckprek.org/wp-content/uploads/2022/11/Preschool-vs.-Pre-Kindergarten-Similarities-and-Differences-Blog-Post.webp",
    "https://mismedan.org/wp-content/uploads/2023/11/banner-kindergarten-2023-1280x630.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeModal = () => setSelectedImage(null);

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <section className="py-16 px-6 dark:bg-gray-900">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-purple-700 dark:text-purple-400">
          📸 Shapies Kindergarten Gallery
        </h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          A glimpse of our fun-filled activities, creative learning, and joyful moments!
        </p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative group" onClick={() => openModal(index)}>
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-lg cursor-pointer transition-transform transform group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-5 right-5 text-white text-3xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img src={selectedImage} className="max-w-full max-h-[80vh] rounded-lg" />
            <div className="flex justify-between mt-4">
              <button
                className="text-white text-3xl bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 transition"
                onClick={prevImage}
              >
                &#9665;
              </button>
              <button
                className="text-white text-3xl bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 transition"
                onClick={nextImage}
              >
                &#9655;
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
