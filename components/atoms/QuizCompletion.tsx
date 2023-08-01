import { useRef } from "react";
import Confetti from "react-confetti";
import { useRouter } from "next/router";
import useDimention from "~/hooks/useDimention";
import { Button, Text, Box } from "@chakra-ui/react";

const QuizCompletion = () => {
  const router = useRouter();
  const confetiRef = useRef<any>(null);
  const { width, height } = useDimention();

  return (
    <Box pt={"10rem"} ref={confetiRef}>
      <Confetti numberOfPieces={150} width={width} height={height} />
      <Text
        fontSize={"5xl"}
        fontFamily={"heading"}
        fontWeight={500}
        textAlign={"center"}
        mb={5}
      >
        <b> Congratulations! </b>, <br /> You have completed the quiz
      </Text>
      <Text mb={5}>
        The suggested products with quantity according to this quiz have been
        added to your cart
      </Text>
      <Button
        variant={"unstyled"}
        border={"2px black solid"}
        display={"flex"}
        py={7}
        px={10}
        fontWeight={400}
        borderRadius={"full"}
        textTransform={"capitalize"}
        _hover={{ bg: "black", color: "white" }}
        mx={"auto"}
        onClick={() => {
          router.push("/recommendation");
        }}
      >
        Next →
      </Button>
    </Box>
  );
};

export default QuizCompletion;
