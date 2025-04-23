import { Box, Flex, Text, Stack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Facebook from "~/assets/svg/facebook.svg";
import Instagram from "~/assets/svg/instagram.svg";
import Twitter from "~/assets/svg/x.svg";
import Youtube from "~/assets/svg/youtube.svg";
import LinkedIn from "~/assets/svg/linkedIn.svg";

type Nav = {
  label: string;
  href: string;
};
interface FooterItem {
  label: string;
  contents: Nav[];
}

const footers: FooterItem[] = [
  {
    label: "Navigation",
    contents: [
      { label: "Home", href: "#home" },
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    label: "Company",
    contents: [
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "News", href: "#" },
      { label: "Our Values", href: "#" },
    ],
  },
  {
    label: "Resources",
    contents: [
      { label: "Our Partners", href: "#patners" },
      { label: "Community", href: "#" },
      { label: "Gallery", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
];
export default function Footer() {
  return (
    <Box
      bg={"primary"}
      py={{ base: 12, md: 16 }}
      px={{ md: 12, base: 6 }}>
      <Flex
        direction={{ md: "row", base: "column-reverse" }}
        gap={{ base: 4, md: 12 }}>
        <Flex
          flex={1}
          direction={"column"}
          gap={6}>
          <Text
            color={"white"}
            fontWeight={"semibold"}
            fontSize={{ md: "md", base: "medium" }}>
            Amond.
          </Text>
          <Text
            color={"white"}
            fontSize={{ md: "sm", base: "small" }}>
            Empowering you with the knowledge, tools, and
            resources you need to unlock your financial
            potential.
          </Text>
          <Stack
            direction={"row"}
            gap={{ base: 8, md: 10 }}
            mb={{ base: 8, md: 10 }}>
            <Box>
              {" "}
              <Image
                src={LinkedIn}
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Box>
            <Box>
              {" "}
              <Image
                src={Youtube}
                alt="Youtube"
                width={24}
                height={24}
              />
            </Box>
            <Box>
              {" "}
              <Image
                src={Instagram}
                alt="Instagram"
                width={24}
                height={24}
              />
            </Box>
            <Box>
              {" "}
              <Image
                src={Twitter}
                alt="X"
                width={24}
                height={24}
              />
            </Box>
            <Box>
              {" "}
              <Image
                src={Facebook}
                alt="Facebook"
                width={24}
                height={24}
              />
            </Box>
          </Stack>
        </Flex>
        {footers.map((footer, index) => (
          <Flex
            key={index}
            flex={1}
            direction={"column"}>
            <Text
              color={"white"}
              fontSize={{ md: "xxx-large", base: "sm" }}
              fontWeight={"medium"}>
              {footer.label}
            </Text>
            {footer.contents.map((link, index) => (
              <Link
                href={link.href}
                key={index}>
                <Text
                  color={"white"}
                  fontSize={{ base: "xs", md: "small" }}
                  fontWeight={"normal"}>
                  {link.label}
                </Text>
              </Link>
            ))}
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}
