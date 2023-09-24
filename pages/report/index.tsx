import { localstorage } from "~/hooks/useQuiz";
import { localstorage as lc } from "~/lib/localstorage";
import Report from "~/components/molecules/report";
import { useLocalStorage, useSessionStorage } from "@mantine/hooks";
import CurrentDate from "~/components/molecules/report/CurrentDate";
import { Box, Text, Container, Alert, AlertIcon } from "@chakra-ui/react";
import { useSuggestedProducts } from "~/hooks/useSuggestedProducts";
import { usage__data } from "pages/steps/usage";
const ReportPage = () => {
  const [{ isCompleted }]: any = useSessionStorage(localstorage);
  const [data, _] = useLocalStorage<any>(lc);
  const title = usage__data.find((dt) => dt.name === data?.usage)?.title;

  if (!isCompleted) {
    return (
      <Alert status="error">
        <AlertIcon />
        Your report has not been generated. You may not have completed the quiz.
      </Alert>
    );
  }

  return (
    <Box bg={"#E6EBEF"} py={5}>
      <Container maxW={"container.xl"}>
        <Text
          fontSize={"4xl"}
          fontWeight={500}
          color={"blue.900"}
          fontFamily={"heading"}
          textTransform={"uppercase"}
        >
          Report Analysis <br /> based on your activities
        </Text>
        <Text color={"blue.900"} fontSize={"2xl"} fontWeight={400}>
          {title}
        </Text>
        <Text
          mt={10}
          mb={5}
          fontSize={"xl"}
          fontWeight={400}
          color={"blue.900"}
        >
          <CurrentDate />
        </Text>
        <Report />
      </Container>
    </Box>
  );
};

export default ReportPage;
