import React, { useRef } from "react";
import "./Referral.css";
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
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  // Button,
  // Box,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
  // Stack,
  useDisclosure,
} from "@chakra-ui/react";
import InfoIcon from "@mui/icons-material/Info";
import { Heading } from "@chakra-ui/react";
import { SvgIcon } from "@mui/material";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import Footer from "../Componants/Footer";

const Referral = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();
  return (
    <div className="referrals">
      <div className="referrals_one">
        <div className="referrals_one_1">
          <div className="referrals_one_11">
            <h1>
              Refer once, earnspan
              <span> twice!</span>
            </h1>
            <p>Exciting rewards await you and your friends.</p>
            <>
        <Button colorScheme="teal" onClick={onOpen}>
          REFER NOW
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          initialFocusRef={firstField}
          onClose={onClose}
          size="md"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader
              style={{ textAlign: "center", fontSize: "24px" }}
              borderBottomWidth="1px"
            >
              Create Account
              <p style={{ textAlign: "center", fontSize: "18px" }}>
                Already have an account?{" "}
                <span style={{ textAlign: "center", color: "#3470e4" }}>
                  Sign in
                </span>
              </p>
            </DrawerHeader>

            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  <FormLabel htmlFor="username">
                    Name
                    <span
                      style={{
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "24px",
                        color: "#FF3562",
                      }}
                    >
                      *
                    </span>
                  </FormLabel>
                  <Input
                    ref={firstField}
                    id="username"
                    placeholder="Enter user name"
                    required
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor="email">
                    Email Address
                    <span
                      style={{
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "24px",
                        color: "#FF3562",
                      }}
                    >
                      *
                    </span>
                  </FormLabel>
                  <InputGroup>
                    <Input
                      type="email"
                      required
                      placeholder="Enter email address"
                    />
                  </InputGroup>
                </Box>
                <Box>
                  <FormLabel htmlFor="mobile">
                    Mobile Number
                    <span
                      style={{
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "24px",
                        color: "#FF3562",
                      }}
                    >
                      *
                    </span>
                  </FormLabel>
                  <InputGroup>
                    <InputLeftAddon children="+91" />
                    <Input
                      type="tel"
                      required
                      placeholder="Enter whatsapp mobile number"
                    />
                  </InputGroup>
                </Box>
                <Box>
                  <FormLabel htmlFor="gender">
                    Select gender
                    <span
                      style={{
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "24px",
                        color: "#FF3562",
                      }}
                    >
                      *
                    </span>
                  </FormLabel>
                  <Select id="gender" required defaultValue="male">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Select>
                </Box>
                <Box>
                  <FormLabel htmlFor="desc">Skills</FormLabel>
                  <Textarea id="desc" />
                </Box>
              </Stack>
              <DrawerFooter
                style={{ padding: "15px 0px" }}
                borderTopWidth="1px"
              >
                <Button
                  style={{
                    width: "100%",
                    backgroundColor: "#3470e4",
                    color: "white",
                  }}
                  size="md"
                >
                  SUBMIT
                </Button>
              </DrawerFooter>
              <p style={{ textAlign: "center", fontSize: "12px" }}>
                By signing up, I accept the Masai{" "}
                <a href="https://www.masaischool.com/privacy" style={{color: "#3470e4", textDecoration:"underline"}}>Terms of Service</a> and
                acknowledge the <br />
                <a href="https://www.masaischool.com/terms" style={{ color: "#3470e4",textDecoration:"underline" }}>Privacy Policy</a>.
              </p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
          </div>
        <div className="referrals_one_2">
            <img src="https://www.masaischool.com/images/referral/Referral.png" alt="" />
        </div>
        </div>
      </div>
      <div className="referrals_two">
        <p className="referrals_two_p1">Help launch a friend’s dream career</p>
        <p className="referrals_two_p2">
          Ask your friends to sign up using your referral code to earn coins &
          exciting rewards
        </p>
        <div className="referrals_avatar">
          <div className="avatar_1">
            <div>
              <img
                src="https://www.masaischool.com/images/referral/boy.svg"
                alt=""
              />
            </div>
            <p className="avatar_p1">
              Your friend clears the
              <br /> MSAT
            </p>
            <p className="avatar_p11">
              <span className="avatar_span1">
                <span>You both get 100 coins</span>
                <img
                  src="	https://www.masaischool.com/images/referral/coin.svg"
                  alt=""
                />
              </span>
            </p>
          </div>
          <div className="avatar_2">
            <div>
              <img
                src="	https://www.masaischool.com/images/referral/girl.svg"
                alt=""
              />
            </div>
            <p className="avatar_p2">
              Your friend completes the <br />
              Onboarding Process
            </p>
            <p className="avatar_p22">
              <span className="avatar_span2">
                <span>You both get 100 coins</span>
                <img
                  src="	https://www.masaischool.com/images/referral/coin.svg"
                  alt=""
                />
              </span>
            </p>
          </div>
          <div className="avatar_3">
            <div>
              <img
                src="	https://www.masaischool.com/images/referral/girl2.svg"
                alt=""
              />
            </div>
            <p className="avatar_p3">
              Your friend starts their classes
              <br /> and completes their 1st week
            </p>
            <p className="avatar_p33">
              <span className="avatar_span3">
                <span>You both get 500 coins</span>
                <img
                  src="	https://www.masaischool.com/images/referral/coin.svg"
                  alt=""
                />
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="referrals1">
        <p className="referrals_p1">Refer and be Rewarded</p>
        <p className="referrals_p2">
          Redeem earned coins for the product of your choice.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/amazon_vouchor_94d330a4b2.png"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <div className="cards_price">
                  {" "}
                  <Heading size="md">Amazon Voucher</Heading>
                  <Text
                    style={{ display: "flex", gap: "5px" }}
                    color="blue.600"
                    fontSize="2xl"
                  >
                    100{" "}
                    <img
                      src="https://www.masaischool.com/images/referral/coin.svg"
                      alt=""
                    />
                  </Text>
                </div>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup>
                <Button className="amazon_v">CLAIM FOR 100 COINS</Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="	https://masai-website-images.s3.ap-south-1.amazonaws.com/Component_15_ef30609f7d.png"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <div className="cards_price">
                  {" "}
                  <Heading size="md">Mechanical Keyboard</Heading>
                  <Text
                    style={{ display: "flex", gap: "5px" }}
                    color="blue.600"
                    fontSize="2xl"
                  >
                    4000{" "}
                    <img
                      src="https://www.masaischool.com/images/referral/coin.svg"
                      alt=""
                    />
                  </Text>
                </div>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup>
                <Button className="amazon_v">CLAIM FOR 4000 COINS</Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Component_15_1_315739c64c.png"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <div className="cards_price">
                  {" "}
                  <Heading size="md">Amazon Firestick</Heading>
                  <Text
                    style={{ display: "flex", gap: "5px" }}
                    color="blue.600"
                    fontSize="2xl"
                  >
                    3000{" "}
                    <img
                      src="https://www.masaischool.com/images/referral/coin.svg"
                      alt=""
                    />
                  </Text>
                </div>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup>
                <Button className="amazon_v">CLAIM FOR 3000 COINS</Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </div>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Component_15_2_20f5e1fa71.png"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <div className="cards_price">
                  {" "}
                  <Heading size="md">Amazon Echo</Heading>
                  <Text
                    style={{ display: "flex", gap: "5px" }}
                    color="blue.600"
                    fontSize="2xl"
                  >
                    3000{" "}
                    <img
                      src="https://www.masaischool.com/images/referral/coin.svg"
                      alt=""
                    />
                  </Text>
                </div>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup>
                <Button className="amazon_v">CLAIM FOR 3000 COINS</Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Component_15_3_46f3143653.png"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <div className="cards_price">
                  {" "}
                  <Heading size="md">Netflix Subscription</Heading>
                  <Text
                    style={{ display: "flex", gap: "5px" }}
                    color="blue.600"
                    fontSize="2xl"
                  >
                    2400{" "}
                    <img
                      src="https://www.masaischool.com/images/referral/coin.svg"
                      alt=""
                    />
                  </Text>
                </div>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup>
                <Button className="amazon_v">CLAIM FOR 2400 COINS</Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Component_15_4_99b7c43667.png"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <div className="cards_price">
                  {" "}
                  <Heading size="md">Smart Watch</Heading>
                  <Text
                    style={{ display: "flex", gap: "5px" }}
                    color="blue.600"
                    fontSize="2xl"
                  >
                    1500{" "}
                    <img
                      src="https://www.masaischool.com/images/referral/coin.svg"
                      alt=""
                    />
                  </Text>
                </div>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup>
                <Button className="amazon_v">CLAIM FOR 1500 COINS</Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </div>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Component_15_5_dd1acee459.png"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <div className="cards_price">
                  {" "}
                  <Heading size="md">Masai T shirt</Heading>
                  <Text
                    style={{ display: "flex", gap: "5px" }}
                    color="blue.600"
                    fontSize="2xl"
                  >
                    500{" "}
                    <img
                      src="https://www.masaischool.com/images/referral/coin.svg"
                      alt=""
                    />
                  </Text>
                </div>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup>
                <Button className="amazon_v">CLAIM FOR 500 COINS</Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </div>
        <div className="refferals_btn">
          <button className="refferals_btnn">INVITE YOUR FRINDS</button>
        </div>
      </div>
      <div className="prepleaf">
        <SvgIcon style={{ color: "#00CC6D", fontSize: "32px" }}>
          <InfoIcon />
        </SvgIcon>
        <p>
          Want to refer students for our Prepleaf courses?
          <a href="https://www.prepleaf.com/referral?_gl=1*1hd0uzp*_ga*MTcyOTkwNjAwOS4xNjk3OTk5NTgw*_ga_GPPD2PTVSL*MTY5ODMxNzM1OC4xOC4xLjE2OTgzMTgzMDguNjAuMC4w">
            {" "}
            Click Here
          </a>
        </p>
      </div>
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
                    Who can I refer?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Anyone who meets the eligibility criteria for our courses can be
                referred. Eligibility: Up to 28 years of age Graduate (Any
                Stream) Should know the basics of the English language Must
                posses a desktop or laptop with an uninterrupted service
                connection
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton
                  style={{ padding: "15px 0", fontWeight: "600" }}
                >
                  <Box as="span" flex="1" textAlign="left">
                    I am not a Masai Student. Can I still refer a friend?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Yes. If you are aware of Masai and believe in what we are doing,
                then just make a profile on our website and start referring.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton
                  style={{ padding: "15px 0", fontWeight: "600" }}
                >
                  <Box as="span" flex="1" textAlign="left">
                    Can the coins be redeemed for cash?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                No, you can only redeem the coins for Amazon Vouchers or to
                unlock goodies from our Select Catalogue.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton
                  style={{ padding: "15px 0", fontWeight: "600" }}
                >
                  <Box as="span" flex="1" textAlign="left">
                    Is there a limit to the number of referrals per person?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                No, you can refer as many people as you like and unlock more
                coins.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton
                  style={{ padding: "15px 0", fontWeight: "600" }}
                >
                  <Box as="span" flex="1" textAlign="left">
                    Whom can I not refer?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                You cannot refer someone who has finished the admissions process
                before the date of referral and you cannot refer yourself.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton
                  style={{ padding: "15px 0", fontWeight: "600" }}
                >
                  <Box as="span" flex="1" textAlign="left">
                    What happens if my friend forgets to input the referral code
                    on sign-up?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                In this case, we would not be able to help you. This will not be
                counted as a successful referral.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton
                  style={{ padding: "15px 0", fontWeight: "600" }}
                >
                  <Box as="span" flex="1" textAlign="left">
                    Is there an expiry date for the coins?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                No, you can redeem your coins whenever you like.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton
                  style={{ padding: "15px 0", fontWeight: "600" }}
                >
                  <Box as="span" flex="1" textAlign="left">
                    My query is not covered here and I have a problem with my
                    referral, whom can I get in touch with?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Please reach out to us at
                &#114;&#x65;&#x66;&#101;&#114;&#114;&#x61;&#x6c;&#x40;&#109;&#97;&#115;&#97;&#x69;&#x73;&#99;&#104;&#x6f;&#x6f;&#x6c;&#x2e;&#x63;&#111;&#x6d;
                and we will get back to you within 72 working hours.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton
                  style={{ padding: "15px 0", fontWeight: "600" }}
                >
                  <Box as="span" flex="1" textAlign="left">
                    Are the coins transferable?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                No, only the referrer or the referee can use the coins. These
                are not transferable to any third party.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton
                  style={{ padding: "15px 0", fontWeight: "600" }}
                >
                  <Box as="span" flex="1" textAlign="left">
                    How does the referral system work?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                For the Referrer: Sign up on the website and Click on ‘Refer &
                Earn’ and share your referrer code with your friend. After the
                referee successfully clears MSAT and the Onboarding Process, 100
                Coins will be credited to your account, for each action, which
                you can redeem for an Amazon Voucher and other rewards. After
                the referee successfully completes 7 days in a course, 500 coins
                will be credited to your account. You can either use these coins
                to unlock goodies from our Select Catalogue or redeem for more
                Amazon Vouchers. For the Referee: You will receive the referral
                code from your friend. Just click on the link and sign up on the
                website with the referral code. After clearing MSAT and the
                Onboarding Process, 100 Coins will be credited to your account,
                which you can redeem for an Amazon Voucher and other rewards.
                After completing 7 days in a course, 500 coins will be credited
                to your account. You can either use these coins to unlock
                goodies from our Select Catalogue or redeem for more Amazon
                Vouchers.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton
                  style={{ padding: "15px 0", fontWeight: "600" }}
                >
                  <Box as="span" flex="1" textAlign="left">
                    How can I use the coins earned by me?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                You can either use these coins to unlock goodies from our Select
                Catalogue or redeem them for Amazon Vouchers.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton
                  style={{ padding: "15px 0", fontWeight: "600" }}
                >
                  <Box as="span" flex="1" textAlign="left">
                    What all courses can I refer people to?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                You can refer people to all Masai courses, according to the
                eligibility of the referee.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Referral;
