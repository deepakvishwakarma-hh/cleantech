import { localstorage } from "~/hooks/useQuiz";
import Report from "~/components/molecules/report";
import { useSessionStorage } from "@mantine/hooks";
import CurrentDate from "~/components/molecules/report/CurrentDate";
import { Box, Text, Container, Alert, AlertIcon } from "@chakra-ui/react";
import { useSuggestedProducts } from "~/hooks/useSuggestedProducts";
const ReportPage = () => {
  const [{ isCompleted }]: any = useSessionStorage(localstorage);
  const { Ml, requiredMl } = useSuggestedProducts();
  console.log({ Ml, requiredMl });
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
          (lorem ipsum dolor sit amet, consectet)
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
