
const Hero = () => {
  return (
    <div className="bg-image w-full h-[100vh] ">
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <div className="  font-bold md:text-[4rem] sm:text-[2.5rem] text-[2rem]">
        Unlock Your Potential
        </div>
        <div className="text-[1rem] font-bold md:text-[2rem] sm:text-[1.5rem]">
          Your Ultimate Fitness Tutorial Destination
        </div>

        <button className="mt-2 bg-primary  rounded-lg px-4 py-2">
          Explore Exercises
        </button>
      </div>
    </div>
  )
}

export default Hero