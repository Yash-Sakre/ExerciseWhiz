import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/hero.jpg";

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
    <div className="   md:mx-12 mt-5 flex flex-col items-center" id="Hero">
      <div className=" font-normal text-2xl teko">
        ACHIEVE YOUR FITNESS GOALS
      </div>
      <div className="text-5xl sm:text-8xl leading-none font-bold futura tracking-wider text-center">
        {" "}
        FIND YOUR
        <br /> STRENGTH
      </div>
      <div className="flex mt-5 relative">
        <img
          className="h-[50vh] sm:h-[80vh] w-[90vw] rounded-xl"
          src={p1}
          alt="img1"
          loading="lazy"
        />
        <button className="absolute bottom-2  right-2 py-2 px-4 bg-primary border-0 rounded-xl text-white font-normal" onClick={handleExploreExercises}>
          Exercise
        </button>
      </div>
    </div>
  );
};

export default Hero;
