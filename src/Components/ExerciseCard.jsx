import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      className="exercise-card border p-5 rounded-2xl card shadow-xl w-[50vh] h-[60vh] bg-white"
      to={`/exercise/${exercise.id}`}
    >
      <div>
        <img
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
          className=" max-h-[40vh] "
        />
      </div>
      <div className="flex justify-center items-center gap-2 mt-2">
        <button className="border px-5 py-2 rounded-xl bg-secondary capitalize font-semibold hover:scale-110">
          {exercise.bodyPart}
        </button>
        <button className="border px-5 py-2 rounded-xl bg-secondary capitalize font-semibold hover:scale-110">
          {exercise.target}
        </button>
      </div>
      <div className="flex justify-center items-center mt-3 font-semibold">
        {exercise.name}
      </div>
    </Link>
  );
};

export default ExerciseCard;
