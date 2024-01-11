import React from "react";
import "../../style/homeStyle.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { testimonials } from "../../Data/data";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const Testimonials = () => {
  return (
    <div>
      <div className="w-full h-[80vh]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((testiomnial, index) => (
            <SwiperSlide>
              <div className="py-5 inline-block">
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="outline"
                  bg="rgba(7, 41, 77, 0.1)"
                  border={"#07294d"}
                  textColor={"#fff"}
                  className="flex justify-center items-center bg-transparent py-3 "
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100px", sm: "150px" }}
                    //   width={{ base: "100px%", sm: "100px" }}
                    src={testiomnial.image}
                    alt="Caffe Latte"
                  />

                  <Stack>
                    <CardBody>
                      <Text py="2">{testiomnial.comment}</Text>
                    </CardBody>

                    <CardFooter className="flex justify-center">
                      <Heading textAlign={"center"} size="md">
                        ~{testiomnial.name}
                      </Heading>
                    </CardFooter>
                  </Stack>
                </Card>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
