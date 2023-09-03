import { Th } from "@chakra-ui/react";

const TableHead = ({ children }: any) => (
  <Th
    px={1}
    pb={2}
    fontSize={"md"}
    fontWeight={500}
    letterSpacing={0}
    color={"blue.800"}
    fontFamily={"body"}
    textTransform={"capitalize"}
  >
    {children}
  </Th>
);

export default TableHead;
