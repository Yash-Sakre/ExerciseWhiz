
import {fetchData,Exerciseoptions} from "../utils/fetchData"

const AllExercises = ({setexercises , exercises ,bodyPart}) => {
  console.log(exercises)
  return (
    <div className="h-[50vh]" id="Exercises">
      <div className="flex flex-col items-center mt-10 ">
        <div className="md:text-[3rem] text-[2rem] px-12 text-center font-bold">
        Showing Results
        </div>

        <div className=" w-full h-[10vh]">
          {exercises.map((exercise,index)=>(
            <div key={index} className="">{exercise.name}</div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default AllExercises