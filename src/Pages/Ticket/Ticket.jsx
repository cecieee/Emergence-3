import React from "react";
import Button from "../../Components/Button/Button";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Sit tight for the tech extravganza of the year!
          </h1>
          <p>Grab your Tickets</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            {/* <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
              Notify Me
            </button> */}
            <Button children="Register" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
