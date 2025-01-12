import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { serviceCategories } from "@/lib/data";

const Categories = ({ setFilter }) => {
  const categoryRef = useRef(null);

  // Scroll to the right
  const scrollRight = () => {
    if (categoryRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 200 : 800; // Adjust scroll amount based on screen size
      categoryRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Scroll to the left
  const scrollLeft = () => {
    if (categoryRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 200 : 800; // Adjust scroll amount based on screen size
      categoryRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-[88vw]">
      <div className="flex flex-col md:flex-row justify-between items-end">
        <h1 className="text-2xl text-white mx-auto">Service Categories</h1>
        <div className="flex gap-4 items-center mt-4 md:mt-0">
          <a
            onClick={() => setFilter(undefined)}
            className="text-[#9d9a9a] text-md hover:text-lg cursor-pointer hover:text-black transition-all duration-200 hover:font-bold underline"
          >
            See all
          </a>
          <div>
            <button
              onClick={scrollLeft}
              className="bg-[#302b2b] p-2 rounded-md mr-2 hover:bg-[#514a4a]"
            >
              <FaArrowLeft className="text-gray-100 text-sm" />
            </button>
            <button
              onClick={scrollRight}
              className="bg-[#302b2b] p-2 rounded-md hover:bg-[#514a4a]"
            >
              <FaArrowRight className="text-gray-100 text-sm" />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={categoryRef}
        className="flex overflow-x-hidden mt-4 gap-5 md:gap-8"
        // style={{
        //   scrollbarWidth: "thin",
        //   scrollbarColor: "#514a4a transparent",
        // }} // Custom scrollbar for better UX
      >
        {serviceCategories.map((item, index) => (
          <a
            onClick={() => setFilter(item.name)}
            href="#"
            key={index}
            className="flex flex-col items-center p-1"
          >
            <img
              loading="lazy"
              src={item.image}
              alt={item.name}
              className="max-w-20 h-20 object-cover rounded-full border border-transparent hover:border-black transition-all duration-100 hover:scale-105"
            />
            <p className="text-white text-[12px] md:text-[13px]">{item.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Categories;
