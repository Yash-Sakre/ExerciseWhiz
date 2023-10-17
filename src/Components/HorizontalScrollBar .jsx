import BodyPart from "./BodyPart";

const HorizontalScrollBar = ({ data, bodyParts, setBodyPart }) => {
  if (!data || !Array.isArray(data)) {
    return null;
  }

  return (
    <div className="mt-10 grid 2sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-5 lg:gap-10 place-items-center">
      {data.map((item, index) => (
        <div
          key={item?.id || index}
          itemID={item?.id || index}
          title={item?.id || index}
          className="m-1"
        >
          <BodyPart
            item={item}
            bodyParts={bodyParts}
            setBodyParts={setBodyPart}
          />
        </div>
      ))}
    </div>
  );
};

export default HorizontalScrollBar;
