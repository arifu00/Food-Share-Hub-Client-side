import { Link } from "react-router-dom";
import bgImg from "../assets/bg/bg_2.jpg";

const HelpOther = () => {
  return (
    <div>
      <div
        className="relative bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="bg-opacity-20 absolute inset-0 bg-black"></div>
        <div className="relative z-10">
          <div className="container mx-auto md:py-[200px]">
            <div className="font-serif">
              <h4 className="text-basea lg:text-xl text-[#D59B2D] font-bold">
                <span className=" mr-4">-----</span> Help Other People
              </h4>
              <h1 className="text-white text-xl md:text-3xl lg:text-5xl ml-12 my-4 font-bold md:w-80 lg:w-[500px]">
                We Dream to Create A Bright Future Of The Underprivileged
                Children
              </h1>
              <Link to="/addFood">
                <button className="mt-4 ml-12 text-white text-xl font-bold bg-[#CA9C42] px-2 md:px-4 py-1 md:py-3 rounded-lg md:rounded-3xl">
                  Donate Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpOther;
