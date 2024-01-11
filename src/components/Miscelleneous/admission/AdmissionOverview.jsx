import React from "react";
import Banner from "../../common/Banner";
import Footer from "../../common/Footer";
import {
  ListItem,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
} from "@chakra-ui/react";

const AdmissionOverview = () => {
  return (
    <div>
      <Banner path={"Admission Overview"} />
      <section className="w-11/12 mx-auto my-10">
        <h1 className=" lg:text-[40px] font-montserrat font-bold ">
          Admission Open (Playgroup to Class-XI)
        </h1>
        {/* Admission Open */}
        <section>
          <div className="heading py-3 bg-[#4848b3] text-white pl-5">
            Admission Open 2024-2025
          </div>
          <div className=" my-10">
            <Text className=" indent-[5%] leading-7 text-[#505050] ">
              <strong>Admission Open Playgroup to Class-XI </strong>
              Any Student who wants to take{" "}
              <strong>admission 2024-2025 .</strong> And Students who have
              passed the examination of a class form an English Medium School
              shall be eligible for admission to the next higher class. Students
              should have attained the age as under for the class to which
              admission is sought as on 1st Apr.so{" "}
              <strong>Admission Open 2024-2025</strong> For those Student.
            </Text>
            <TableContainer>
              <Table variant="simple" size={"lg"}>
                <Thead>
                  <Tr className=" font-montserrat">
                    <Th>Class</Th>
                    <Th>Age Eligibility</Th>
                    {/* <Th isNumeric>multiply by</Th> */}
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Play Group</Td>
                    <Td> 3.5 yrs</Td>
                  </Tr>
                  <Tr>
                    <Td>Nursary</Td>
                    <Td> 4.5 yrs</Td>
                  </Tr>
                  <Tr>
                    <Td>1st</Td>
                    <Td> 5.5+ yrs</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </div>
        </section>

        {/* School Admission Procedure */}
        <section>
          <div className="heading py-3 bg-[#4848b3] text-white pl-5">
            School Admission Procedure
          </div>
          <h1 className="heading">
            Admission Procedure for Classes: Playgroup to IX
          </h1>
          <div className="mt-5">
            <strong className="text-sm">
              A Parent or a guardian of a new student seeking admission for
              classes P.G. to IX must note that the following attachments are
              necessary at the time of registration.
            </strong>
            <UnorderedList className="flex flex-col gap-2">
              <ListItem>
                Evidence of passing the last class or promotion to the present
                class.
              </ListItem>
              <ListItem>
                Original Transfer Certificate from the previous school, which
                should be a recognized school, affiliated to the All India Board
                or State Board of Education. Transfer Certificates have to be
                signed by DEO is the child is transferred from other states.
              </ListItem>
              <ListItem>
                A medical certificate from a qualified registered doctor showing
                the record of vaccination/immunization etc. as well as mention
                of any particular ailment or health condition about which the
                school ought to know.
              </ListItem>
              <ListItem>4 passport size photographs.</ListItem>
              <ListItem>
                Proof of residence of the child (Copy of Ration Card / Voter's
                ID / Passport).
              </ListItem>
              <ListItem>
                In case the child is adopted, parents will have to produce
                attested copy of the adoption certificate issued by the
                competent authority.
              </ListItem>
              <ListItem>
                In case of divorce/separation, the parent who is admitting the
                child will have to produce a copy of custody of child
                certificate issued by the competent law officer.
              </ListItem>
            </UnorderedList>
          </div>
        </section>

        {/* Admission Procedure for Class-XI         */}
        <section>
          <div className="heading">Admission Procedure for Class-XI</div>
          <UnorderedList className="flex flex-col gap-2">
            <ListItem>
              The Registration Form (available in the School Office) needs to be
              duly filled and returned to the Admission Department on or before
              the due date along with the attested photocopy of Class-IX &
              Class-X mark sheet of the Board Examination.
            </ListItem>
            <ListItem>
              In case a candidate does not receive his Class-X Mark Sheet from
              the Board due to any reason, he/she may submit a provisional Mark
              Sheet obtained from his/her school along with the registration
              form. Those who will fail to submit the completed registration
              form along with the Board Mark Sheet by the due date will not be
              considered for admission.
            </ListItem>
            <ListItem>
              Based upon the marks obtained in Class-IX & Class-X Board
              Examination, a list of selected candidates for admission to
              Class-XI will be displayed on the notice board.
            </ListItem>
          </UnorderedList>
        </section>

        {/* Documents Required for Admission in Class-XI         */}
        <section>
          <div className="heading">
            Documents Required for Admission in Class-XI
          </div>
          <UnorderedList className="flex flex-col gap-2">
            <ListItem>
              Attested photocopy of the Mark Sheet from the Board/School.
            </ListItem>
            <ListItem>
              Attested photocopy of Passing & Migration Certificates from the
              Board/School.
            </ListItem>
            <ListItem>4 passport size photographs.</ListItem>
            <ListItem>
              Attested photocopy of the Certificate of School Based Evaluation
              in respect of students admitted in Class-XI coming from schools
              affiliated to CBSE from foreign countries.
            </ListItem>
            <ListItem>
              Conduct and Character Certificate from the school last attended.
            </ListItem>
            <ListItem>
              Selected candidates may complete all the admission formalities and
              deposit the fee at the school office within 7 days, failing which,
              he/she will have no claim for the admission later on.
            </ListItem>
            <ListItem>
              In case some of the selected candidates do not take admission, a
              second list will be brought out.
            </ListItem>
          </UnorderedList>
        </section>

        {/* Withdrawal From School
         */}
        <section>
          <div className="heading py-3 bg-[#4848b3] text-white pl-5">
            Withdrawal From School
          </div>
          <Text className="mt-5">
            The school reserves the right to remove the name of any student from
            the roll for:
          </Text>
          <UnorderedList className="flex flex-col gap-2">
            <ListItem>Arrears of fees for more than two months.</ListItem>
            <ListItem>
              Continuous absence of the student for more then 10 days without
              notice.
            </ListItem>
            <ListItem>
              Irregular attendance, Lack of attention to studies or playing
              truant.
            </ListItem>
            <ListItem>
              If the student fails in the annual examination twice in the same
              class, beyond class IX.
            </ListItem>
            <ListItem>Misconduct on the part of the Parents/Students.</ListItem>
          </UnorderedList>
          <Text className="indent-[5%] mt-10">
            The school reserves the right to expel any student whose conduct is
            harmful to other students or damages the fair name of the school.
            Immorality in words or deeds, willful damage to school property,
            grave insubordination, contempt of authority, unsatisfactory
            progress, involvement in acts of crime or violence inside or outside
            the school etc. are sufficient grounds for expulsion from the
            school.
          </Text>
        </section>

        {/* Transfer Certificate         */}
        <section>
          <div className="heading py-3 bg-[#4848b3] text-white pl-5">
            Transfer Certificate
          </div>
          <UnorderedList className="flex flex-col gap-2 mt-5">
            <ListItem>
              Withdrawal forms are available at the school office. The form
              should be filled in completely and submitted to the office. The
              office, after completing all formalities will prepare the transfer
              certificate and issue the transfer certificate after three days
              and not on the same day.
            </ListItem>
            <ListItem>
              Duplicate copies of transfer certificate are not ordinarily
              issued. In special cases such certificates will be issued after
              verification, on payment of 50/- . An affidavit should be filed
              regarding duplicate T.C.
            </ListItem>
            <ListItem>
              Admissions are normally made before the beginning of the academic
              session.
            </ListItem>
            <ListItem>New Session begins from April every year.</ListItem>
            <ListItem>
              After the publication of the list for the selected students,
              admission form duly filled, along with Birth Certificate, Photos,
              Mark Sheet and Transfer Certificate (TC) from institute last
              attended (as applicable ), will be submitted, by the parents.
            </ListItem>
            <ListItem>
              Some seats are reserved for students recommended by the management
              provided they are otherwise eligible to be admitted.
            </ListItem>
            <ListItem>
              No admission will be made after the seats are full in the classes
              for which admission is sought.
            </ListItem>
          </UnorderedList>

          <Text className="mt-10 indent-[5%]">
            Thank you for expressing an interest in School ERP INDIA. Investing
            in your children's education is one of the most important decisions
            you will make in your lifetime and one that requires great thought.
            These are formative years, and the relationships made, through
            friendships and interactions with teachers, will shape them for the
            future. It is critical that those sharing the responsibility for
            your children's education also share the values that are of primary
            importance in your home.At <strong>School ERP INDIA </strong>we
            offer a nurturing environment that fosters sharp learning skills, a
            top-of-the-line curriculum that offers the best in education.
          </Text>
          <Text className="mt-10 indent-[5%] mb-20">
            In order to take your interest for admission forward, we encourage
            you to make an appointment with our Admission Counsellors and visit
            our campuses. Our Admission Counsellors look forward to welcoming
            you to our campus for a tour and providing details about the school,
            curricular and extracurricular activities...
          </Text>
        </section>
      </section>

      <Footer />
    </div>
  );
};

export default AdmissionOverview;
