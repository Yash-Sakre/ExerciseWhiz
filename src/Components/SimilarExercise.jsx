import Exercisehori from "./Exercisehori";
import HorizontalScrollBar from "./HorizontalScrollBar ";
import Loader from "./Loader";

const SimilarExercise = ({ targetMuscleExercises, targetequipment }) => {
  return (
    <div className="mt-10 flex flex-col">
      <div className=" gap-1 justify-center items-center text-[1rem] md:text-[2rem] capitalize font-bold text-center">
        Exercises <span className="text-primary">that target</span> the same <span className="text-primary"> Muscles</span> Group
      </div>
      <div>
        <Exercisehori targetMuscleExercises={targetMuscleExercises} />
      </div>
    </div>
  );
};

export default SimilarExercise;
