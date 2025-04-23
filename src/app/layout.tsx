import type { Metadata } from "next";
import { Box } from "@chakra-ui/react";
import { Livvic } from "next/font/google";
import ThemeGlobalProvider from "~/context/theme-provider";
import NavBar from "~/components/Navbar";
export const metadata: Metadata = {
  title: "Amond Finance",
  description:
    "We empower you with the knowledge, tools, and resources you need to unlock your financial potential.We empower you with the knowledge, tools, and resources you need to unlock your financial potential.",
};

const livVic = Livvic({
  variable: "--font-livVic",
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${livVic.variable}`}>
        <ThemeGlobalProvider>
          <Box
            pt={{ md: 4, base: 2 }}
            w={"full"}
            bg={{
              base: "brand",
              _dark: "primary",
            }}>
            <NavBar />
            {children}
          </Box>
        </ThemeGlobalProvider>
      </body>
    </html>
  );
}
