import { FaDumbbell } from "react-icons/fa";

const BodyPart = ({ item,img, setBodyPart, bodyPart }) => {
  return (
    <button
     
      className="flex flex-col justify-center items-center text-center  border 2sm:w-[15rem] w-[10rem] 2sm:h-[12rem] h-[12rem]  cursor-pointer card rounded-xl"
      onClick={() => {
        setBodyPart(item);
        // console.log(item);
        window.scrollTo({ top: 1200, left: 100, behavior: "smooth" });
      }}
    >
      <img src={img} className="w-[4rem]" alt="arms.png" loading="lazy" />
      <div className=" capitalize">{item}</div>
    </button>
  );
};

export default BodyPart;
