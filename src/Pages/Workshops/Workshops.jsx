import React from "react";
import Track from "../../Components/Workshop-track/Track";
import "./Workshops.css";
function Workshops() {
  return (
    <>
      <div className="text-white font-montserrat mx-auto  px-24 py-6 bg-[#0c0d0d] hidden lg:block">
        <h1 id="tracks" className="text-3xl text-deep-orange font-bold tracking-wider uppercase lg:text-4xl my-4 pt-10" data-aos="fade-up" data-aos-duration="1000">
          Workshops
        </h1>
        <div className="track flex justify-start my-44 px-11 items-start w-full gap-2">
          <div className="mentor-1  basis-1/4" data-aos="fade-left" data-aos-duration="1000">
            <img src="./t1mentor1.png" alt="" className="bg-white w-[15vw]" />
            <p className="text-xl text-deep-orange uppercase pt-4 font-semibold">Aromal PS</p>
            <p className="text-sm">Webmaster</p>
            <p className="text-sm">Out of the Box</p>
          </div>
          <div className="track-details basis-2/4 text-center mr-5" data-aos="fade-up" data-aos-duration="1000">
            <h5 className="text-lg">TRACK 01</h5>
            <p className="text-3xl text-deep-orange mb-10 font-semibold">
              WebFrame: No-code Fusion
            </p>
            <p className="text-justify text-lg word-spacing tracking-wider">
              WebFrame is a specialized software framework meticulously engineered to streamline the creation and refinement of web applications, offering an excellent resource for designers seeking inspiration from various web applications throughout the digital sphere.
            </p>
          </div>
          <div className="mentor-2 basis-1/4" data-aos="fade-right" data-aos-duration="1000">
            <img src="./t1mentor2.png" alt="" className=" bg-white w-[15vw] ml-14" />
            <p className="text-xl text-deep-orange uppercase ml-14 font-semibold pt-4">Rithunath G</p>
            <p className="text-sm ml-14">Visual Designer</p>
            <p className="text-sm ml-14">Admisfits</p>
          </div>
        </div>
        <div className="track flex justify-start my-44 px-11 items-start">
          {" "}
          <div className="mentor basis-1/4" data-aos="fade-left" data-aos-duration="1000">
            {/* <img
            src="../../assets/t3mentor.png"
            alt="track-2-mentor"
            className="h-[30vh] w-[30vw]"
          /> */}
            <div>
              <img
                src="./t2mentor.png"
                alt=""
                className="bg-white w-[15vw] mb-1"
              />
            </div>
            <p className="text-xl text-deep-orange uppercase font-semibold pt-4">Sachin Jose</p>
            <p className="text-sm">Cyber Security Engineer</p>
            <p className="text-sm">Xoriant</p>
          </div>
          {/*flex-container*/}
          <div className="track-details  text-start  basis-3/4 pr-4" data-aos="fade-up" data-aos-duration="1000">
            <h5 className="text-lg">TRACK 02</h5>
            <p className="text-3xl text-deep-orange mb-10 font-semibold">
              {" "}
              Network Pen Testing in Cyberspace
            </p>
            <p className="text-start text-lg tracking-wider word-spacing ">
              The primary objective of this session is to provide you with the fundamental knowledge and a comprehensive set of tools required to effectively evaluate and bolster the security of network systems. By mastering these skills, you will be empowered to assume the role of a formidable guardian, dedicated to safeguarding the intricate digital domain.
            </p>
          </div>

        </div>
        <div className="track flex justify-start my-44 px-11 items-start">
          <div className="mentor basis-1/4" data-aos="fade-left" data-aos-duration="1000">
            {/* <img
            src="../../assets/t3mentor.png"
            alt="track-2-mentor"
            className="h-[30vh] w-[30vw]"
          /> */}
            <div>
              <img
                src="./t3mentor.png"
                alt=""
                className="bg-white w-[15vw] mb-1"
              />
            </div>
            <p className="text-xl text-deep-orange uppercase font-semibold pt-4">Dr.Vipin Das</p>
            <p className="text-sm">Lead Engineer</p>
            <p className="text-sm">Bosch Global Software Technologies </p>
          </div>
          <div className="track-details basis-3/4 text-start pr-4" data-aos="fade-up" data-aos-duration="1000">
            <h5 className="text-lg">TRACK 03</h5>
            <p className="text-3xl text-deep-orange mb-10 font-semibold">
              Power Cells: Unleashing EV Potential
            </p>
            <p className="text-justify text-lg tracking-wider word-spacing">
              The groundbreaking innovations in power cell technology are ushering in a new era for electric vehicles (EVs), catalyzing remarkable improvements in their operational range, efficiency, and charging speed. These cutting-edge advancements are instrumental in unleashing the untapped capabilities of EVs, thus propelling us towards a more sustainable and environmentally conscious future.
            </p>
          </div>
        </div>
      </div>
      <div className="text-black font-montserrat mx-auto my-36 px-6 py-6  bg-white block lg:hidden">
        <h1 className="text-4xl text-deep-orange font-bold tracking-wider uppercase mb-12 ">
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
