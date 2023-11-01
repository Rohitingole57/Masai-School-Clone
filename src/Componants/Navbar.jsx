import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();
  return (
    <div className="navbar">
      <div className="nav_left">
        <Link to="/">
          <img
            src="https://masai-website-images.s3.ap-south-1.amazonaws.com/logo.png"
            alt="masai logo"
          />
        </Link>
      </div>
      <div className="nav_middle">
        <ul>
          <li>
            <Link exact to="/" >
             </Link>
          </li>
          <li>
            <NavLink to="/courses" activeClassName="active">
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink to="/fees" activeClassName="active">
              Fees
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" activeClassName="active">
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/success" activeClassName="active">
              Success Stories
            </NavLink>
          </li>
          <li>
            <NavLink to="/hire" activeClassName="active">
              Hire From Us
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="nav_right">
        <button className="nav_referearn">
          <Link to="/referral">REFER & EARN</Link>
        </button>
        <>
          <Button
            className="nav_signup"
            style={{
              color: "#ed0331",
              backgroundColor: "white",
              border: "1px solid #ed0331",
              fontWeight: "600",
              fontSize: "14px",
            }}
            onClick={onOpen}
          >
            SIGN UP
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
                  <a
                    href="https://www.masaischool.com/privacy"
                    style={{ color: "#3470e4", textDecoration: "underline" }}
                  >
                    Terms of Service
                  </a>{" "}
                  and acknowledge the <br />
                  <a
                    href="https://www.masaischool.com/terms"
                    style={{ color: "#3470e4", textDecoration: "underline" }}
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      </div>
    </div>
  );
};

export default Navbar;
