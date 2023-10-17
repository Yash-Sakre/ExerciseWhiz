import { FaDumbbell } from "react-icons/fa";

const BodyPart = ({ item, setBodyParts, bodyPart }) => {
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center text-center p-12 border 2sm:w-[12rem] w-[15rem] 2sm:h-[10rem]  cursor-pointer card rounded-xl"
        onClick={() => {
          setBodyParts(item);
          window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
        }}
      >
        <FaDumbbell size={40} />
        <div className=" capitalize">{item}</div>
      </div>
    </div>
  );
};

export default BodyPart;
