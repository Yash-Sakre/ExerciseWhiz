
const Hero = () => {
  const handleExploreExercises = (e) => {
    e.preventDefault();
    const targetId = "Exercises"; // ID of the target section
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="bg-image w-full h-[100vh] " id="Hero">
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <div className=" text-light font-bold lg:text-[5rem] md:text-[4rem] sm:text-[2.5rem] text-[2rem]">
        Unlock Your Potential
        </div>
        <div className=" text-light lg:text-[3rem] text-[1rem] font-bold md:text-[2rem] sm:text-[1.5rem]">
          Your Ultimate Fitness Tutorial Destination
        </div>

        <a href="#Exercises" className=" text-light mt-2 bg-primary  rounded-lg px-4 py-2" >
          Explore Exercises
        </a>
      </div>
    </div>
  )
}

export default Hero