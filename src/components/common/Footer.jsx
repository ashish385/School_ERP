import { Box, List, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import {socialLinks,support, quickLinks, contactUs} from '../../Data/FooterData'
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-darkblue-700">
      <Box className="w-11/12 mx-auto text-white">
        <div className="h-[100px]"></div>
        <div class="flex flex-wrap  container mx-auto sm:px-4">
          <div class="lg:w-1/4  md:w-1/2 pr-4 pl-4 w-full mt-4">
            <Box className="flex flex-col gap-y-2">
              <p className="text-[18px] font-[400] leading-7">
                We at&nbsp; School ERP INDIA are committed towards meeting the
                challenges of the modern era.. dovetailing much of the ethos of
                the new post-independence India into its educational program and
                philosophy.
              </p>
              <List spacing={3}>
                <ListItem className="flex gap-5 p-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="flex items-center  hover:bg-yellow-300 hover:text-richblue-900 hover:scale-150 rounded-full px-2 py-2 transition-all duration-200 ease-linear"
                    >
                      <span className="flex items-center ">{item.icon}</span>
                    </Link>
                  ))}
                </ListItem>
              </List>
            </Box>
          </div>
          <div class="lg:w-1/4 pr-4 pl-4 md:w-1/2  sm:w-1/2 w-full mt-5 md:mt-0 ">
            <h2 className="mb-2 text-xl font-bold">Support</h2>
            <Box>
              <List className="flex flex-col gap-y-3">
                {support.map((item, i) => (
                  <ListItem key={i}>
                    <div className="flex items-center gap-1 group">
                      <FaChevronRight className=" font-semibold mt-1 text-yellow-300" />
                      <Text className="capitalize  font-semibold group-hover:text-yellow-100 group-hover:ml-1 transition-all duration-300 ease-linear">
                        <Link to={item.link}> {item.title}</Link>
                      </Text>
                    </div>
                  </ListItem>
                ))}
              </List>
            </Box>
          </div>
          <div class="lg:w-1/4 pr-4 pl-4 md:w-1/2  sm:w-1/2 w-full mt-5 md:mt-0">
            <h2 className="mb-2 text-xl font-bold">Quick Links</h2>
            <Box>
              <List className="flex flex-col gap-y-3">
                {quickLinks.map((item, i) => (
                  <ListItem key={i}>
                    <div className="flex items-center gap-1 group">
                      <FaChevronRight className=" font-semibold mt-1 text-yellow-300" />
                      <Text className="capitalize  font-semibold group-hover:text-yellow-100 group-hover:ml-1 transition-all duration-300 ease-linear">
                        <Link to={item.link}> {item.title}</Link>
                      </Text>
                    </div>
                  </ListItem>
                ))}
              </List>
            </Box>
          </div>
          <div class="lg:w-1/4 pr-4 pl-4 md:w-1/2 w-full mt-5 md:mt-0 ">
            <h2 className="mb-2 text-xl font-bold">Contact Us</h2>
            <Box className="mt-8 flex flex-col gap-3">
              {contactUs.map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-semibold">
                  <div>{item.icon}</div>
                  <Text>{item.title}</Text>
                </div>
              ))}
            </Box>
          </div>
        </div>
      </Box>
      <Box className="b bg-darkblue-400 text-white">
        <Text className='w-11/12 mx-auto pl-5 py-5'>Copyright © 2023 School ERP INDIA | Developed by SCHOOL ERP</Text>
      </Box>
    </div>
  );
}

export default Footer