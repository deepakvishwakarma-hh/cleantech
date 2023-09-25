interface Props {
  question: string;
  category: string;
  options: {
    [key: string]: {
      icon: string;
      score: number;
    };
  };
}
import Option from "./option";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { localstorage } from "~/hooks/useQuiz";
import { useSessionStorage } from "@mantine/hooks";
import { Flex, Text, Box } from "@chakra-ui/react";

const Question: React.FC<Props> = ({ question, options, category }) => {
  const router = useRouter();
  const MotionBox = motion(Box);
  const { ctgr, idx } = router.query;
  const [{ path }]: any = useSessionStorage(localstorage);

  return (
    <MotionBox
      px={10}
      maxW={"3xl"}
      exit={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: -100 }}
      pt={["5rem", "5rem", "5rem", "10rem"]}
    >
      <Text
        mb={5}
        letterSpacing={2}
        textAlign={"center"}
        textTransform={"uppercase"}
        fontSize={["sm", "sm", "md"]}
      >
        {category}
      </Text>
      <Text
        fontSize={["2xl", "2xl", "4xl"]}
        fontFamily={"heading"}
        textAlign={"center"}
        mb={5}
        fontWeight={500}
      >
        {question}
      </Text>
      <Flex
        py={2}
        gap={5}
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {Object.keys(options).map((option) => {
          return (
            <>
              <Option
                icon={options[option].icon}
                key={option}
                option={option}
                selected={
                  path?.[ctgr as string]
                    ? path?.[ctgr as string].at(parseInt(idx as string)) ==
                      option.toString()
                    : false
                }
              />
            </>
          );
        })}
      </Flex>
    </MotionBox>
  );
};
export default Question;
