import {
  Box,
  Flex,
  Badge,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import HeroImage from "~/assets/images/hero.png";
import CapitalOne from "~/assets/images/capital_one_logo.png";
import BarClays from "~/assets/images/barclays_logo.png";
import UBS from "~/assets/images/ubs_logo.png";
import HSBS from "~/assets/images/hsbc_logo.png";
import PiggyVest from "~/assets/images/piggyvest_logo.png";

interface Patners {
  alt: string;
  logo: StaticImageData;
}
const patners: Patners[] = [
  {
    alt: "captialone",
    logo: CapitalOne,
  },
  {
    alt: "barclays",
    logo: BarClays,
  },
  {
    alt: "ubs",
    logo: UBS,
  },
  {
    alt: "hsbs",
    logo: HSBS,
  },
  {
    alt: "piggyvest",
    logo: PiggyVest,
  },
];

const CTA = () => (
  <Stack
    mt={6}
    direction={"row"}
    gap={4}>
    <Button
      fontSize={{ md: "small", base: "xs" }}
      border={"sm"}
      borderColor={{ base: "transparent", _dark: "white" }}
      borderRadius={"lg"}
      color={"white"}
      bg={{ base: "primary", _dark: "transparent" }}>
      Get Started
    </Button>
    <Button
      fontSize={{ md: "small", base: "xs" }}
      color={{ base: "primary", _dark: "white" }}
      bg={"transparent"}
      borderRadius={"lg"}
      borderColor={{
        base: "slategray",
        _dark: "transparent",
      }}>
      Request a Demo
    </Button>
  </Stack>
);

export default function HeroSection() {
  return (
    <Box width={"full"}>
      <Flex
        id="home"
        px={{ md: 12, base: 6 }}
        align={"center"}
        justify={"center"}
        mt={{ base: 10, md: 8 }}
        direction={"column"}>
        <Badge
          borderRadius={"full"}
          px="10px"
          py="4px"
          bg={"transparent"}
          border={"sm"}
          borderColor={{
            base: "primary",
            _dark: "slategray.thin",
          }}
          color={{ base: "primary", _dark: "white" }}
          fontSize={{ base: "x-small", md: "xs" }}>
          Announcing Our Beta Product
        </Badge>
        <Flex
          width={{ md: "70%", base: "full" }}
          mt={1}>
          <Text
            fontSize={{ md: "large", base: "md" }}
            textAlign={"center"}
            fontWeight={"semibold"}>
            Your Journey to Financial Freedom Begins Here!
          </Text>
        </Flex>
        <Flex
          w={{ md: "63%", base: "full" }}
          mt={10}>
          <Text
            fontSize={{ md: "xxx-large", base: "xs" }}
            textAlign={"center"}
            color={{
              base: "slategray",
              _dark: "slategray.200",
            }}>
            Empowering you with the knowledge, tools, and
            resources you need to unlock your financial
            potential.
          </Text>
        </Flex>
        <CTA />
        <Box mt={{ base: 16, md: 20 }}>
          <Image
            src={HeroImage}
            alt="hero-image"
          />
        </Box>
      </Flex>

      {/* Partners */}
      <Box
        id="patners"
        bg={"primary"}
        mt={0}
        px={{ base: 4, md: 14 }}
        py={{ base: 4, md: 6 }}>
        <Flex
          wrap="wrap"
          justify="space-between"
          align="center"
          gap={{ base: 4, md: 6 }}>
          {patners.map(patner => (
            <Box
              key={patner.alt}
              flex={{ base: "1 0 30%", md: "1 0 15%" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              minW="60px"
              maxW="120px"
              mx="auto">
              <Image
                src={patner.logo}
                alt={patner.alt}
              />
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
