import React from "react";
import Typed from "react-typed";
import Button from "../../Components/Button/Button";

const Hero = () => {
  return (
    <div className="text-white p-5">
      <div className="max-w-[800px] mt-[-96px] w-full h-[105vh] max-[450px]:h-[70vh] mx-auto text-center flex flex-col justify-center p-3">
        <p className="text-deep-orange font-bold p-2">
          IEEE STUDENT BRANCH CEC
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-3" data-aos="fade-in" data-aos-duration="2500">
          Emergence 3.0
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-2xl sm:text-4xl text-xl font-bold py-4">
            Convergence of
          </p>
          <Typed
            className="md:text-2xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Innovation", "Learning", "Inspiration"]}
            typeSpeed={80}
            backSpeed={90}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl px-1 font-bold text-soft-grey">
          November 4th-5th | College of Engineering Chengannur
        </p>
        {/* <button className="bg-deep-orange w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Register Now
        </button> */}
        <Button className="lg:mt-6 border-black hover:bg-black hover:border hover:border-[#EC431B] hover:text-[#EC431B] delay-75 transition-all ease-in-out" >
          <a href={"http://www.yepdesk.com/emergence-3"}>Register Now</a>
          </Button>
      </div>
    </div>
  );
};

export default Hero;
