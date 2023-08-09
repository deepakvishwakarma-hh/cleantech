import { useState } from "react";
import useQuiz from "~/hooks/useQuiz";
import getQuiz from "~/lib/quiz-functions";
import { Box, Center } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import Layout from "~/components/Layout/question";
import Question from "~/components/molecules/question";
import QuizCompletion from "~/components/atoms/QuizCompletion";
import Introduction from "~/components/molecules/category-introduction";

const QuestionPage = () => {
  const quiz = useQuiz();
  const {
    index,
    quesionLen,
    isCompleted,
    description,
    category_name,
    data: { question, options },
  } = getQuiz(quiz);

  const [introduction, setIntroduction] = useState(true);

  const onBack = () => {
    alert("this is not working");
  };

  return (
    <>
      <Layout previous={onBack}>
        <Box bg="#FEF4EC" width={"100%"} height={"100vh"} overflowY={"scroll"}>
          <Center flexDir={"column"}>
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
                  lastIndex={quesionLen}
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

{
  /* {JSON.stringify(
            quiz.storage.select.filter(
              (category_name: string) =>
                quiz.storage[category_name]?.length !==
                QUIZ.filter(
                  (category_data) => category_data.name == category_name
                ).at(0)?.question?.length
            ).length == 0
          )} */
}

{
  /* <Box
              maxW={"300px"}
              p={2}
              bg={"white"}
              rounded={"md"}
              position={"fixed"}
              bottom={5}
              right={5}
            >
              <Text fontFamily={"heading"}>Development</Text>
              <hr />
              <Text mt={2}>
                <b>Completed</b> : {JSON.stringify(isCompleted)}
                <b>Introduced</b> : {JSON.stringify(introduction)}
              </Text>
              <Text>
                <b>Question</b> : {JSON.stringify(question)}
                <b>Options & Points</b> : {JSON.stringify(options)}
              </Text>
              <Text>
                <b>Question Index</b> : {JSON.stringify(index)}/{quesionLen}
              </Text>
              <Text></Text>
              <Button
                color={"red.900"}
                size={"sm"}
                bg={"red.200"}
                textTransform={"capitalize"}
                onClick={() => {
                  quiz.clean();
                }}
              >
                clear localstorage
              </Button>
            </Box> */
}
