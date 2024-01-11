import React from 'react';
import { Box, Text } from '@chakra-ui/react'



const Banner = ({ bgImage,path }) => {
  return (
    <div
      className={` ${
        bgImage ? "aboutUs_banner" : "banner"
      } flex items-center w-full h-[70vh] bg-style relative`}
    >
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-darkblue-700 opacity-80">
        <Box className="text-white w-11/12 mx-auto h-full flex flex-col justify-center gap-18">
          <h1 className=" capitalize text-[52px] font-bold font-montserrat">
            {path}
          </h1>
          <Text className=" font-bold capitalize text-lg">
            Home / <span className=" text-yellow-50">{path}</span>
          </Text>
        </Box>
      </div>
    </div>
  );
};

export default Banner