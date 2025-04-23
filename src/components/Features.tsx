import {
  Box,
  Flex,
  Text,
  Grid,
  Stack,
} from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { AppStoreLink } from "./AppStoreLink";
import Database from "~/assets/images/streamline_database-setting-solid.png";
import FeaturesImage from "~/assets/images/Feature.png";
import AppPreview from "~/assets/images/Download.png";

interface Feature {
  label: string;
  icon: StaticImageData;
  content: string;
}

const features: Feature[] = [
  {
    label: "Financial Planning",
    icon: Database,
    content:
      "Let us help you chart a course towards your financial goals.",
  },
  {
    label: "Retirement Planning",
    icon: Database,
    content:
      "Planning for retirement can be daunting, but it doesn't have to be.",
  },
  {
    label: "Investment Management",
    icon: Database,
    content:
      "Take out guesswork from investing with our portfolio services.",
  },
  {
    label: "Wealth Preservation",
    icon: Database,
    content:
      "Protecting your hard-earned assets is our top priority. .",
  },
];
export default function Features() {
  return (
    <Box bg={"brand"}>
      <Flex
        px={{ md: 12, base: 6 }}
        py={{ base: 12, md: 28 }}>
        <Stack
          direction={{ base: "column", md: "row" }}
          gap={{ base: 8, md: 14 }}>
          <Flex
            id="features"
            direction={"column"}
            gap={6}>
            <Text
              color={"slategrey"}
              fontSize={{ md: "xxx-large", base: "sm" }}>
              Features
            </Text>
            <Text
              color={"primary"}
              fontSize={{ base: "medium", md: "large" }}
              fontWeight={"medium"}>
              The only app you’ll ever need for all your
              financial needs.
            </Text>
            <Grid
              gap={6}
              templateColumns={{
                base: "1fr",
                md: "repeat(2,1fr)",
              }}>
              {features.map((feature, index) => (
                <Flex
                  key={index}
                  gap={4}
                  bg={"white"}
                  borderRadius={"lg"}>
                  <Box>
                    <Box
                      bg={"primary"}
                      borderRadius={"xl"}
                      p={2}>
                      <Image
                        src={feature.icon}
                        alt=""
                      />
                    </Box>
                  </Box>
                  <Flex direction={"column"}>
                    <Text
                      color={"primary"}
                      fontSize={{
                        md: "sm",
                        base: "small",
                      }}>
                      {feature.label}
                    </Text>
                    <Text
                      color={"slategray"}
                      fontSize={{
                        md: "small",
                        base: "xs",
                      }}>
                      {feature.content}
                    </Text>
                  </Flex>
                </Flex>
              ))}
            </Grid>
          </Flex>

          <Box>
            <Image
              src={FeaturesImage}
              alt=""
            />
          </Box>
        </Stack>
      </Flex>
      <Box
        bg={"primary"}
        pt={{ md: 8, base: 6 }}
        px={{ md: 8, base: 4 }}>
        <Flex
          gap={2}
          direction={"column"}
          align={"center"}
          justify={"center"}>
          <Text
            color={"slategray.300"}
            fontSize={{ md: "xxx-large", base: "sm" }}>
            Download for FREE
          </Text>
          <Text
            textAlign={"center"}
            color={"white"}
            width={{ md: "70%", base: "full" }}
            fontSize={{ md: "large", base: "xxx-large" }}>
            Download the Amond app to enjoy FREE transfers
            all over the world
          </Text>
          <AppStoreLink />
          <Box>
            <Image
              src={AppPreview}
              alt="app-downlaod"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
