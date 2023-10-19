import { Youtubeoptions, Exerciseoptions , fetchData } from "../utils/fetchData"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Details from "../Components/Details"
import SimilarExercise from "../Components/SimilarExercise"
import ExerciseVideo from "../Components/ExerciseVideo"
const ExerciseDetail = () => {
  const [exerciseDetail , setexerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [targetequipment, setTargetequiment] = useState([]);
  const {id} = useParams() 

  useEffect(()=>{
    const fetchExerciseData = async () => {
      const exerciseDBURL = "https://exercisedb.p.rapidapi.com";
      const YoutubeURL = "https://youtube-search-and-download.p.rapidapi.com"

      const ExerciseDetailData = await fetchData(
        `${exerciseDBURL}/exercises/exercise/${id}`,
        Exerciseoptions
      );
      // console.log(ExerciseDetailData)
      setexerciseDetail(ExerciseDetailData)

      const exercisevideoData = await fetchData(`${YoutubeURL}/search?query=${ExerciseDetailData.name}`,Youtubeoptions);
      setExerciseVideos(exercisevideoData.contents)

      const targetMusclesData = await fetchData(`${exerciseDBURL}/exercises/target/${ExerciseDetailData.target}`,Exerciseoptions)
      setTargetMuscleExercises(targetMusclesData)

        const targetequipmentData = await fetchData(`${exerciseDBURL}/exercises/equipment/${ExerciseDetailData.equipment}`,Exerciseoptions)
        setTargetequiment(targetequipmentData);
      } 
    fetchExerciseData();
  },[id])


  return (
    <div>
      <Details exerciseDetail={exerciseDetail}/>
      <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercise targetMuscleExercises={targetMuscleExercises} targetequipment={targetequipment}/>
    </div>
  )
}

export default ExerciseDetail