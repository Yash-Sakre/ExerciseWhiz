import HorizontalScrollBar from "./HorizontalScrollBar ";
import Loader from "./Loader";
import SimilarHorizontal from "./SimilarHorizontal";

const SimilarExercise = ({ targetMuscleExercises, targetequipment }) => {
  return (
    <div className="mt-10">
      <div className=" gap-1 justify-center items-center text-[1rem] md:text-[2rem] capitalize font-bold text-center">
        Exercises <span className="text-primary">that target</span> the same <span className="text-primary"> Muscles</span> Group
      </div>
      <div>
        <SimilarHorizontal targetMuscleExercises={targetMuscleExercises} />
      </div>
    </div>
  );
};

export default SimilarExercise;
