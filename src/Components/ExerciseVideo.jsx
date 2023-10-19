
const ExerciseVideo = ({ exerciseVideos, name }) => {


  return (
    <div className="mx-[1rem]  bg-white mt-10 lg:mx-[3rem] min-w-[90vw] items-center justify-center rounded-2xl shadow-lg shadow-red-100 my-auto px-[2rem] py-[2rem] flex flex-col lg:flex-row  ">
      <div className="">
        <div className=" text-[1rem] md:text-[2rem] capitalize font-bold text-center">
          Watch <span className="text-primary">{name}</span> related Videos
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 flex-wrap gap-10 mt-10 ">
          {exerciseVideos.slice(0, 4).map((item,index) => (
            <iframe
            key={index}
              className="lg:w-[20vw] lg:h-[30vh] w-full h-full"
              src={`https://www.youtube.com/embed/${item.video.videoId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExerciseVideo;
