import BodyPart from "./BodyPart";
import All from "../assets/icons/All.png";
import Arms from "../assets/icons/arms.png";
import Back from "../assets/icons/back.png";
import Chest from "../assets/icons/chest.png";
import LowerLegs from "../assets/icons/LowerLegs.png";
import UpperLegs from "../assets/icons/upperLegs.png";
import Neck from "../assets/icons/neck.png";
import Shoulder from "../assets/icons/shoulder.png";
import Waist from "../assets/icons/waist.png";
import Cardio from "../assets/icons/cardio.png";
import { useRef } from "react";

import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  if (!data || !Array.isArray(data)) {
    return null;
  }

  const BodyPartImage = [
    {
      text: "1",
      img: All,
    },
    {
      text: "2",
      img: Back,
    },
    {
      text: "3",
      img: Cardio,
    },
    {
      text: "4",
      img: Chest,
    },
    {
      text: "5",
      img: Arms,
    },
    {
      text: "6",
      img: LowerLegs,
    },
    {
      text: "7",
      img: Neck,
    },
    {
      text: "8",
      img: Shoulder,
    },
    {
      text: "9",
      img: Arms,
    },
    {
      text: "10",
      img: UpperLegs,
    },
    {
      text: "11",
      img: Waist,
    },
  ];

  for (let i = 0; i < 11; i++) {
    BodyPartImage[i].text = data[i];
  }

  const ref = useRef(null);

  const SlideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 200;
  };

  const SlideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 200;
  };

  return (
    <div ref={ref} className="mt-10 flex place-items-center px-10">
      <BsChevronLeft onClick={SlideLeft} size={40} className="mr-1 cursor-pointer"/>
      <div
        id="slider"
        className=" flex w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {BodyPartImage.map((item, index) => (
          <div
            key={item?.id || index}
            itemID={item?.id || index}
            title={item?.id || index}
            className="m-1"
          >
            <BodyPart
              item={item.text}
              img={item.img}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </div>
        ))}
      </div>
      <BsChevronRight onClick={SlideRight} size={40} className="ml-1 cursor-pointer"/>
    </div>
  );
};

export default HorizontalScrollBar;
