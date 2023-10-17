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
      <div className='ml-28 my-52 '>
        <h1 className='font-bold text-4xl tracking-wide '>ABOUT IAS</h1>
        <div className='my-6 flex'>
          <img src="./Rectangle.png" alt="" className='h-[40vh] w-[40vw]' />
          <div className='ml-5 mr-28 text-justify text-lg'>
            IEEE INDUSTRIAL APPLICATION SOCIETY, College Of Engineering Chengannur is a
            prestigious student branch chapter functioning for nearly 6 years in CEC. IEEE IAS SBC
            CEC has gained a reputation for its consistent achievements and is recognized as a source
            of professional growth, boasting 95 members in 2023.
          </div>
        </div>
      </div>
      <div className='ml-28 my-52'>
        <h1 className='font-bold text-4xl tracking-wider'>ABOUT EMERGENCE</h1>
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
        <div className='flex my-7 text-justify text-lg'>
          <div className='mr-20' style={{ display: showDiv1 ? 'block' : 'none' }}>
            Emergence is not just an event; it's an experience that brings together the brightest minds and creative thinkers from across Kerala. It's a two-day techno-managerial conclave that aims to inspire, educate, and connect participants in an atmosphere of innovation and collaboration.
          </div>
          <div className='mr-20' style={{ display: showDiv2 ? 'block' : 'none' }}>
            Emergence is  just an event; it's an experience that brings together the brightest minds and creative thinkers from across Kerala. It's a two-day techno-managerial conclave that aims to inspire, educate, and connect participants in an atmosphere of innovation and collaboration.
          </div>
          <img src="./Photo.png" alt="" className='mr-28 h-[40vh] w-[40vw]' />
        </div>
      </div>
    </div>
  );
}

export default About;
