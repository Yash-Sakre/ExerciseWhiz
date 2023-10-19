import { useEffect, useState } from "react";
import { fetchData, Exerciseoptions } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import { Pagination } from "@mui/material";
import Loader from "./Loader";
const AllExercises = ({ setexercises, exercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises?limit=1324",
          Exerciseoptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1324`,
          Exerciseoptions
        );
      }

      setexercises(exercisesData);
    };
    
    fetchExercisesData();
  }, [bodyPart]);

  const ExercisePerPage = 9;
  const indexOfLastExercise = currentPage * ExercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - ExercisePerPage;
  const currentExercises = exercises?.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1300, behavior: "smooth" });
  };
  if (!currentExercises.length) return <Loader />;

  console.log(exercises);
  return (
    <div className="h-full " id="Exercises">
      <div className="flex flex-col items-center mt-10 ">
        <div className="md:text-[3rem] text-[2rem] px-12 text-center font-bold">
          All Exercises
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 mt-10 capitalize">
          {currentExercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
        </div>
        <div className="mt-10">
          {exercises.length > ExercisePerPage && (
            <Pagination
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(exercises.length / ExercisePerPage)}
              page={currentPage}
              onChange={paginate}
              size="medium"
              color="standard"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AllExercises;
