import React, { useEffect, useState } from 'react'
import Topbar from "../common/Header/Topbar";
import Navbar from "../common/Header/Navbar";
// import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

const Header = () => {
   const [bg, setBg] = useState(false);

   useEffect(() => {
     window.addEventListener("scroll", () => {
       return window.scrollY > 60 ? setBg(true) : setBg(false);
     });
   });
  return (
    <div className="w-full bg-white shadow-xl border-b sticky top-0 z-50  border-darkblue-700">
      <div className={` ${bg ? " appearance-none absolute -top-16" : "block"} transition-all duration-500 ease-linear`}>
        <Topbar />
      </div>
      <Navbar />
    </div>
  );
}

export default Header