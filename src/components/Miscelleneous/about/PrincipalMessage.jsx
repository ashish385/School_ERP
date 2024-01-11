import React from "react";
import Banner from "../../common/Banner";
import Principal from "../../../assets/principal.jfif";
import { principalMessage } from "../../../Data/data";
import Footer from "../../common/Footer";

const PrincipalMessage = () => {
  return (
    <div>
      <Banner path={"Principal Message"} />
      {/* principal message */}
      <section className="w-11/12 mx-auto py-20">
        <div className="flex flex-col md:flex-row gap-5   ">
          <div className="flex flex-col  p-4 md:p-0 w-full lg:w-1/3">
            <img src={Principal} alt="" />
            <div className=" bg-darkblue-700 text-center text-white rounded-md py-2 font-semibold font-montserrat">
              S K Dubey
            </div>
          </div>
          <ul className="px-6 w-full list-disc py-2 flex flex-col gap-5">
            {principalMessage.map((item, index) => (
              <li className={`${item.message ? "" : "hidden"} `} key={index}>
                {item.message}
              </li>
            ))}
          </ul>
        </div>
        {/* quote */}
        <h1 className="mt-4 w-[80%] bg-darkblue-600 text-center mx-auto rounded-lg py-5 px-4 text-white font-bold font-montserrat leading-loose">
          {principalMessage[principalMessage.length - 1].quote}
        </h1>
      </section>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default PrincipalMessage;
