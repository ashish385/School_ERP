import React, { useState } from "react";
import Banner from "../../common/Banner";
import Footer from "../../common/Footer";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import startOfWeek from "date-fns/startOfWeek";
import parse from "date-fns/parse";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import DatePicker from "react-datepicker";
import { FaRegTrashAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableCaption,
  TableContainer,
  Tabs,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import CalenderModal from "../../common/CalenderModal";

const locales = {
  "'en-GB'": require("date-fns/locale/en-GB"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export const EventsTabel = () => {
  let user = false;
  const events = [
    {
      title: "Big Meeting",
      allDay: true,
      start: new Date(2024, 0, 11),
      end: new Date(2024, 0, 12),
    },
    {
      title: "Vacation",
      start: new Date(2024, 1, 15),
      // end: new Date(2024, 1, 18),
    },
    {
      title: "Conference",
      start: new Date(2024, 1, 20),
      end: new Date(2024, 1, 23),
    },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deleteEvent, setDeleteEvent] = useState('');
  return (
    <>
      {events.length ? (
        <>
          <TableContainer>
            <Table variant="striped">
              <TableCaption>Events </TableCaption>
              <Thead color={"white"}  className=" bg-darkblue-700">
                <Tr>
                  <Th>Start Date</Th>
                  <Th>End Date</Th>
                  <Th>Events</Th>
                  {user && <Th>Operation</Th>}
                </Tr>
              </Thead>
              <Tbody>
                {events.map((item, index) => (
                  <Tr key={index}>
                    <Td>{item.start.toLocaleDateString("en-GB")}</Td>
                    <Td>
                      {item.end ? item.end.toLocaleDateString("en-GB") : ""}
                    </Td>
                    <Td>{item.title}</Td>
                    {user && (
                      <Td className="flex gap-1 justify-between">
                        <span
                          onClick={(e) => {
                            setDeleteEvent({ title: item.title });
                            onOpen();
                          }}
                          className="flex items-center gap-1 text-pink-500 cursor-pointer"
                        >
                          <FaRegTrashAlt />
                          <span>Delete</span>
                        </span>
                      </Td>
                    )}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <></>
      )}
      {/* Edit Calendar Modal */}
      <CalenderModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        deleteEvent={deleteEvent}
      />
    </>
  );
};

const AcadmicCalendar = () => {
  const events = [
    {
      title: "Big Meeting",
      allDay: true,
      start: new Date(2024, 0, 11),
      end: new Date(2024, 0, 12),
    },
    {
      title: "Vacation",
      start: new Date(2024, 1, 15),
      end: new Date(2024, 1, 18),
    },
    {
      title: "Conference",
      start: new Date(2024, 1, 20),
      end: new Date(2024, 1, 23),
    },
  ];

  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  let user = true;

  function handleAddEvent() {
    for (let i = 0; i < allEvents.length; i++) {
      const d1 = new Date(allEvents[i].start);
      const d2 = new Date(newEvent.start);
      const d3 = new Date(allEvents[i].end);
      const d4 = new Date(newEvent.end);
      // /*
      console.log(d1 <= d2);
      console.log(d2 <= d3);
      console.log(d1 <= d4);
      console.log(d4 <= d3);
      // */

      if ((d1 <= d2 && d2 <= d3) || (d1 <= d4 && d4 <= d3)) {
        alert("CLASH");
        break;
      }
    }

    setAllEvents([...allEvents, newEvent]);
    console.log("all", allEvents);
  }
  return (
    <div>
      <Banner path={"Academic Calendar Year"} />

      {/* Admin */}
      <section id="calender">

          <>
            <div className=" w-11/12 mx-auto my-10">
              <Tabs isFitted variant="enclosed">
                <TabList mb="1em">
                  <Tab
                    _selected={{ color: "white", bg: "blue.700" }}
                    className=" font-semibold text-xl"
                  >
                    Calendar
                  </Tab>
                  <Tab
                    _selected={{ color: "white", bg: "blue.700" }}
                    className=" font-semibold text-xl"
                  >
                    Events
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <div className="">
                      <Calendar
                        localizer={localizer}
                        events={allEvents}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 500 }}
                      />
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className=" w-11/12 mx-auto my-10">
                      <EventsTabel />
                    </div>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </>

        {!user && (
          <>
            <div className=" bg-richblack-100 py-10 px-5 md:px-10">
              {/* <h1 className="text-center my-10 heading">Calendar</h1> */}
              <h2 className="text-center my-10 heading">Add New Event</h2>
              <div className="  w-full md:w-[70%] lg:w-[60%] mx-auto flex flex-col   gap-3">
                <input
                  type="text"
                  className="input w-full "
                  placeholder="Add Title"
                  value={newEvent.title}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, title: e.target.value })
                  }
                />
                <div className="w-full flex flex-col md:flex-row gap-5 ">
                  <DatePicker
                    placeholderText="Start Date"
                    selected={newEvent.start}
                    onChange={(start) => setNewEvent({ ...newEvent, start })}
                    className="input w-full "
                  />
                  <DatePicker
                    placeholderText="End Date"
                    selected={newEvent.end}
                    onChange={(end) => setNewEvent({ ...newEvent, end })}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <Button
                  className=" mt-5 bg-darkblue-700 text-white"
                  onClick={handleAddEvent}
                >
                  Add Event
                </Button>
              </div>
            </div>
          </>
        )}
      </section>
    
      <Footer />
    </div>
  );
};

export default AcadmicCalendar;
