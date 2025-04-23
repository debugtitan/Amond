import { createSystem, defaultConfig } from "@chakra-ui/react"

export const systemConfig = createSystem(defaultConfig, {
    theme: {
        tokens: {
            colors: {
                brand: { value: "#D9D9D933" },
                primary: { value: "#242A38" },
                slategray: {
                    DEFAULT: { value: "#737780" },
                    thin: { value: "#6C7E8080" },
                    200: { value: "#ADB7CC" },
                    300: { value: "#CCD6FF" }
                },
                white: { value: "#FFFFFF" }
            },


            fontWeights: {
                normal: { value: "400" },
                medium: { value: "500" },
                semibold: { value: "600" }
            },
            fontSizes: {
                "x-small": { value: "10px" },
                xs: { value: "14px" },
                small: { value: "16px" },
                sm: { value: "20px" },
                "xxx-large": { value: "24px" },
                medium: { value: "28px" },
                md: { value: "32px" },
                large: { value: "48px" },
                lg: { value: "54px" }
            },
            sizes: {
            }
        }
    },
    globalCss: {
        "html, body": {
            fontFamily: "var(--font-livVic)"
        }
    }
})