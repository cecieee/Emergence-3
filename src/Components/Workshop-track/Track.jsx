import React, { useState } from "react";

function Track(props) {
  return (
    <>
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
      <div className="layer-2 relative z-10">
        <div className="track-details w-full border-solid bg-deep-orange border-2 text-white p-8">
          <p className="text-2xl font-semibold pt-4 mb-5">{props.wname}</p>
          <p className="text-md">{props.description}</p>
          <div className="inline-block tracking-wider border-solid border-black border-1 absolute top-[-20px] bg-white left-5 p-2 text-black font-semibold">
            TRACK {props.id}
          </div>
        </div>
      </div>
    </>
  );
}

export default Track;
