import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  ChakraProvider,
  extendTheme,
  CSSReset,
} from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here.
  };

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box
        mx="auto"
        rounded="16px"
        p={["16px", "24px"]}
        maxW="437px"
        minW="437px"
        borderWidth="1px"
        borderColor="#D6E2FA"
        bg="#fff"
        boxShadow="0px -2px 11px -2px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)"
      >
        <h4
          style={{
            textAlign: "center",
            fontSize: "22px",
            fontWeight: "700",
            lineHeight: "28px",
            margin: "7px 0",
          }}
        >
          Share your hiring requirements
        </h4>

        <form autoComplete="on" className="valid" onSubmit={handleSubmit}>
          <VStack spacing="4" mt="20px">
            <div className="grid gap-[12px]">
              <div className="w-full">
                <div>
                  <p>
                    Name{" "}
                    <span className=" customspan font-[600] text-[14px] leading-[24px] text-[#FF3562]">
                      *
                    </span>
                  </p>
                  <div className="customInputDiv flex w-full relative mt-[6px]">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div>
                  <p>
                    Company{" "}
                    <span className=" customspan font-[600] text-[14px] leading-[24px] text-[#FF3562]">
                      *
                    </span>
                  </p>
                  <div className="customInputDiv flex w-full relative mt-[6px]">
                    <Input
                      type="text"
                      name="company"
                      placeholder="Enter company name"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div>
                  <p>
                    Work E-mail{" "}
                    <span className=" customspan font-[600] text-[14px] leading-[24px] text-[#FF3562]">
                      *
                    </span>
                  </p>
                  <div className="customInputDiv flex w-full relative mt-[6px]">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div>
                  <p>
                    Phone number{" "}
                    <span className=" customspan font-[600] text-[14px] leading-[24px] text-[#FF3562]">
                      *
                    </span>
                  </p>
                  <div className="customInputDiv flex w-full relative mt-[6px]">
                    <Input
                      type="tel"
                      name="phone_number"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <Button
                style={{
                  width: "25vw",
                  backgroundColor: "red",
                  color: "white",
                }}
                type="submit"
              >
                SUBMIT
              </Button>
            </div>
          </VStack>
        </form>
        <div className="mt-[20px]">
          <p
            style={{
              fontSize: "18px",
              fontWeight: "600",
              lineHeight: "24px",
              textAlign: "center",
              margin: "7px 0",
            }}
          >
            Have Questions?
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="mt-[2px] flex items-center justify-center"
          >
            <img
              style={{ marginRight: "10px" }}
              src="https://www.masaischool.com/images/hire-masai-graduates/phone.svg"
              alt="hire masai graduates"
              className=""
            />
            <a
              className="!font-[600] text-[16px] leading-[24px] font-sans transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 !ml-[8px] !text-[#3470E4]"
              href="tel:9035038526"
            >
              Call 9035038526
            </a>
          </div>
        </div>
      </Box>
    </ChakraProvider>
  );
}

export default App;
