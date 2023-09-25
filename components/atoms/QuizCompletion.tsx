import { useRef } from "react";
import Confetti from "react-confetti";
import { useRouter } from "next/router";
import useDimention from "~/hooks/useDimention";
import { Button, Text, Box, useQuery } from "@chakra-ui/react";
import useQuiz from "~/hooks/useQuiz";
import { useSuggestedProducts } from "~/hooks/useSuggestedProducts";

const QuizCompletion = () => {
  const { markCompleted } = useQuiz();
  const data = useSuggestedProducts();
  const router = useRouter();
  const confetiRef = useRef<any>(null);
  const { width, height } = useDimention();

  return (
    <Box pt={"10rem"} px={5} ref={confetiRef}>
      <Confetti numberOfPieces={150} width={width} height={height} />
      <Text
        fontSize={["2xl", "2xl", "3xl", "4xl", "5xl"]}
        fontFamily={"heading"}
        fontWeight={500}
        textAlign={"center"}
        mb={5}
      >
        <b> Congratulations! </b>, <br /> You have completed the quiz.
      </Text>
      <Text mb={5} textAlign={"center"}>
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
          markCompleted();
          router.push("/recommendation");
        }}
      >
        Next →
      </Button>
    </Box>
  );
};

export default QuizCompletion;
