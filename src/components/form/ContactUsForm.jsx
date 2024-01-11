import {  FormControl, Input, Textarea, VStack } from '@chakra-ui/react'
import React from 'react';

const ContactUsForm = () => {
  return (
    <div>
      <VStack spacing={"5px"} color={"black"}>
        <FormControl>
          <Input type="string" placeholder=" Your Name" size={"lg"} />
        </FormControl>
        <div className="flex flex-col md:flex-row w-full mt-5 gap-10 justify-between">
          <Input type="string" placeholder=" Email" size={"lg"} />
          <Input type="string" placeholder="Phone" size={"lg"} />
        </div>
        <FormControl>
          <Textarea placeholder="Enter your message.." size={"lg"} mt={5} />
        </FormControl>
        <div className="button-bg w-full text-center mt-5 rounded-md py-3 text-lg font-semibold">Send</div>
      </VStack>
    </div>
  );
}

export default ContactUsForm