import React from "react";
import Banner from "../components/common/Banner";
import {contact_Us} from '../Data/FooterData'
import Footer from "../components/common/Footer";
import ContactUsForm from "../components/form/ContactUsForm";

const Contact = () => {
  return (
    <div className="w-full bg-[#edf0f2]">
      <Banner path={"Contact"} />
      <div className=" h-[100px] "></div>
      <div className="w-11/12 mx-auto bg-white p-10 flex flex-col justify-center gap-10 rounded-md shadow-lg">
        {contact_Us.map((item, index) => (
          <div key={index} className="flex items-center mt-3 gap-5  ">
            <div className="flex items-center justify-center h-16 w-16 border group hover:bg-darkblue-700 hover:text-white border-darkblue-700 rounded-full">
              {item.icon}
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 w-11/12 mx-auto flex flex-col gap-5 md:flex-row ">
        <div className="w-full md:w-1/2 shadow-lg rounded-md bg-white p-10  ">
          <div className="">
            <h1 className="text-xl font-bold font-montserrat text-darkblue-700">
              Contact Us
            </h1>
            <div className="w-10 rounded-md mt-2 h-[2px] bg-yellow-100"></div>
            <h1 className="text-[48px] mt-2 font-montserrat font-bold text-darkblue-700">
              Keep in touch
            </h1>
          </div>
          <div className="mt-10">
            <ContactUsForm />
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[200px] bg-richblack-600 rounded-md">
          <div className="">
            <iframe
              title="My location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7115.756127417921!2d82.37543814882915!3d26.90736469947857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3990ad927edd60a7%3A0x5ae29c199380bc82!2sST.JOSEPH'S%20SCHOOL!5e0!3m2!1sen!2sin!4v1704117703570!5m2!1sen!2sin"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className=" h-[100px]"></div>
      <Footer />
    </div>
  );
};

export default Contact;
