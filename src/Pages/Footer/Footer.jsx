import React from "react";
import {BsInstagram,BsLinkedin,BsGlobe,BsFacebook} from "react-icons/bs";


function Footer()
{

    const instagram_link="https://www.instagram.com/ieee_sb_cec/"
    const facebook_link="https://www.facebook.com/IEEECEC"
    const sb_website_link="https://cecieee.org/"
    const ias_website_link="http://ias.cecieee.org/"
    const linkedin_link="https://www.linkedin.com/company/cecieee/"
    const Map_link="https://maps.app.goo.gl/hcgkytZqFGLKTscR7"

    const jsxelement=(
        <>

            <div id="Contact" className=" relative flex h-fit min-h-[35vh] text-white font-montserrat bg-right bg-cover bg-no-repeat max-[950px]:min-h-fit " style={{backgroundImage:`url('/Group 1 (2).png')`}}>
                <div className="absolute w-full h-full bg-gradient-to-r from-black via-black to-transparent z-0 max-[950px]:bg-black"></div>
                {/* eslint-disable-next-line*/}
                <a href={Map_link} className="absolute w-1/4 h-full right-0 max-[950px]:hidden"></a>
                <div className="p-10 z-10 max-[950px]:w-full">
                    <p className="text-5xl font-semibold max-[950px]:text-center">GET YOUR TICKET</p>
                    <div className="flex flex-col items-start justify-start h-full max-[950px]:h-fit max-[950px]:py-10 max-[950px]:justify-center">
                        <p className="py-5">Be part of the tech revolution at Emergence 3.0 - reserve your tickets today for a glimpse into tomorrow's world</p>
                        <a href={"http://www.yepdesk.com/emergence-3"} className="bg-[#EC431B] h-12 w-[30vh] flex mt-10 justify-center items-center max-[950px]:w-full max-[950px]:mt-2 border-black hover:bg-black hover:border hover:border-[#EC431B] hover:text-[#EC431B] delay-75 transition-all ease-in-out">Get your Ticket now</a>

                    </div>
                    <div className="min-[950px]:hidden relative">
                        {/* <div className="bg-gradient-to-b from-black to-transparent absolute bottom-0 w-full"></div> */}
                        {/* eslint-disable-next-line*/}
                        <a href={Map_link} className="w-full h-full block absolute z-10"></a>
                        <img src="./Group 5.png" alt="" className=" w-full z-0"/>
                    </div>
                </div>
            </div>
            <div className="  h-fit flex font-montserrat max-[950px]:flex-col-reverse">
                <div className="basis-1/3 justify-center items-center flex flex-col mx-2">
                    <div className="w-fit h-fit ">
                        <img src="./black_logo.png" alt="" className="h-[13vh] min-[1570px]:h-[8vh] max-[630px]:h-[6vh]"/>
                        <p className="self-start py-3 font-medium max-[950px]:text-[10px]">All Rights Reserved.</p>
                        <div className="flex gap-10 my-4 max-[950px]:flex-col " >
                            <img src="./ieee.png" alt="" className="h-[5vh] max-[950px]:scale-75"/>
                            <img src="./ieee sb cec.png" alt="" className="h-[5vh] max-[950px]:scale-75"/>
                        </div>
                    </div>
                </div>

                <div className="flex grow justify-center items-center max-[950px]:hidden">
                    <img src="./Group.png" alt="" className="h-[23vh] max-[1570px]:h-[18vh]"/>
                </div>

                <div className="basis-1/3 items-end flex flex-col p-8 mr-5 gap-4 max-[950px]:items-center max-[950px]:pb-12">
                    <p className="font-extrabold text-4xl py-2">CONTACT US</p>
                    <p>Swathy: 7510669792</p>
                    <p className="pb-6">Akash: 7994831729</p>
                    <p className="font-bold text-2xl py-2">EMAIL</p>
                    <p>iasemergence3.0@gmail.com</p>
                    <div className="flex w-full justify-end gap-4 max-[950px]:justify-center">
                        <a href={instagram_link} className="flex items-center"><BsInstagram/></a>
                        <a href={linkedin_link} className="flex items-center"><BsLinkedin/></a>
                        <a href={ias_website_link} className="flex items-center"><BsGlobe/></a>
                        <a href={facebook_link} className="flex items-center"><BsFacebook/></a>
                        <a href={sb_website_link} className="border-l-2 pl-3 border-black">@ieeesbcec</a>
                        
                    </div>
                </div>
            </div>
        </>
    );
    return jsxelement;
}

export default Footer;