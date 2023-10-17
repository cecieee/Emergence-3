import React from "react";

const Button = (props) => {
  return (
    <button className="bg-deep-orange w-[full] rounded-md font-semibold my-6 mx-auto p-3  text-black border-black hover:bg-black hover:border hover:border-[#EC431B] hover:text-[#EC431B] delay-75 transition-all ease-in-out">
      {props.children}
    </button>
  );
};

export default Button;
