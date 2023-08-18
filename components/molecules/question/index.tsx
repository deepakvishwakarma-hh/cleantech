import Option from "./option";
import { motion } from "framer-motion";
import { Flex, Text, Box } from "@chakra-ui/react";
import { localstorage } from "~/hooks/useQuiz";
import { useLocalStorage } from "@mantine/hooks";
import { useRouter } from "next/router";
interface Props {
  question: string;
  category: string;
  options: { [key: string]: number };
}

const Question: React.FC<Props> = ({ question, options, category }) => {
  const router = useRouter();
  const { ctgr, itd, idx, cpd } = router.query;

  const MotionBox = motion(Box);
  const [{ path, select }]: any = useLocalStorage(localstorage);

  return (
    <MotionBox
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      maxW={"3xl"}
      pt={["5rem", "5rem", "5rem", "10rem"]}
      px={10}
    >
      <Text
        letterSpacing={2}
        mb={5}
        textTransform={"uppercase"}
        textAlign={"center"}
      >
        {category}
      </Text>
      <Text fontSize={"4xl"} fontFamily={"heading"} textAlign={"center"} mb={5}>
        {question}
      </Text>
      <Flex
        gap={5}
        flexWrap={"wrap"}
        py={2}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {Object.keys(options).map((option, index) => {
          return (
            <Option
              key={option}
              option={option}
              selected={
                path?.[ctgr as string]
                  ? path?.[ctgr as string].at(parseInt(idx as string)) ==
                    options[option].toString()
                  : false
              }
            />
          );
        })}
      </Flex>
    </MotionBox>
  );
};

export default Question;

// {JSON.stringify(
//   path?.[ctgr as string].at(parseInt(idx as string))
// ) == `${options[option]}`}
