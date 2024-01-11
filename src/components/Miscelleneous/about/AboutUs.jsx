import React from "react";
import Banner from "../../common/Banner";
import { Text } from "@chakra-ui/react";
import Core1 from "../../../assets/about/core_value_1.png";
import Core2 from "../../../assets/about/core_value_2.png";
import Core3 from "../../../assets/about/core_value_3.png";
import Core4 from "../../../assets/about/core_value_4.png";
import Core5 from "../../../assets/about/core_value_5.png";
import Our_Building from "../../../assets/about/our_building.png";
import Footer from "../../common/Footer";

const AboutUs = () => {
  return (
    <div className="w-full">
      <Banner bgImage={"aboutUs_banner"} path={"About Us"} />
      {/* Our Mission */}
      <section className="w-11/12 max-w-[80%] mx-auto text-center py-16 px-4">
        <h1 className="text-[35px] font-montserrat font-bold">Our Mission</h1>
        <p className="text-lg mt-5">
          The Mission of The Bronx Charter School for Children is to empower our
          children to achieve their greatest potential both as students and as
          members of their communities.
        </p>
      </section>
      {/* Core Values */}
      <section className="bg-[#ebebeb]">
        <div className="  max-w-[80%] mx-auto py-16">
          <h1 className="text-[35px] font-montserrat font-bold text-center">
            Core Values
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ">
            {/* core-1 */}
            <div className="flex flex-col md:flex-row  lg:pr-10 ">
              <div className="flex flex-col lg:flex-row justify-center">
                <div className=" w-full lg:w-[40%] flex justify-center lg:items-start  ">
                  <img src={Core1} alt="" />
                </div>
                <div className=" w-full  mt-5 lg:mt-0 flex flex-col items-center lg:items-start gap-y-4">
                  <Text
                    textAlign={{ base: "center", lg: "left" }}
                    className="text-xl font-bold font-montserrat"
                  >
                    Fostering Academic Excellence
                  </Text>
                  <Text
                    textAlign={{ base: "center", lg: "left" }}
                    className=" text-richblack-500  "
                  >
                    By supporting skilled and dedicated teachers who maintain
                    high academic standards, motivate our students and
                    collaborate with our families
                  </Text>
                </div>
              </div>
            </div>
            {/* core-2 */}
            <div className="flex flex-col md:flex-row  lg:pr-10 mt-10 md:mt-0 ">
              <div className="flex flex-col lg:flex-row justify-center">
                <div className=" w-full lg:w-[40%] flex justify-center lg:items-start  ">
                  <img src={Core4} alt="" />
                </div>
                <div className=" w-full  mt-5 lg:mt-0 flex flex-col items-center lg:items-start gap-y-4">
                  <Text
                    textAlign={{ base: "center", lg: "left" }}
                    className="text-xl font-bold font-montserrat"
                  >
                    Developing Critical Thinkers
                  </Text>
                  <Text
                    textAlign={{ base: "center", lg: "left" }}
                    className=" text-richblack-500  "
                  >
                    By encouraging intellectual curiosity and rewarding
                    independent and creative problem solvers.
                  </Text>
                </div>
              </div>
            </div>
            {/* core-3 */}
            <div className="flex flex-col md:flex-row  lg:pr-10 mt-10 ">
              <div className="flex flex-col lg:flex-row justify-center">
                <div className=" w-full lg:w-[40%] flex justify-center lg:items-start  ">
                  <img src={Core2} alt="" />
                </div>
                <div className=" w-full  mt-5 lg:mt-0 flex flex-col items-center lg:items-start gap-y-4">
                  <Text
                    textAlign={{ base: "center", lg: "left" }}
                    className="text-xl font-bold font-montserrat"
                  >
                    Nurturing the Whole Child
                  </Text>
                  <Text
                    textAlign={{ base: "center", lg: "left" }}
                    className=" text-richblack-500  "
                  >
                    By creating engaged learners, encouraging honesty and
                    guiding social and emotional development
                  </Text>
                </div>
              </div>
            </div>
            {/* core-5 */}
            <div className="flex flex-col md:flex-row  lg:pr-10 mt-10 ">
              <div className="flex flex-col lg:flex-row justify-center">
                <div className=" w-full lg:w-[40%] flex justify-center lg:items-start  ">
                  <img src={Core5} alt="" />
                </div>
                <div className=" w-full  mt-5 lg:mt-0 flex flex-col items-center lg:items-start gap-y-4">
                  <Text
                    textAlign={{ base: "center", lg: "left" }}
                    className="text-xl font-bold font-montserrat"
                  >
                    Building Partnership
                  </Text>
                  <Text
                    textAlign={{ base: "center", lg: "left" }}
                    className=" text-richblack-500  "
                  >
                    By welcoming our families, staff and members of the wider
                    community to participate in and celebrate the successes of
                    our students
                  </Text>
                </div>
              </div>
            </div>
            {/* core-5 */}
            <div className="flex flex-col md:flex-row  lg:pr-10 mt-10 ">
              <div className="flex flex-col lg:flex-row justify-center">
                <div className=" w-full lg:w-[40%] flex justify-center lg:items-start  ">
                  <img src={Core3} alt="" />
                </div>
                <div className=" w-full  mt-5 lg:mt-0 flex flex-col items-center lg:items-start gap-y-4">
                  <Text
                    textAlign={{ base: "center", lg: "left" }}
                    className="text-xl font-bold font-montserrat"
                  >
                    Ensuring a Safe Environment
                  </Text>
                  <Text
                    textAlign={{ base: "center", lg: "left" }}
                    className=" text-richblack-500  "
                  >
                    By promoting mutual respect in our diverse community of
                    students, teachers and families
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Building */}
      <section className=" pt-20">
        <Text
          textAlign={"center"}
          className="heading text-[35px] font-montserrat font-bold"
        >
          Our Building
        </Text>
        <div className="w-11/12 max-w-[80%] mx-auto  py-16 px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            <img src={Our_Building} alt="" />
            <Text className=" text-justify flex-1">
              In 2004, TBCSC opened in an 18,000 square foot building at 388
              Willis Avenue in the Mott Haven community of the South Bronx. Over
              the 2007-08 school year, the existing facility more than doubled
              in size. As a result of an addition of two floors and the
              renovation and expansion of two existing floors, TBCSC now
              includes a total of nearly 40,000 square feet, in four floors with
              a finished basement. Our elementary school building currently
              offers 18 classrooms, all at least 800 square feet in size and
              filled with natural light and color, as well as an expanded
              cafeteria and several new spaces designed for small group learning
              and administrative offices. We have a gymnasium, a music room and
              an art studio in our school building and we have recently added a
              technology lab.
            </Text>
          </div>
        </div>
      </section>

      {/* Our Facility */}
      <section className=" pt-20 bg-[#ebebeb]">
        <Text
          textAlign={"center"}
          className="heading text-[35px] font-montserrat font-bold"
        >
          Our Facility
        </Text>

        <div className="w-11/12 max-w-[80%] mx-auto  py-16 px-4">
          <div className="pb-10">
            <Text>
              Our beautiful campus has state of the art outdoor and indoor play
              spaces designed to provide the students with the best learning
              experience. The campus is fully enclosed and secure. It's an
              ideal, warm environment for early learning and growth.
            </Text>
            <Text className="mt-2 line-clamp-6">
              The classrooms are well lighted and provide ample space for
              exploration and learning. The classrooms are all for whole group
              circle time, cooperative games, role play, individual table
              activities, teacher-directed small group sessions, skill-based
              learning centers, and project areas.
            </Text>
          </div>
          <div className="flex flex-col lg:flex-row-reverse gap-10">
            <img src={Our_Building} alt="" />
            <Text className=" text-justify flex-1">
              » Art room,
              <br /> » Exploration patio,
              <br /> » Large ventilated classrooms,
              <br /> » Music and movement room,
              <br /> » Resource rooms,
              <br /> » Reading area;
              <br /> » Play area, playground,
              <br /> » Water play area,
              <br /> » Smart boards,
              <br /> » Kitchen, <br />» Healthroom
            </Text>
          </div>
        </div>
      </section>
      <div className="h-[100px]"></div>
      <Footer />
    </div>
  );
};

export default AboutUs;
