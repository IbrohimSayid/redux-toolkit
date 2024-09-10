import React from "react";
import { useSelector } from "react-redux";

const Hero = () => {
  const { language } = useSelector((state) => state.app);

  const content = {
    uz: {
      title: "Bizning ajoyib mahsulotimiz",
      description:
        "Bu yerda sizning mahsulotingiz haqida qisqacha ma'lumot bo'lishi kerak.",
      cta: "Boshlash",
    },
    en: {
      title: "Our Amazing Product",
      description: "Here should be a brief description of your product.",
      cta: "Get Started",
    },
    ru: {
      title: "Наш удивительный продукт",
      description: "Здесь должно быть краткое описание вашего продукта.",
      cta: "Начать",
    },
  };

  return (
    <div className="container mx-auto max-w-[1020px] py-12">
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {content[language].title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {content[language].description}
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            {content[language].cta}
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://picsum.photos/600/400"
            alt="Hero"
            className="rounded-lg shadow-md h-[500px] w-11/12"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
