import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

export const socialLinks = [
  {
    icon: <FaFacebookF className=" hover:text-richblack-900" />,
    link: "#",
  },
  {
    icon: <FaTwitter className="hover:text-richblack-900" />,
    link: "#",
  },
  {
    icon: <FaInstagram className="hover:text-richblack-900" />,
    link: "#",
  },
  {
    icon: <FaYoutube className="hover:text-richblack-900" />,
    link: "#",
  },
];

export const support = [
  {
    title: "teacher login ",
    link: "teacher-login",
  },
  {
    title: "student login ",
    link: "student-login",
  },
  {
    title: "Alumini Registration ",
    link: "alumini-registration",
  },
];
export const quickLinks = [
  {
    title: "Home ",
    link: "/",
  },
  {
    title: "About us ",
    link: "about-us",
  },
  {
    title: " Privacy Policy ",
    link: "privacy-policy",
  },
  {
    title: "  Copyright Policy ",
    link: "copyright-policy",
  },
];

export const contactUs = [
  {
    title: "D-218 Old Minal, J.K. Road Bhopal Madhya Pradesh, INDIA. ",
    icon: <IoHome className="text-yellow-50 mb-6 -mt-5" />,
  },
  {
    title: "91-9893070156 ",
    icon: <BsFillTelephoneFill className="text-yellow-50" />,
  },
  {
    title: "admin@schoolerpindia.co.in",
    icon: <IoMdMail className="text-yellow-50" />,
  },
];
export const contact_Us = [
  {
    title: "D-218 Old Minal, J.K. Road Bhopal Madhya Pradesh, INDIA. ",
    icon: <IoHome className="text-darkblue-700 group-hover:text-white text-2xl" />,
  },
  {
    title: "91-9893070156 ",
    icon: (
      <BsFillTelephoneFill className="text-darkblue-700 group-hover:text-white" />
    ),
  },
  {
    title: "admin@schoolerpindia.co.in",
    icon: <IoMdMail className="text-darkblue-700 group-hover:text-white" />,
  },
];