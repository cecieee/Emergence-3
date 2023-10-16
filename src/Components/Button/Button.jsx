import React from "react";

const Button = (props) => {
  return (
    <button className="bg-deep-orange w-[full] rounded-md font-semibold my-6 mx-auto p-3  text-black hover:bg-slate-400 duration-500">
      {props.children}
    </button>
  );
};

export default Button;
