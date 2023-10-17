import React, { useState } from 'react';
import Timer from '../../Components/Timer/Timer';
import './About.css';

function About() {
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);

  const toggleDiv = () => {
    setShowDiv1(!showDiv1);
    setShowDiv2(!showDiv2);
  };

  return (
    <div className='About font-montserrat'>
      <Timer />
      <div className='ml-24 my-52 max-[450px]:my-24 max-[450px]:ml-12'>
        <h1 className='font-bold text-4xl tracking-wide mb-10'>ABOUT IAS</h1>
        <div className='flex mr-28 max-[450px]:flex-col  max-[450px]:mr-12'>
          <img src="./Rectangle.png" alt="" className='h-[40vh] w-[40vw] mr-10 max-[450px]:h-[25vh] max-[450px]:w-full max-[450px]:mb-10' />
          <div className='text-justify text-lg'>
            IEEE INDUSTRIAL APPLICATION SOCIETY, College Of Engineering Chengannur is a
            prestigious student branch chapter functioning for nearly 6 years in CEC. IEEE IAS SBC
            CEC has gained a reputation for its consistent achievements and is recognized as a source
            of professional growth, boasting 95 members in 2023.
          </div>
        </div>
      </div>
      <div className='ml-24 my-52 max-[450px]:ml-12'>
        <h1 className='font-bold text-4xl tracking-wider max-[450px]:tracking-normal'>ABOUT EMERGENCE</h1>
        <div className='flex gap-16'>
          <h3
            onClick={toggleDiv}
            className={`text-lg font-semibold ${showDiv1 ? 'text-[#E9441D] active' : ''} mt-5`}
          >
            Overview
          </h3>
          <h3
            onClick={toggleDiv}
            className={`text-lg font-semibold ${showDiv2 ? 'text-[#E9441D] active' : ''} mt-5`}
          >
            Activities
          </h3>
        </div>
        <div className='flex my-7 text-justify text-lg max-[450px]:flex-col  max-[450px]:mr-12'>
          <div className='mr-10 max-[450px]:mr-0' style={{ display: showDiv1 ? 'block' : 'none' }}>
            Emergence is not just an event; it's an experience that brings together the brightest minds and creative thinkers from across Kerala. It's a two-day techno-managerial conclave that aims to inspire, educate, and connect participants in an atmosphere of innovation and collaboration.
          </div>
          <div className='mr-10 max-[450px]:mr-0' style={{ display: showDiv2 ? 'block' : 'none' }}>
            Emergence is  just an event; it's an experience that brings together the brightest minds and creative thinkers from across Kerala. It's a two-day techno-managerial conclave that aims to inspire, educate, and connect participants in an atmosphere of innovation and collaboration.
          </div>
          <img src="./Photo.png" alt="" className='mr-28 h-[40vh] w-[40vw] max-[450px]:mt-10 max-[450px]:w-full max-[450px]:h-[30vh]' />
        </div>
      </div>
    </div>
  );
}

export default About;
