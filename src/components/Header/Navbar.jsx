import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { NavLinks, LoginNavLink } from "../../Data/HeaderData";
import { Link } from "react-router-dom";
import { RiAlignRight } from "react-icons/ri";
import { BsChevronDown } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";

const Logo =
  "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=626&ext=jpg&ga=GA1.1.638092357.1637509177&semt=ais";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box className="bg-white   mx-auto w-11/12  flex justify-between items-center  ">
        <Box className="flex gap-1 items-center">
          <img src={Logo} alt="" className="w-[70px] h-[70px] rounded-xl " />
          <Text className="text-lg font-semibold text-darkblue-700 font-montserrat ">
            School Name
          </Text>
        </Box>
        <Box className=" items-center gap-3 text-sm md:text-base text-darkblue-700 font-inter hidden md:flex">
          {NavLinks.map((navitem, index) => (
            <div>
              {!navitem.child ? (
                <div>
                  <Link
                    key={index}
                    path={navitem.path}
                    className="hover:text-pink-500 "
                  >
                    {navitem.title}
                  </Link>
                </div>
              ) : (
                <div className="group relative flex cursor-pointer items-center gap-1">
                  <div className=" cursor-pointer flex items-center gap-1">
                    {navitem.title}
                  </div>
                  <div className="invisible absolute left-[50%] top-[50%] z-[1000] w-[200px] flex  translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-darkblue-700 p-2 gap-y-1 text-richblack-900 opacity-0 transition-all duration-700 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                    <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[20%]  translate-y-[-40%] rotate-45 select-none rounded bg-darkblue-700"></div>
                    {navitem.subNav.map((item, index) => (
                      <div key={index}>
                        <div className="text-white capitalize rounded-md hover:bg-darkblue-500 hover:scale-105 transition-all duration-300 ease-out px-3 py-1 border-b">
                          <Link to={item.path}>{item.subtitle}</Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Box>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<BsChevronDown />}
                className="px-4 py-2 rounded-md border-2 focus:outline transition-all duration-200 flex "
              >
                <span>Login </span>
              </MenuButton>
              <MenuList bg={"#053B48"} className="px-3">
                {LoginNavLink.subNav.map((item, index) => (
                  <MenuItem
                    key={index}
                    bg={"#053B48"}
                    color={"#fff"}
                    className="hover:bg-darkblue-500 bg-darkblue-700 rounded-md  w-[90%] border-b"
                  >
                    <Link to={item.path} className=" capitalize w-full ">
                      {item.subtitle}
                    </Link>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </Box>
        {/* Mobile view */}
        <Box className="flex md:hidden">
          <Button onClick={onOpen}>
            <RiAlignRight />
          </Button>
          <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent
              bg={"#053B48"}
              color={"whitesmoke"}
              className="bg-darkblue-700"
            >
              <DrawerHeader
                borderBottomWidth="1px"
                className="flex justify-between"
              >
                <Text>Ashish Soni</Text>
                <div style={{ backgroundColor: "#053B48" }} onClick={onClose}>
                  <IoCloseSharp />
                </div>
              </DrawerHeader>
              <DrawerBody>
                <div className="flex flex-col ">
                  {NavLinks.map((navitem, index) => (
                    <div key={index} className=" ">
                      {!navitem.child ? (
                        <Link to={navitem.path}>
                          <div className="pl-4 py-2 hover:bg-darkblue-400 rounded-md border-b">
                            {navitem.title}
                            {/* <Divider className="mt-2 h-[3px]" /> */}
                          </div>
                        </Link>
                      ) : (
                        <Accordion>
                          <AccordionItem>
                            <h2>
                              <AccordionButton className=" hover:text-richblack-300 transition-all duration-300   rounded-md ">
                                <Box as="span" flex={1} textAlign={"left"}>
                                  {navitem.title}
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel
                              bg={"#074B5D"}
                              className="flex flex-col"
                            >
                              {navitem.subNav.map((subitem, subindex) => (
                                <Link
                                  key={subindex}
                                  to={subitem.path}
                                  className="hover:bg-darkblue-400 rounded-md pl-2 py-1 capitalize hover:border-b"
                                >
                                  {subitem.subtitle}
                                </Link>
                              ))}
                            </AccordionPanel>
                          </AccordionItem>
                        </Accordion>
                      )}
                    </div>
                  ))}
                </div>

                <Divider />
                <div className="px-3 py-3 flex flex-col gap-3">
                  {LoginNavLink.subNav.map((item, index) => (
                    <Link
                      to={item.path}
                      key={index}
                      className=" flex flex-col gap-2 hover:bg-darkblue-400 rounded-md px-1 py-2 border-b"
                    >
                      <div className="capitalize">{item.subtitle}</div>
                      {/* <Divider /> */}
                    </Link>
                  ))}
                </div>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
