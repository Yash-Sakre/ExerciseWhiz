import BodyPartImage from "../assets/bodyPart.png";
import TargetImage from "../assets/target.png";
import EquipmentImg from "../assets/equipment.png";

const Details = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const ExtraDetails = [
    {
      icon: BodyPartImage,
      name: bodyPart,
      des: "BodyPart",
    },
    {
      icon: TargetImage,
      name: target,
      des: "Target Muscles",
    },
    {
      icon: EquipmentImg,
      name: equipment,
      des: "Equipment needed",
    },
  ];
  return (
    <div className=" mx-[1rem] bg-white mt-10  lg:mx-[3rem] min-w-[90vw] items-center rounded-2xl shadow-lg shadow-red-100 my-auto px-[2rem] py-[2rem] flex flex-col lg:flex-row justify-between">
      <img src={gifUrl} alt="" className="" />
      <div className="flex flex-col lg:flex-col">
        <div className=" text-[2rem] lg:text-[2.5rem] font-bold lg:w-[50vw] capitalize">
          {name}
        </div>
        <div className="lg:w-[40vw] font-semibold ">
          Staying active with regular workouts is essential for maintaining
          strength and fitness. Incorporating the{" "}
          <span className="text-primary">{name}</span> exercise into your
          routine can effectively target your{" "}
          <span className="text-primary">{target}</span> muscles, and it has the
          added benefit of boosting your mood and energy levels
        </div>
        <div className="flex flex-col gap-5 mt-5">
          {ExtraDetails.map((item, index) => (
            <div key={index} className="flex items-center gap-5 ">
              <div className=" border p-3 rounded-full">
                <img src={item.icon} alt={item.name} className="w-10" />
              </div>
              <div>
                <p className=" capitalize text-[1.2rem] font-semibold">
                  {item.name}
                </p>
                {/* <p className=" capitalize text-[0.6rem] ">{item.des}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
