import ExerciseCard from "./ExerciseCard";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import SimilarExerciseCards from "./SimilarExerciseCards";

const SimilarHorizontal = ({ targetMuscleExercises }) => {
  
  const SlideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 200;
  };

  const SlideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 200;
  };
  return (
    <div className="mt-10 flex place-items-center px-10">
      <BsChevronLeft
        onClick={SlideLeft}
        size={40}
        className="mr-1 cursor-pointer"
      />
      <div
        id="slider"
        className=" flex gap-20 w-[90vw] h-auto overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide p-5"
      >
        {targetMuscleExercises.map((item) => (
          <div className=" flex gap-10" key={item.id} >
            <SimilarExerciseCards exercise={item} />
          </div>
        ))}
      </div>
      <BsChevronRight
        onClick={SlideRight}
        size={40}
        className="ml-1 cursor-pointer"
      />
    </div>
  );
};

export default SimilarHorizontal;
