import { find } from "~/lib/functions";
import { useRouter } from "next/router";
import { Box, Center } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import Layout from "~/components/Layout/question";
import Question from "~/components/molecules/question";
import QuizCompletion from "~/components/atoms/QuizCompletion";
import Introduction from "~/components/molecules/category-introduction";

const QuestionPage = () => {
  const router = useRouter();
  const { ctgr, itd, idx, cpd } = router.query;
  // read properties using category name;
  const { description, question } = find(
    (ctgr as string) ?? "no-rinse surface disinfection"
  );

  // router back
  const onBackHandler = () => {
    router.back();
  };

  // set introduction visiblity
  const introductionVisiblityHandler = () => {
    router.push({
      pathname: router.pathname,
      query: {
        cpd, // default
        ctgr, // default
        idx, // default
        itd: false,
      },
    });
  };

  return (
    <>
      <Layout previous={onBackHandler}>
        <Box bg="#FEF4EC" width={"100%"} height={"100vh"} overflowY={"scroll"}>
          <Center flexDir={"column"}>
            {cpd == "true" && <QuizCompletion />}
            {itd == "true" && cpd == "false" && (
              <Introduction
                description={description as string}
                title={ctgr as string}
                handleNext={introductionVisiblityHandler}
              />
            )}

            {cpd == "false" && itd == "false" && (
              <Box>
                <AnimatePresence>
                  <Question
                    category={ctgr as string}
                    question={
                      question.at(parseInt(idx as string))?.name as string
                    }
                    options={
                      (question.at(parseInt(idx as string)) as any)
                        ?.options as any
                    }
                  />
                </AnimatePresence>
              </Box>
            )}
          </Center>
        </Box>
      </Layout>
    </>
  );
};
export default QuestionPage;
