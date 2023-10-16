import React from "react";
import {BsInstagram,BsLinkedin} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";

function Footer()
{
    const jsxelement=(
        <>
            <div className=" w-screen h-[40vh] flex">
                <div className="basis-1/3 justify-center items-center flex flex-col">
                    <img src="./black_logo.png" alt="" />
                    <p className="self-start">All Rights Reserved.</p>
                </div>
                <div className="basis-1/3 items-end flex flex-col p-5">
                    <p className="font-montserrat">CONTACT US</p>
                    <p>Swathy: 8378928747</p>
                    <p>Akash: 1234567891</p>
                    <p>EMAIL</p>
                    <p>Emergence2023@gmail.com</p>

                </div>
            </div>
        </>
    );
    return jsxelement;
}

export default Footer;