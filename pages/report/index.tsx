import { localstorage } from "~/hooks/useQuiz";
import Report from "~/components/molecules/report";
import { useSessionStorage } from "@mantine/hooks";
import CurrentDate from "~/components/molecules/report/CurrentDate";
import { Box, Text, Container, Alert, AlertIcon } from "@chakra-ui/react";
const ReportPage = () => {
  const [{ isCompleted }]: any = useSessionStorage(localstorage);
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
          (Incoprating an income and expendiure account)
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