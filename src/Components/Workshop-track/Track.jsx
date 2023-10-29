import React, { useState } from "react";

function Track(props) {
  const [CardState,setCard]=useState(false)


  const toggleDiv = () => {
    setCard(!CardState);
  };

  return (
    <>
    {/* <div className="relative py-28">
      <div className="layer-1 relative z-20">
        <div className="track-overview my-10 flex justify-between  border-solid border-deep-orange border-2 pt-5 relative">
          <div className="mentor-image pb-0">
            <img src={props.imagePath} alt="" className="h-[10em] w-[10em]" />
          </div>
          <div className="mentor-details text-end pr-2">
            <p className="text-xl font-bold tracking-wider mb-5">
              {props.wname}
            </p>
            <p className="text-sm">
              SPEAKER: <b>{props.sname}</b>
            </p>
            <p className="text-sm">{props.designation}</p>
            <p className="text-sm">{props.institution}</p>
          </div>
          <div className="inline-block tracking-wider border-solid border-black border-1 absolute top-[-20px] bg-white right-5 p-2">
            TRACK {props.id}
          </div>
        </div>
      </div>
      <div className="layer-2 absolute top-0 z-0">
        <div className="track-details w-full border-solid bg-deep-orange border-2 text-white p-8">
          <p className="text-2xl font-semibold pt-4 mb-5">{props.wname}</p>
          <p className="text-md">{props.description}</p>
          <div className="inline-block tracking-wider border-solid border-black border-1 absolute top-[-20px] bg-white left-5 p-2 text-black font-semibold">
            TRACK {props.id}
          </div>
        </div>
      </div>
    </div> */}


    <div className="relative w-full h-[30vh] flex  z-0" onClick={toggleDiv}>

      <div className={"w-full h-full flex border-[1px] border-[#E9441D] bg-white transition-all "+(CardState? "z-0 translate-x-2 translate-y-2 ":"z-30 ")+(props.isOdd? " flex-row-reverse":"")}>
        <h1 className="bg-white font-bold absolute top-[-10px] right-5 px-2">TRACK {props.id}</h1>
        <img src={props.imagePath} alt="" className={"h-[95%] flex self-end w-[50%] pt-5 transition-all "+(CardState? "hidden":"block")}/>
        <div className={"h-full w-full  flex-col justify-center text-center transition-all  "+(CardState? "hidden":"flex")}>
          <h1 className="text-lg font-bold ">{props.wname}</h1> 
          <p className="text-sm">Speaker <span className="font-bold">: {props.sname}</span></p> 

        </div>
      </div>
      <div className={"w-full h-full bg-[#E9441D] absolute top-3 left-3 transition-all "+(CardState?"z-30 opacity-100 -translate-x-4 -translate-y-5 ":"z-0 opacity-80")}>
        <h1 className="bg-white font-bold absolute top-[-10px] left-5 px-2">TRACK {props.id}</h1>
        <div className="flex flex-col p-5 text-white justify-center w-full h-full">
          <p className="text-lg font-bold min-[380px]:text-xl min-[500px]:text-3xl">{props.wname}</p>
          <p className="max-[380px]:text-xs text-base py-2">{props.description}</p>

        </div>
      </div>


    </div>
    </>
  );
}

export default Track;
