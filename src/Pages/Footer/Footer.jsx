import React from "react";
import {BsInstagram,BsLinkedin,BsGlobe,BsFacebook} from "react-icons/bs";


function Footer()
{
    const jsxelement=(
        <>

            <div className=" relative flex h-fit min-h-[35vh] text-white font-montserrat bg-right bg-cover bg-no-repeat max-[950px]:min-h-fit " style={{backgroundImage:`url('/Group 1 (2).png')`}}>
                <div className="absolute w-full h-full bg-gradient-to-r from-black via-black to-transparent z-0 max-[950px]:bg-black"></div>
                <a href="" className="absolute w-1/4 h-full right-0"></a>
                <div className="p-10 z-10 max-[950px]:w-full">
                    <p className="text-5xl font-semibold max-[950px]:text-center">GET YOUR TICKET</p>
                    <div className="flex items-center h-full max-[950px]:h-fit max-[950px]:py-10 max-[950px]:justify-center">
                        <a href="" className="bg-[#EC431B] h-12 w-[30vh] flex justify-center items-center max-[950px]:">Get your Ticket now</a>
                    </div>
                    {/* <div className="">
                        <div className="bg-gradient-to-b from-black to-transparent absolute bottom-0 w-full"></div>
                        <img src="./Group 5.png" alt="" className="absolute bottom-0 w-full left-0"/>
                    </div> */}
                </div>
            </div>
            <div className="  h-fit flex font-montserrat max-[950px]:flex-col-reverse">
                <div className="basis-1/3 justify-center items-center flex flex-col mx-2">
                    <div className="w-fit h-fit">
                        <img src="./black_logo.png" alt="" className="h-[13vh] max-[1570px]:h-[8vh]"/>
                        <p className="self-start py-3 font-medium">All Rights Reserved.</p>
                    </div>
                </div>

                <div className="flex grow justify-center items-center max-[950px]:hidden">
                    <img src="./Group.png" alt="" className="h-[23vh] max-[1570px]:h-[18vh]"  />
                </div>

                <div className="basis-1/3 items-end flex flex-col p-8 mr-5 gap-4 max-[950px]:items-center max-[950px]:pb-12">
                    <p className="font-extrabold text-4xl py-2">CONTACT US</p>
                    <p>Swathy: 8378928747</p>
                    <p className="pb-6">Akash: 1234567891</p>
                    <p className="font-bold text-2xl py-2">EMAIL</p>
                    <p>Emergence2023@gmail.com</p>
                    <div className="flex w-full justify-end gap-4 max-[950px]:justify-center">
                        <a href="" className="flex items-center"><BsInstagram/></a>
                        <a href="" className="flex items-center"><BsLinkedin/></a>
                        <a href="" className="flex items-center"><BsGlobe/></a>
                        <a href="" className="flex items-center"><BsFacebook/></a>
                        <p className="border-l-2 pl-3 border-black">@ieeesbcec</p>
                        
                    </div>
                </div>
            </div>
        </>
    );
    return jsxelement;
}

export default Footer;