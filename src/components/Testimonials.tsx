import {
  Box,
  Flex,
  Stack,
  Text,
  Separator,
} from "@chakra-ui/react";
import Image from "next/image";
import RokerSay from "~/assets/images/Client.png";
import ArrowLeft from "~/assets/images/guidance_left-arrow.png";
import ArrowRight from "~/assets/images/guidance_right-arrow.png";
import Ornament from "~/assets/images/ornament-testimony.png";

export default function Testimonial() {
  return (
    <Box
      bg={"brand"}
      pt={{ base: 12, md: 24 }}
      pb={{ base: 8, md: 24 }}>
      <Stack
        position={"relative"}
        px={{ md: 12, base: 6 }}
        direction={{ base: "column", md: "row" }}
        gap={{ base: 8, md: 24 }}>
        <Flex
          flex={1}
          direction={"column"}
          gap={1}>
          <Text
            color={"slategray"}
            fontSize={{ base: "sm", md: "xxx-large" }}>
            Testimonials
          </Text>
          <Text
            color={"primary"}
            fontSize={{ base: "md", md: "large" }}
            fontWeight={"medium"}>
            What our clients are saying
          </Text>
          <Text
            color={"primary"}
            fontSize={{ md: "xxx-large", base: "small" }}>
            “I've tried other financial advisors in the pas
            t, but none compare to Amond. Their transparent
            approach and commitment to excellence have
            earned my trust for life.”
          </Text>
          <Text
            color={"primary"}
            fontSize={{ md: "medium", base: "sm" }}>
            John D. Rockersay
          </Text>
          <Text
            color={"slategray"}
            fontSize={{ base: "small", md: "xxx-large" }}>
            Loyal client
          </Text>
        </Flex>
        <Flex
          flex={1}
          direction={{
            base: "column-reverse",
            md: "column",
          }}
          gap={{ base: 8 }}
          align={"center"}
          justify={"center"}>
          <Flex
            w="full"
            justify={{ base: "center", md: "flex-end" }}>
            <Stack
              direction="row"
              gap={4}
              align="center">
              <Image
                src={ArrowLeft}
                alt="arrow-left"
              />
              <Separator
                borderColor={"slategray"}
                orientation="vertical"
                height="6"
              />
              <Image
                src={ArrowRight}
                alt="arrow-right"
              />
            </Stack>
          </Flex>

          <Box w={{ base: 24, md: "auto" }}>
            <Image
              src={RokerSay}
              alt="client-image"
            />
          </Box>
        </Flex>
        <Box
          position={"absolute"}
          top={{ md: "-48" }}
          w={"auto"}
          zIndex={0}
          display={{ base: "none", md: "flex" }}>
          <Image
            src={Ornament}
            alt=""
          />
        </Box>
      </Stack>
    </Box>
  );
}
