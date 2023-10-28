import React from "react";
import Track from "../../Components/Workshop-track/Track";

function Workshops() {
  return (
    <>
      <div className="text-white font-montserrat mx-auto my-36 pl-24 pr-24 py-6 bg-black hidden lg:block">
        <h1 className="text-xl text-deep-orange font-bold tracking-wider uppercase lg:text-4xl my-2">
          Workshops
        </h1>
        <div className="track flex justify-start my-24 items-center w-full gap-2">
          <div className="mentor-1 basis-1/4 ">
            <img src="./t1mentor1.png" alt="" className="h-[30vh] w-[15vw]" />
            <p className="text-xl text-deep-orange uppercase">Aromal PS</p>
            <p className="text-xs">Webmaster</p>
            <p className="text-xs">Out of the Box</p>
          </div>
          <div className="track-details basis-2/4 text-center mr-10">
            <h5>TRACK 01</h5>
            <p className="text-2xl text-deep-orange mb-10">
              WebFrame: No-code Fusion
            </p>
            <p>
              WebFrame is a software framework that is designed to develop the
              framework of web applications and is the best place for designers
              to get inspired from other apps around the web.
            </p>
          </div>
          <div className="mentor-2 basis-1/4">
            <img src="./t1mentor2.png" alt="" className="h-[30vh] w-[15vw]" />
            <p className="text-xl text-deep-orange uppercase">Rithunath G</p>
            <p className="text-xs">Visual Designer</p>
            <p className="text-xs">Admisfits</p>
          </div>
        </div>
        <div className="track flex justify-start my-24 items-center">
          {" "}
          {/*flex-container*/}
          <div className="track-details basis-2/3 mr-32 ">
            <h5>TRACK 02</h5>
            <p className="text-2xl text-deep-orange mb-10">
              {" "}
              Network Pen Testing in Cyberspace
            </p>
            <p>
              This session is designed to equip you with the essential knowledge
              and tools to assess and enhance the security of network systems,
              making you a formidable guardian of the digital realm.
            </p>
          </div>
          <div className="mentor">
            {/* <img
            src="../../assets/t3mentor.png"
            alt="track-2-mentor"
            className="h-[30vh] w-[30vw]"
          /> */}
            <div>
              <img
                src="./t2mentor.png"
                alt=""
                className="h-[30vh] w-[15vw] mb-1"
              />
            </div>
            <p className="text-xl text-deep-orange uppercase">Sachin Jose</p>
            <p className="text-xs">Cyber Security Engineer</p>
            <p className="text-xs">Xoriant</p>
          </div>
        </div>
        <div className="track flex justify-start my-24 items-center">
          <div className="mentor mr-32">
            {/* <img
            src="../../assets/t3mentor.png"
            alt="track-2-mentor"
            className="h-[30vh] w-[30vw]"
          /> */}
            <div>
              <img
                src="./t3mentor.png"
                alt=""
                className="h-[30vh] w-[10vw] mb-1"
              />
            </div>
            <p className="text-xl text-deep-orange uppercase">Dr.Vipin Das</p>
            <p className="text-xs">Lead Engineer</p>
            <p className="text-xs">Bosch Global Software Technologies </p>
          </div>
          <div className="track-details basis-2/3 text-end ">
            <h5>TRACK 03</h5>
            <p className="text-2xl text-deep-orange mb-10">
              Power Cells: Unleashing EV Potential
            </p>
            <p>
              WebFrame is a software framework that is designed to develop the
              framework of web applications and is the best place for designers
              to get inspired from other apps around the web.
            </p>
          </div>
        </div>
      </div>
      <div className="text-black font-montserrat mx-auto my-36 px-6 py-6  bg-white block lg:hidden">
        <h1 className="text-2xl text-deep-orange font-bold tracking-wider uppercase mb-12 ">
          Workshops
        </h1>

        <div className="flex flex-col gap-24">
        <Track
          id="01"
          imagePath="./t1mentors.png"
          wname="WebFrame: No-code"
          sname="Aromal PS & Rithunath G"
          designation=""
          institution=""
          isOdd={false}
          description="WebFrame is a software framework that is designed to develop the framework of web applications and is the best place for designers to get inspired from other apps around the web."
        />
        <Track
          id="02"
          imagePath="./t2mentor.png"
          wname="Network Pen Testing
          in Cyberspace"
          sname="Sachin Jose"
          designation="Cyber Security Engineer"
          institution="Xoriant"
          isOdd={true}
          description="This session is designed to equip you with the essential knowledge and tools to assess and enhance the security of network systems, making you a formidable guardian of the digital realm.
          "
        />
        <Track
          id="03"
          imagePath="./t3mentor.png"
          wname="Power Cells:
          Unleashing EV Potential "
          sname="Dr.Vipin Das"
          designation="Lead Engineer"
          institution="Bosch Global Software Technologies"
          description="This session is designed to equip you with the essential knowledge and tools to assess and enhance the security of network systems, making you a formidable guardian of the digital realm.
          "
        />


        </div>

      </div>
    </>
  );
}

export default Workshops;
