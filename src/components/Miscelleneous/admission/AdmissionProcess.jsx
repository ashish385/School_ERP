import React from 'react'
import Banner from '../../common/Banner'
import { Text } from '@chakra-ui/react';
import Footer from '../../common/Footer';

const AdmissionProcess = () => {
  return (
    <div>
      <Banner path={"Admission Process"} />
      <section className=" w-11/12 mx-auto my-10">
        {/* Admission Process 1 */}
        <div className="heading py-3 bg-[#4848b3] text-white pl-5">
          Admission Process 1
        </div>

        <Text className="mt-5 indent-[5%]">
          School ERP INDIA offer a high quality educational experience and
          nurturing environment that fosters sharp learning skills. We are proud
          of the caliber of our staff and the work that they do; we are even
          prouder of the students with whom we work day by day. At School ERP
          INDIA CENTRE we have strived to make our admission process as simple
          as possible to ensure that all prospective parents enjoy a stress free
          application experience.
        </Text>

        {/* Admission Enquiry: */}
        <h1 className="heading mt-5">Admission Enquiry:</h1>
        <Text className="mt-2">
          Submit the Enquiry Form. and visit the school admissions office. Our
          counsellor will get back to you to answer your questions and collect
          the required information.
        </Text>

        {/* Admission Form: */}
        <h1 className="heading mt-5">Admission Form</h1>
        <Text className="mt-2">
          The parents are requested to visit the school Admission Office, fill
          out the registration form and purchase the school prospectus. Kindly
          carry two latest Passport size photo of the child and the parent along
          with self-attested Date of Birth certificate. Transfer certificate of
          the previous school. Photocopy of the mark sheet. Parents
          Photograph(Mother & Father). Adhar card. Voter id& Ration card. and
          SSSM ID Number.
        </Text>

        {/* Admission Registation: */}
        <h1 className="heading mt-5">Admission Registration</h1>
        <Text className="mt-2">
          Parents / Guardians are invited to visit the school campus to
          understand the culture and methos of the Institution. A meeting can be
          scheduled with the Principal, so parents can have an interaction with
          the Head of the school, ask questions and collect any information they
          require. This can be done by fixing a prior appointment with the FOE
          through mail a contactus. telephone . A meeting can also be arranged
          with the Principal or any other faculty member that you may wish to
          see.
        </Text>

        {/* School Admission */}
        <h1 className="heading mt-5">School Admission</h1>
        <Text className='mt-2'>
          The parent needs to fill up the admission form and ensure all
          documents are in order. Kindly intimate the school in case your child
          requires some special assistance due to any health reasons.
        </Text>
          </section>
          
          <Footer />
    </div>
  );
}

export default AdmissionProcess