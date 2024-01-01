import { Box, Link, Text } from "@chakra-ui/react";
import React from "react";
import { IoMail } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

const Topbar = () => {

    const socialLinks = [
      {
        icon: <FaFacebookF />,
        link: "#",
      },
      {
        icon: <FaTwitter />,
        link: "#",
      },
      {
        icon: <FaInstagram />,
        link: "#",
      },
      {
        icon: <FaYoutube />,
        link: "#",
      },
      {
        icon: "Teacher Login",
        link: "#",
      },
      {
        icon: "Student Login",
        link: "#",
      },
    ];
  return (
    <>
      <Box className="hidden lg:flex justify-between items-center text-white  bg-darkblue-700 py-3 px-10">
        <div className=" flex gap-2 text-[13px] font-semibold items-center">
          <div className="flex gap-2">
            <IoMail className="text-lg" />
            <Text>admin@schoolerpindia.co.in</Text>
          </div>
          <div className="flex gap-2">
            <IoMail className="text-lg" />
            <Text>admin@schoolerpindia.co.in</Text>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 ">
          {socialLinks.map((item, index) => (
            <Link key={index} className="" style={{textDecoration:"none"}}>
              {item.icon}
            </Link>
          ))}
        </div>
      </Box>
    </>
  );
};

export default Topbar;
