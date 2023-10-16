import React from "react";
import {BsInstagram,BsLinkedin,BsGlobe,BsFacebook} from "react-icons/bs";


function Footer()
{
    const jsxelement=(
        <>
            <div className="w-full h-screen"></div>
            <div className="flex h-fit min-h-[40vh] text-white font-montserrat bg-[url('./Group 1.png')] bg-cover bg-no-repeat" style={{backgroundImage:`url('/Group 1.png')`}}>
                <div className="p-10">
                    <p className="text-5xl font-semibold">GET YOUR TICKET</p>
                    <div className="flex items-center h-full">
                        <a href="" className="bg-[#EC431B] h-12 w-[30vh] flex justify-center items-center">Get your Ticket now</a>
                    </div>
                </div>
            </div>
            <div className="  h-fit flex font-montserrat ">
                <div className="basis-1/3 justify-center items-center flex flex-col">
                    <div className="w-fit h-fit">
                        <img src="./black_logo.png" alt="" className="h-[13vh] "/>
                        <p className="self-start py-3 font-medium">All Rights Reserved.</p>
                    </div>
                </div>

                <div className="flex grow justify-center items-center">
                    <img src="./Group.png" alt="" className="h-[23vh]"  />
                </div>

                <div className="basis-1/3 items-end flex flex-col p-8 mr-5 gap-4">
                    <p className="font-extrabold text-4xl py-2">CONTACT US</p>
                    <p>Swathy: 8378928747</p>
                    <p className="pb-6">Akash: 1234567891</p>
                    <p className="font-bold text-2xl py-2">EMAIL</p>
                    <p>Emergence2023@gmail.com</p>
                    <div className="flex w-full justify-end gap-4">
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