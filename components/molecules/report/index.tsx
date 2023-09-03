import TableHead from "./TableHead";
import useReport from "~/hooks/useReportHook";
import { Tr, Td, Box, Text, Table, Thead, Tbody } from "@chakra-ui/react";

const Report = () => {
  const report = useReport();
  return (
    <Box>
      {report.map(({ name, questions }) => (
        <Box key={name} bg="white" p={5} mb={5} rounded={"md"}>
          <Text
            mb={3}
            fontSize={"xl"}
            color={"blue.500"}
            _firstLetter={{
              textTransform: "capitalize",
            }}
          >
            {name}
          </Text>
          <Box>
            <Table variant={"striped"} size={"sm"}>
              <Thead>
                <Tr>
                  <TableHead>Questions</TableHead>
                  <TableHead>Answers</TableHead>
                  <TableHead>Points</TableHead>
                </Tr>
              </Thead>
              <Tbody>
                {questions.map((questionData) => (
                  <Tr key={questionData.name}>
                    <Td>{questionData.name}</Td>
                    <Td>{questionData.answer}</Td>
                    <Td isNumeric>{questionData.option}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Report;
