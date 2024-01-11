import React from "react";
import HomeSlide from "../components/Miscelleneous/home/HomeSlide";
import HomeAboutUs from "../components/Miscelleneous/home/HomeAboutUs";
import Testimonials from "../components/common/Testimonials";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <>
      <HomeSlide />
      <HomeAboutUs />

      {/* Testimonials */}
      <div className="testimonials-bg w-full relative">
        <div className="h-[100px] md:hidden"></div>
        <div className="bg-darkblue-700 opacity-75 py-10 w-full absolute top-0 bottom-0 left-0 right-0">
          {" "}
        </div>
        <div className="w-11/12 mx-auto ">
          <Testimonials />
        </div>
        <div className="h-[100px]  md:hidden"></div>
      </div>
      <Footer />

      {/* <div className="h-[200px] bg-white"> </div> */}
    </>
  );
};

export default Home;
