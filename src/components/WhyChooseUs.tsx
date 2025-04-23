import {
  Flex,
  Button,
  Box,
  Text,
  Grid,
} from "@chakra-ui/react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import CastTutorial from "~/assets/images/mdi_cast-tutorial.png";
import Chart from "~/assets/images/fluent-mdl2_financial-solid.png";
import Shield from "~/assets/images/mdi_shield-outline.png";
import OrnamentLeft from "~/assets/images/ornament-home-left.png";

export default function WhyChooseUs() {
  return (
    <Box
      px={{ md: 12, base: 6 }}
      py={{ base: 12, md: 28 }}
      bg={"brand"}>
      <Flex
        position={"relative"}
        align={"center"}
        justify={"center"}
        direction={"column"}>
        <Text
          fontSize={{ md: "xxx-large", base: "small" }}
          color={"slategray"}>
          Why Choose Amond?
        </Text>
        <Flex
          align={"center"}
          justify={"center"}>
          <Text
            fontSize={{ md: "large", base: "xxx-large" }}
            color={"primary"}
            fontWeight={"medium"}
            textAlign={"center"}
            width={{ md: "80%" }}>
            We empower you with the knowledge, tools, and
            resources you need to unlock your financial
            potential.
          </Text>
        </Flex>
        <Grid
          mt={12}
          templateColumns={{
            base: "1fr",
            md: "repeat(3,1fr)",
          }}
          gap={6}>
          <Flex
            bg={"primary"}
            p={6}
            direction={"column"}
            borderRadius={"xl"}
            gap={2}>
            <Box
              alignSelf={"center"}
              color={"white"}>
              <Image
                src={CastTutorial}
                alt=""
              />
            </Box>
            <Text
              color={"white"}
              textAlign={"center"}
              fontSize={{ md: "md", base: "medium" }}
              fontWeight={"medium"}>
              Expert Guidance
            </Text>
            <Text
              textAlign={"center"}
              color={"slategray.300"}
              fontSize={{ md: "xxx-large" }}>
              Our team of seasoned financial advisors is
              here to offer personalized guidance tailored
              to your unique goals and aspirations.
            </Text>
          </Flex>
          <Flex
            bg={"white"}
            p={6}
            direction={"column"}
            borderRadius={"xl"}
            gap={2}>
            <Box
              alignSelf={"center"}
              color={"white"}>
              <Image
                src={Chart}
                alt=""
              />
            </Box>
            <Text
              color={"primary"}
              textAlign={"center"}
              fontSize={{ md: "md", base: "medium" }}
              fontWeight={"medium"}>
              Comprehensive Solutions
            </Text>
            <Text
              textAlign={"center"}
              color={"slategray"}
              fontSize={{ md: "xxx-large" }}>
              From retirement planning to investment
              strategies, we offer a comprehensive suite of
              services to meet all your financial needs
            </Text>
          </Flex>
          <Flex
            bg={"white"}
            p={6}
            direction={"column"}
            borderRadius={"xl"}
            gap={2}>
            <Box
              alignSelf={"center"}
              color={"white"}>
              <Image
                src={Shield}
                alt=""
              />
            </Box>
            <Text
              color={"primary"}
              textAlign={"center"}
              fontSize={{ md: "md", base: "medium" }}
              fontWeight={"medium"}>
              Transparent Approach
            </Text>
            <Text
              textAlign={"center"}
              color={"slategray"}
              fontSize={{ md: "xxx-large" }}>
              We believe in transparency and clarity. No
              hidden fees or complex jargon—just honest
              advice you can trust.
            </Text>
          </Flex>
        </Grid>
        <Box
          position={"absolute"}
          top={{ md: "-48", base: "-48" }}
          left={{ md: "-18px", base: "-2" }}>
          <Image
            src={OrnamentLeft}
            alt=""
          />
        </Box>
        <Button
          mt={{ base: 8, md: 12 }}
          bg={"primary"}
          color={"white"}
          gap={0}
          textAlign={"center"}
          borderRadius={"lg"}
          fontSize={{ md: "sm", base: "xs" }}>
          Learn More <IoIosArrowRoundForward />
        </Button>
      </Flex>
    </Box>
  );
}
