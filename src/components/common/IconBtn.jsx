import React from "react";

const IconBtn = ({ childern, title,outline }) => {
  return (
    <>
      {childern ? (
        <>
          <button className="px-6 py-3 bg-[#ffc600] hover:outline hover:outline-[#ffc600] hover:bg-darkblue-700 hover:text-richblack-5 w-fit rounded-md font-bold text-richblack-900">
            {childern}
          </button>
        </>
      ) : (
        <>
          <button
            className={`px-6 py-3 bg-[#ffc600] ${
              outline && "hover:outline hover:outline-[#ffc600]"
            } hover:bg-darkblue-700 hover:text-richblack-5 w-fit rounded-md font-bold text-richblack-900`}
          >
            {title}
          </button>
        </>
      )}
    </>
  );
};

export default IconBtn;
