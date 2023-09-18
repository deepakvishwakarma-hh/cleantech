import {
  Container,
  Text,
  Button,
  Box,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

function RecommendationHero() {
  return (
    <Box bg={"#F9F1EB"}>
      <Container maxWidth={"8xl"}>
        <SimpleGrid
          columns={[1, 1, 1, 2]}
          gap={["1rem", "1rem", "1rem", "10rem"]}
          py={"10rem"}
        >
          <Box>
            <Text
              letterSpacing={5}
              fontWeight={400}
              textTransform={"uppercase"}
            >
              RECOMMENDATION
            </Text>
            <Text py={5} fontSize={"6xl"} fontFamily={"heading"}>
              Made for Jason
            </Text>
            <Text fontSize={"xl"} fontFamily={"heading"}>
              Your recommendation is based on your goals to focus on Eyes. We
              referenced hundreds of clinical studies to ensure you’re getting
              just what your body needs.
            </Text>
            <Stack direction="row" spacing={4}>
              <Link passHref href={"/cart"}>
                <Button
                  display={"flex"}
                  mt={5}
                  gap={2}
                  fontWeight={400}
                  fontFamily={"body"}
                  variant="takequizsmall"
                  // variant={"unstyled"}
                >
                  Go to cart
                  <HiOutlineArrowLongRight size={30} />{" "}
                </Button>
              </Link>
              <Link passHref href={"/report"}>
                <Button
                  display={"flex"}
                  mt={5}
                  gap={2}
                  fontWeight={400}
                  fontFamily={"body"}
                  variant="takequizsmall"
                  // variant={"unstyled"}
                >
                  Go to report
                  <HiOutlineArrowLongRight size={30} />{" "}
                </Button>
              </Link>
            </Stack>
          </Box>

          <Box>
            <img src="/imgs/e32a7cb2-7d92-410e-8717-2e2fca434db4.png" alt="" />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default RecommendationHero;
