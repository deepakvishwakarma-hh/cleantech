import { useState } from "react";
import useQuiz from "~/hooks/useQuiz";
import getQuiz from "~/lib/quiz-functions";
import Layout from "~/components/Layout/question";
import { AnimatePresence } from "framer-motion";
import { useLocalStorage } from "@mantine/hooks";
import Question from "~/components/molecules/question";
import { Button, Text, Box, Center } from "@chakra-ui/react";
import Introduction from "~/components/molecules/category-introduction";

import { localstorage } from "~/lib/localstorage";

const QuestionPage = () => {
  const quiz = useQuiz();
  const [introduction, setIntroduction] = useState(true);
  const {
    quesionLen,
    isCompleted,
    index,
    category_name,
    description,
    data: { question, options },
  } = getQuiz(quiz);

  const [storage2, setStorage2]: any = useLocalStorage(localstorage);

  const onBack = () => {
    alert("this is not working");
  };

  return (
    <>
      <Layout previous={onBack}>
        <Box bg="#FEF4EC" width={"100%"} height={"100vh"} overflowY={"scroll"}>
          <Center flexDir={"column"}>
            {/* <Box maxW={'300px'} p={2} bg={'white'} rounded={'md'} position={'fixed'} bottom={5} right={5}>
                            <Text fontFamily={'heading'}>Development</Text>
                            <hr />
                            <Text mt={2}><b>Completed</b> : {JSON.stringify(isCompleted)}</Text>
                            <Text><b>Options & Points</b> : {JSON.stringify(options)}</Text>
                            <Text><b>Question Index</b> : {JSON.stringify(index + 1)}/{quesionLen}</Text>
                            <Text><b>Storage</b> : {JSON.stringify(storage)}</Text>
                            <Button color={'red.900'} size={'sm'} bg={'red.200'} textTransform={'capitalize'} onClick={() => { quiz.clean() }}>clear localstorage</Button>
                        </Box> */}

            {isCompleted && <QuizCompletion />}

            {!isCompleted && introduction && index == 0 && (
              <Introduction
                description={description}
                title={category_name}
                handleNext={() => {
                  setIntroduction(false);
                }}
              />
            )}

            <AnimatePresence>
              {!introduction && !isCompleted && (
                <Question
                  index={index}
                  setIntroduction={setIntroduction}
                  category={category_name}
                  question={question}
                  options={options as any}
                />
              )}
            </AnimatePresence>
          </Center>
        </Box>
      </Layout>
    </>
  );
};
export default QuestionPage;

import { useRouter } from "next/router";
// this is just for testing purpose
const QuizCompletion = () => {
  const router = useRouter();

  return (
    <Box pt={"10rem"}>
      <Text fontSize={"4xl"} fontFamily={"heading"} textAlign={"center"} mb={5}>
        Congratulation!, Quiz Completed.
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
