"use client";

import {
  Box,
  Stack,
  Flex,
  Text,
  Link,
  Button,
  IconButton,
  Drawer,
  useDisclosure,
  Portal,
  CloseButton,
} from "@chakra-ui/react";
import { LuMenu } from "react-icons/lu";

interface NavItem {
  label: string;
  href: string;
}

const NavItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About Us", href: "#about-us" },
  { label: "FAQ", href: "#faq" },
];

const CTA = () => {
  return (
    <Button
      fontSize={{ md: "sm" }}
      border={"xs"}
      borderRadius="lg"
      borderColor={{
        base: "transparent",
        _dark: "white",
      }}
      color={"white"}
      width={"100%"}
      bg={{ base: "primary", _dark: "transparent" }}>
      Try it for free
    </Button>
  );
};
export default function NavBar() {
  const { open, onToggle } = useDisclosure();
  return (
    <Box px={{ md: 10, base: 6 }}>
      <Flex
        justify="space-between"
        align="center">
        <Text
          color={{ base: "primary", _dark: "white" }}
          fontWeight="semibold"
          fontSize={{ md: "md", base: "medium" }}>
          Amond.
        </Text>

        <Stack
          display={{ base: "none", md: "flex" }}
          direction="row"
          gap={4}
          align="center">
          {NavItems.map((item, index) => (
            <Flex
              gap={2}
              key={item.href}
              align="center">
              <Link
                href={item.href}
                fontSize={{ md: "sm" }}
                color={{
                  base: "slategray",
                  _dark: "slategray.200",
                }}
                _active={{
                  color: {
                    base: "primary",
                    _dark: "white",
                  },
                  outline: "none",
                }}
                _focus={{
                  color: {
                    base: "primary",
                    _dark: "white",
                  },
                  outline: "none",
                }}
                textDecoration="none">
                {item.label}
              </Link>

              {index !== NavItems.length - 1 && (
                <Text
                  px={2}
                  fontSize="sm"
                  color={{
                    base: "primary",
                    _dark: "white",
                  }}
                  position="relative"
                  top="0">
                  •
                </Text>
              )}
            </Flex>
          ))}
        </Stack>
        <Box display={{ base: "none", md: "flex" }}>
          <CTA />
        </Box>

        <Box display={{ base: "flex", md: "none" }}>
          <IconButton
            outline={"none"}
            bg={"none"}
            color={{ base: "primary", _dark: "white" }}
            onClick={onToggle}>
            <LuMenu />
          </IconButton>
        </Box>
      </Flex>
      <Drawer.Root open={open}>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content bg={"white"}>
              <Drawer.Header
                bg={{ base: "brand", _dark: "primary" }}
                textAlign={"center"}>
                <Drawer.Title>
                  <Box
                    mt={14}
                    alignSelf={"center"}>
                    <Text
                      color={{
                        base: "primary",
                        _dark: "white",
                      }}
                      fontWeight="semibold"
                      fontSize={{ base: "lg" }}>
                      Amond.
                    </Text>
                  </Box>
                </Drawer.Title>
              </Drawer.Header>
              <Drawer.Body
                px={4}
                alignItems={"center"}
                bg={{ base: "brand", _dark: "primary" }}>
                <Drawer.CloseTrigger asChild>
                  <CloseButton
                    onClick={onToggle}
                    color={{
                      base: "primary",
                      _dark: "white",
                    }}
                    size={"lg"}
                  />
                </Drawer.CloseTrigger>

                <Stack
                  gap={12}
                  mt={8}
                  align="center"
                  justify="center"
                  width="100%">
                  {NavItems.map((item, index) => (
                    <Link
                      key={index}
                      onClick={onToggle}
                      textAlign={"center"}
                      href={item.href}
                      fontSize={"small"}
                      color={{
                        base: "slategray",
                        _dark: "slategray.200",
                      }}
                      _active={{
                        color: {
                          base: "primary",
                          _dark: "white",
                        },
                        outline: "none",
                      }}
                      _focus={{
                        color: {
                          base: "primary",
                          _dark: "white",
                        },
                        outline: "none",
                      }}
                      textDecoration="none">
                      {item.label}
                    </Link>
                  ))}
                </Stack>

                <Flex
                  mt={12}
                  width={"full"}>
                  <CTA />
                </Flex>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Box>
  );
}
