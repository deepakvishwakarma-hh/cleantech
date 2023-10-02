import {
  Container,
  Text,
  Button,
  Box,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import { Image } from "@chakra-ui/next-js";
import { BiCartAlt } from "react-icons/bi";
import { useLocalStorage } from "@mantine/hooks";
import { localstorage } from "~/lib/localstorage";
import { TbReportAnalytics } from "react-icons/tb";

function RecommendationHero() {
  const [storage] = useLocalStorage(localstorage);

  return (
    <Box bg={"lightblue"}>
      <Container maxWidth={"8xl"}>
        <SimpleGrid
          columns={[1, 1, 1, 2]}
          px={["1rem", "1rem", "1rem"]}
          gap={["1rem", "1rem", "1rem", "10rem"]}
          pt={["8rem", "10rem"]}
          pb={["2rem", "2rem"]}
        >
          <Box>
            <Text
              letterSpacing={5}
              fontWeight={400}
              textTransform={"uppercase"}
            >
              RECOMMENDATION
            </Text>
            <Text
              py={5}
              fontSize={["3xl", "3xl", "6xl"]}
              fontFamily={"heading"}
            >
              Made for {(storage as any).name}
            </Text>
            <Text fontSize={"xl"} fontFamily={"heading"}>
              Your recommendation is based on your goals to focus on Eyes. We
              referenced hundreds of clinical studies to ensure you’re getting
              just what your body needs.
            </Text>
            <Stack
              mt={5}
              direction={["column", "row", "row", "row"]}
              spacing={[0, 4]}
            >
              <Link passHref href={"/cart"}>
                <Button
                  width={["100%", "auto"]}
                  display={"flex"}
                  mt={5}
                  gap={2}
                  py={6}
                  fontFamily={"body"}
                  sx={{
                    background: "black",
                    alignItems: "center",
                    borderRadius: "full",
                    height: "44px",
                    color: "white",
                    px: 10,
                    border: "2px solid black",
                    fontWeight: 400,
                    transition: ".5s",
                    willChange: "color",
                    "&:hover": {
                      background: "white",
                      color: "black",
                    },
                  }}
                >
                  <BiCartAlt size={25} />
                  Go to cart
                </Button>
              </Link>
              <Link passHref href={"/report"}>
                <Button
                  width={["100%", "auto"]}
                  display={"flex"}
                  mt={5}
                  py={6}
                  gap={2}
                  fontWeight={400}
                  fontFamily={"body"}
                  sx={{
                    background: "white",
                    alignItems: "center",
                    borderRadius: "full",
                    height: "44px",
                    px: 10,
                    border: "2px solid black",
                    fontWeight: 400,
                    transition: ".5s",
                    willChange: "color",
                    "&:hover": {
                      background: "black",
                      color: "white",
                    },
                  }}
                >
                  <TbReportAnalytics size={25} />
                  Go to report
                </Button>
              </Link>
            </Stack>
          </Box>

          <Box display={["none", "none", "none", "block"]}>
            <Image
              src="/imgs/z2.-Extermination-of-Invasive-Insects-(7).jpg"
              width={500}
              height={500}
              sx={{
                borderRadius: "100%",
              }}
              alt="image"
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default RecommendationHero;
