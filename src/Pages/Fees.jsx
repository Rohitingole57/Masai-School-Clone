import React from "react";
import "./Fees.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BoltIcon from "@mui/icons-material/Bolt";
import Footer from "../Componants/Footer";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Image,
  Stack,
  Text,
  Divider,
  Button,
  ButtonGroup,
  Heading,
} from "@chakra-ui/react";
const Fees = () => {
  return (
    <div className="fees">
      <div className="fees_first">
        <h1>Pay After Placement</h1>
        <p>
          We believe that potential is evenly distributed across Indian society,
          but opportunity is not. <br />
          Masai is democratising education with a unique Pay After Placement
          (PAP) Model.
          <br /> PAP allows you to study the course of your choice at{" "}
          <span style={{color:"#3470E4", fontWeight:"700"}}>₹0 upfront fee.</span>
        </p>
      </div>
      <div className="fees_second">
        <div className="fees_second_1">
          <h2>
            Pay After Placement <br />
            (PAP) Agreement
          </h2>
        </div>
        <div className="fees_second_2">
          <p>
            PAP Agreement is a legal contract that makes education at Masai{" "}
            <b>outcome-based.</b> It is not an
            <br /> education loan, as you do not have to pay any interest & you
            do not require any collaterals. If you do <br />
            not get placed within 1 year of course completion, your learning
            with Masai is completely free.
          </p>
        </div>
      </div>
      <div className="fees_third">
        <div className="fees_third_cont">
          <h1>How it works?</h1>
          <div className="fees_third_1">
            <div className="fees_left_no">
              <h1>1</h1>
            </div>
            <div className="fees_third_p3">
              <h2>
                Pay After Placement(PAP) Agreement is a way for us to invest in
                your future and success. That means <br />
                that we as an institution succeed only if you succeed in your
                career. Here is how:
              </h2>
              <div>
                <div className="fees_third_11">
                  <div>
                    <CurrencyRupeeIcon className="fees_logo_color"/>
                  </div>
                  <div>
                    <p>Minimum CTC</p>
                    <p>
                      You only pay us a fee for your learning at Masai if you
                      earn more than the threshold CTC slabs. If your salary is
                      above the CTC of ₹3,50,000/-, the PAP <br />
                      monthly payments come into effect.
                    </p>
                  </div>
                </div>
                {/* -------- */}
                <div className="fees_third_11">
                  <div>
                    <CalendarMonthIcon className="fees_logo_color"/>
                  </div>
                  <div>
                    <p>1 Year</p>
                    <p>
                      If you don’t get a job offer within 1 year of course
                      completion, you pay nothing for your learning at Masai.
                    </p>
                  </div>
                </div>
                {/* ---------- */}
                <div className="fees_third_11">
                  <div>
                    <BoltIcon className="fees_logo_color"/>
                  </div>
                  <div>
                    <p>Enforcement</p>
                    <p>
                      In the event you are not working or if your income drops
                      below the CTC mentioned in the Pay After Placement
                      Agreement the monthly payments <br />
                      pause*
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ----------- */}
          <div className="fees_third_1">
            <div className="fees_left_no">
              <h1>2</h1>
            </div>
            <div className="fees_third_p3">
              <h2>Course Fees</h2>
              <p>
                These only take effect once you start earning above the PAP
                threshold amount for your course.
                <br />
                <br/>
                This table shows how much of your monthly income you will pay,
                based on the 
                different possible annual incomes you may have. For more
                information on the<br /> Masai School ISA, please see our FAQs.
              </p>
              <div>
                <p>Your CTC based on your salary tier.</p>
                <table>
                  <tbody>
                    <tr>
                      <td>Category</td>
                      <td>Your Salary Range (CTC)</td>
                      <td>Monthly Payable Amount (PAP)</td>
                      <td>Tenure (in months)</td>
                      <td>Total Payable Fee (Including taxes if applicable)</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>{"<"} 3.5 LPA</td>
                      <td>0</td>
                      <td>NA</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>A</td>
                      <td>3.5 - 4.99 LPA</td>
                      <td>₹ 6,944</td>
                      <td>36</td>
                      <td>2,50,000</td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>5 - 9.99 LPA</td>
                      <td>₹ 9,722</td>
                      <td>36</td>
                      <td>3,50,000</td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>10 LPA and above</td>
                      <td>₹ 15,000</td>
                      <td>30</td>
                      <td>4,50,000</td>
                    </tr>
                  </tbody>
                </table>
                <p>CTC (Cost to Company) is defined as the total gross income earned, including but not limited, to variable pay, compensations and ESOPs. Find out more in the FAQ section.</p>
              </div>
            </div>
          </div>
          {/* ----------- */}
          <div className="fees_third_1">
            <div className="fees_left_no">
              <h1>3</h1>
            </div>
            <div className="fees_third_p3">
              <h2>Drop Out Clauses</h2>
              <p>
                If you realise that Masai is not for you, you may withdraw from
                our courses at anytime. Here is how the fee works in case you
                drop-out
              </p>
            <div>
              <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Frame_1038344_2_3b9eb48d47.png" alt="" />
            </div>
          </div>
            </div>
        </div>
      </div>
      <div>
        {/* FAQ */}
        <div>
          <Heading
            style={{
              textAlign: "center",
              padding: "20px 0",
              margin: "30px 0 20px 0",
            }}
            as="h3"
            size="lg"
          >
            Frequently asked questions
          </Heading>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Accordion allowToggle style={{ width: "900px" }}>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    style={{ padding: "15px 0", fontWeight: "600" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      What is the PAP Agreement and how does it work?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  The Pay After Placement Agreement is a way to pay your Masai
                  course fee. PAP at Masai is an agreement between students and
                  Masai under which you agree to pay a fixed monthly payment for
                  36 months or less. The payment starts only once you earn a
                  salary above the threshold amount. The threshold amount is the
                  minimum salary you have to earn before you start paying Masai
                  your course fee. If you do not get the promised outcome, you
                  pay us nothing at all. Your education is free. You can visit
                  our Fees & PAP page to know more.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton
                    style={{ padding: "15px 0", fontWeight: "600" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      What is the interest rate on my Pay After Placement(PAP)
                      payments?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  PAP Agreement is NOT a loan, so there is no interest on your
                  payment.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    style={{ padding: "15px 0", fontWeight: "600" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      What is CTC?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  CTC (Cost to Company) is defined as “Your total salary
                  (including variable pay), compensations, and gross income and
                  including, but not limited to, benefits such as insurance,
                  HRA, fitness/health benefits, other benefits and allowances
                  including, but not limited to, house rent allowance, leave
                  travel allowance, conveyance and travelling allowance, phone
                  allowance, vehicle allowance and other allowances provided to
                  you from employment or pursuant to self-employment”
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    style={{ padding: "15px 0", fontWeight: "600" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      When do my PAP repayments start and what if I get fired?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  It will come into action once you get placed with at or more
                  the minimum threshold salary at a job after completion of the
                  course. In the event, you lose your job because (i) your
                  employer/company you were placed in stops its business, (ii)
                  pay-cut is introduced by your employer/ company you were
                  placed in, across the company, (iii) lay-off by your employer/
                  company you were placed in, due to economic hardship, your
                  payments will automatically be paused after you’ve reported
                  the change and produced the requisite supporting documents.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    style={{ padding: "15px 0", fontWeight: "600" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      How do I pay my PAP amount?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  How do I pay my PAP amount? Upon clearing the Unit 1(5 weeks)
                  evaluation, the student is required to complete this
                  application with the respective NBFC partner for PAP. Once you
                  get placed, your assigned NBFC partner will approve a one time
                  zero-interest capital, which you can pay monthly for a maximum
                  of 36 months. The monthly payment would start if you have
                  successfully secured an offer letter of 3.5LPA or more. Basis
                  your CTC, the payable amount will come into effect. You can
                  refer to the table in our Fees & PAP section to understand
                  different CTC slabs.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    style={{ padding: "15px 0", fontWeight: "600" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      What happens if I don’t get an offer for the threshold
                      amount for my course?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Masai team is always working to find you good placement
                  opportunities. In the rare case that you don’t get a job of
                  3.5LPA or more, you will not have to pay us anything and your
                  PAP payments will not come into effect. But, if you get a job
                  under 3.5 LPA and after a year, your salary crosses 3.5LPA,
                  your PAP payments will start.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    style={{ padding: "15px 0", fontWeight: "600" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Can I see a copy of the PAP Agreement?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Yes, of course. As you go through our admission process, a
                  copy of the same will be made available to you at the end.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    style={{ padding: "15px 0", fontWeight: "600" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Do I need to submit any document post getting a job?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  As per the Pay After Placement(PAP) Agreement, you will be
                  legally bound to furnish all the documents relevant to your
                  income, such as your Offer Letter, Salary Slips, IT Returns,
                  Bank statements, etc. This disclosure allows us to offer our
                  courses to you at ₹0 upfront fees.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Fees;
