import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { Exerciseoptions, fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar ";

const SearchExercise = ({ setexercises, bodyPart, setBodyPart }) => {
  const [Search, setSearch] = useState("");

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        Exerciseoptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  // console.log(bodyParts);z

  const handleSearch = async () => {
    // No need to make the API call here; this is handled by the useEffect
    // Only set the search term here
    setSearch(Search.trim());
  };

  // useEffect(() => {
  //   console.log(Search)
  //   const handleRequest = setTimeout(() => {
  //     console.log("request")
  //     if (Search !== "") {
  //       // Make the API call when the search term is not empty
  //       fetchData("https://exercisedb.p.rapidapi.com/exercises?limit=1324", Exerciseoptions)
  //         .then((exerciseData) => {
  //           console.log(exerciseData);
  //           if (exerciseData) {
  //             const searchedExercises = exerciseData.filter(
  //               (item) =>
  //               item.name.toLowerCase().includes(Search) ||
  //               item.target.toLowerCase().includes(Search) ||
  //               item.equipment.toLowerCase().includes(Search) ||
  //               item.bodyPart.toLowerCase().includes(Search)
  //             );
  //             console.log(searchedExercises)
  //             setSearch('')
  //             setexercises(searchedExercises);
  //           }
  //         });
  //     }
  //   }, 500)

  const submitHandler = async () => {
    // console.log(search);

    if (Search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=1400",
        Exerciseoptions
      );
      //   console.log(exercisesData);

      const searchExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(Search) ||
          exercise.target.toLowerCase().includes(Search) ||
          exercise.equipment.toLowerCase().includes(Search) ||
          exercise.bodyPart.toLowerCase().includes(Search)
      );
      //   console.log(searchExercises);
      setSearch('');
      setexercises(searchExercises);
      window.scrollTo({
        top: 1300,
        behavior: "smooth",
      });
    }
  };

    
  //   return () => {
  //     clearTimeout(handleRequest); 
  //   };
  // }, [Search, setexercises]);

  return (
    <div className="flex flex-col mt-10 items-center w-full  h-full" id="Search">
      <div className=" md:text-[3rem] text-[2rem] px-12 text-center font-bold">
        Discover Your Perfect Exercise
      </div>
      <div className="flex  justify-center items-center px-12 text-center">
        Refine your fitness journey with precision by discovering exercises
        tailored to your goals through our intuitive search feature.
      </div>

      <div className="pt-2 relative mx-auto text-gray-600 mt-4">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 md:pr-[20rem] sm:pr-[10rem] pr-[5rem] rounded-lg text-sm focus:outline-none "
          type="text"
          value={Search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          name="search"
          placeholder="Search Exercises"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 mt-5 mr-4"
          onClick={submitHandler}
        >
          <AiOutlineSearch />
        </button>
      </div>

      <div className="w-full relative">
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </div>
    </div>
  );
};

export default SearchExercise;