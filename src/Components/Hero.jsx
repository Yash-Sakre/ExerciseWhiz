const Hero = () => {
  const handleExploreExercises = (e) => {
    e.preventDefault();
    const targetId = "Exercises"; // ID of the target section
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className="bg-image h-[100vh] mx-2 md:mx-12 rounded-3xl mt-3"
      id="Hero"
    >
      <div className="flex flex-col justify-center ml-4 md:ml-10 h-[100vh]">
        <div className=" uppercase font-bold lg:text-[5rem] md:text-[4rem] sm:text-[3rem] text-[2rem] bg-gradient-to-r from-white via-red-600 to-white bg-clip-text text-transparent">
          Shape Yourself
        </div>
        <div className="text-light md:text-[1.5rem] text- md:w-[40%] w-[70%] font-medium ">
          Fitness are often used to describe what your business all about and
          deliver message important to pay attention.
        </div>
        <div className="mt-4">
          <button className="text-light border-[3px] border-primary px-5 py-2 hover:bg-primary hover:text-black font-semibold"> Exercise </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
