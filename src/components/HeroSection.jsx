import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { info } from "../constants";

function HeroSection() {
  return (
    <>
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          {info[0].title}
          <span className="bg-gradient-to-r from-red-300 to-red-800 text-transparent bg-clip-text">
            {" "}
            {info[0].subTitle}
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">
          {info[0].discription}
        </p>
        <div className="flex justify-center my-10">
          <a
            href="#"
            className="bg-gradient-to-r from-red-500 to-red-800 py-3 px-4 mx-3 rounded-md"
          >
            {info[0].buttonStart}
          </a>
          <a href="#" className="py-3 px-4 mx-3 rounded-md border">
            {info[0].buttonDoc}
          </a>
        </div>
        <div className="flex mt-10 justify-center">
          <video
            autoPlay
            loop
            muted
            className="rounded-md w-1/2 border border-red-700 shadow-red-400 mx-2 my-4"
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            autoPlay
            loop
            muted
            className="rounded-md w-1/2 border border-red-700 shadow-red-400 mx-2 my-4"
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
