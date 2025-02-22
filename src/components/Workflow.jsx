import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems, info } from "../constants";

function WorkFlow() {
  return (
    <>
      <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className=" mt-20">
          <h2 className=" text-3xl sm:text-5xl lg:text-6xl text-center mt-6 lg:mt-20 tracking-wide">
            {info[2].title}
            <span className="bg-gradient-to-r from-red-300 to-red-800 text-transparent bg-clip-text">
              {" "}
              {info[2].subTitle}
            </span>
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className=" p-2 w-full lg:w-1/2">
              <img src={codeImg} alt="Code" />
            </div>
            <div className=" pt-12 w-full lg:w-1/2">
              {checklistItems.map((item, index) => (
                <div key={index} className="flex mb-12">
                  <div
                    className=" text-orange-400 mx-6 bg-neutral-900
                            h-10 w-10 p-2 justify-center items-center rounded-full"
                  >
                    <CheckCircle2 />
                  </div>
                  <div className="">
                    <h5 className=" mt-1 mb-2 text-xl">{item.title}</h5>
                    <p className=" text-md text-neutral-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkFlow;
