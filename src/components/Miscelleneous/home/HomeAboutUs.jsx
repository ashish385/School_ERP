import { Box, Text } from "@chakra-ui/react";
import React from "react";
import IconBtn from "../../common/IconBtn";
import '../../../style/homeStyle.css';
import Building from '../../../assets/homeImages/building.png'
import Learning from '../../../assets/homeImages/learning.png'
import Security from '../../../assets/homeImages/security.png'

const HomeAboutUs = () => {
  return (
    <div className="bg-richblack-5 w-full">
      <div className="w-11/12 mx-auto">
        <div className="h-[100px]"></div>
        <Box className="flex flex-col lg:flex-row">
          <Box className=" w-full lg:w-1/2 ">
            <div className="flex flex-col  gap-2">
              <h1 className=" text-darkblue-700 text-[18px] font-montserrat font-bold">
                About us
              </h1>
              <span className=" w-8 h-[2px] bg-yellow-100 rounded-md "></span>
            </div>
            <div className="w-full lg:w-[80%]">
              <h2 className="font-montserrat font-extrabold mt-3 text-[28px] md:text-[48px]">
                Welcome to School ERP INDIA
              </h2>
            </div>
            <Box className="pt-8 flex flex-col gap-y-10">
              <Text className="text-lg font-[400] leading-7 text-[#505050] text-justify  w-full lg:w-[80%]">
                provide best education to the children. The purpose to nurture
                the unique potential of the student entrusted in our care. It
                aims to offer a liberal and enlightened environment in education
                to keep pace with the dynamic trends, which is eco-friendly,
                pollution free, well built and equipped with latest artifacts,
                it lies in the heart of the city.
              </Text>

              <IconBtn title={"Learn More"} />
            </Box>
          </Box>
          <Box className=" w-full lg:w-1/2 p-8">
            <Box className="bg-[#ffffff] h-[200px] rounded-md shadow-md py-5  px-6">
              <h2 className="font-montserrat font-extrabold mt-3 text-[28px] md:text-[40px]">
                Latest News
              </h2>
              <div className="mt-5">News</div>
            </Box>
          </Box>
        </Box>
        <div className="h-[100px]"></div>
        <Box className="flex flex-col lg:flex-row  rounded-md overflow-hidden ">
          <Box className="w-full lg:w-1/2 px-5 py-4 bg-darkblue-700">
            <div className="p-5 text-white flex flex-col gap-y-5">
              <h1 className="heading font-montserrat md:text-[48px]">
                Admission Enquiry
              </h1>
              <Text className="text-justify pr-3">
                Submit the Enquiry Form. and visit the school admissions office.
                Our counsellor will get back to you to answer your questions and
                collect the required information.
              </Text>
              <div className="mt-5">
                <IconBtn title={"Apply Now"} outline={true} />
              </div>
            </div>
          </Box>
          <Box className="w-full lg:w-1/2 px-5 py-4 bg-darkblue-600">
            <div className="p-5 text-white flex flex-col gap-y-5">
              <h1 className="heading font-montserrat md:text-[48px]">
                School Admission
              </h1>
              <Text className="text-justify pr-3">
                The parent needs to fill up the admission form and ensure all
                documents are in order. Kindly intimate the school in case your
                child requires some special assistance due to any health
                reasons.
              </Text>
              <div className="mt-5">
                <IconBtn title={"Apply Now"} outline={true} />
              </div>
            </div>
          </Box>
        </Box>
        <div className="h-[100px]"></div>
      </div>
      <Box className="w-full relative flex pt-[60px] pb-[110px] ">
        <div className="h-[100px] md:h-[50px] relative bg-richblack-400 xl:h-0"></div>
        <div className=" ourFacility h-full   flex justify-center md:justify-end  w-full">
          {/* <div className="w-1/2  ">1</div> */}
          <div className=" w-full lg:w-2/5 px-4 lg:mx-1/6  opacity-70  md:w-1/2 py-6  bg-darkblue-700 ">
            <div className="relative z-10 pt-50">
              <div className="heading">
                <h3 className="text-white">Our Facilities</h3>
              </div>
              <ul>
                <li>
                  <div className="pt-[55px] flex  overflow-hidden">
                    <div className="float-left overflow-hidden inline-block pr-[30px]">
                      <img src={Building} alt="icon" />
                    </div>
                    <div className="w-[78%] float-left overflow-hidden text-white ">
                      <h4 className="text-[24px] pb-4">Building</h4>
                      <p>
                        Architecturally well designed building of School Name
                      </p>
                    </div>
                  </div>
                  {/* single feature */}
                </li>
                <li>
                  <div className="pt-[55px] flex overflow-hidden">
                    <div className="float-left overflow-hidden inline-block pr-[30px]">
                      <img src={Security} alt="icon" />
                    </div>
                    <div className="w-[78%] float-left overflow-hidden text-white">
                      <h4 className="text-[24px] pb-4">Security</h4>
                      <p>
                        We focused student security by CCTV Cemera and guards
                      </p>
                    </div>
                  </div>
                  {/* single feature */}
                </li>
                <li>
                  <div className="pt-[55px] flex overflow-hidden">
                    <div className=" float-left overflow-hidden inline-block pr-[30px]">
                      <img src={Learning} alt="icon" />
                    </div>
                    <div className="w-[78%] float-left  overflow-hidden text-white">
                      <h4 className="text-[24px] pb-4">Learning</h4>
                      <p>We Provide facility of e-Learning With safe zone.</p>
                    </div>
                  </div>
                  {/* single feature */}
                </li>
              </ul>
            </div>
            {/* feature */}
          </div>
        </div>
      </Box>
      {/* <div className="h-[200px]"></div> */}
    </div>
  );
};

export default HomeAboutUs;
