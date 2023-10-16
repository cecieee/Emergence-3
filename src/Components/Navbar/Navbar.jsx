"use client";

import { Navbar } from "flowbite-react";
import Logo from "../../assets/Logo.png";
import Button from "../Button/Button";
export default function NavbarWithCTAButton() {
  return (
    <Navbar fluid rounded className="bg-[#000300]">
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span> */}
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button children="Register"></Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active className="text-semibold">
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Events</Navbar.Link>
        <Navbar.Link href="#">Tracks</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
