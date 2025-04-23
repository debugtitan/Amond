import {
  Stack,
  Image as ChakraImage,
} from "@chakra-ui/react";
import Image from "next/image";
import Google from "~/assets/images/Google.png";
import Apple from "~/assets/images/Apple.png";

export function AppStoreLink() {
  return (
    <Stack
      direction={"row"}
      gap={4}>
      <ChakraImage
        asChild
        cursor={"pointer"}>
        <Image
          src={Apple}
          alt="apple-store"
        />
      </ChakraImage>
      <ChakraImage
        asChild
        cursor={"pointer"}>
        <Image
          src={Google}
          alt="google-store"
        />
      </ChakraImage>
    </Stack>
  );
}
