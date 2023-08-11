import ASPECT from "~/theme/aspects";
import { Box, Center, Container, Button } from "@chakra-ui/react";
const Header = () => {
  const responsiveHeight = [
    ASPECT.mobile.layout.header.height,
    ASPECT.mobile.layout.header.height,
    ASPECT.desktop.layout.header.height,
  ];

  return (
    <Box
      height={responsiveHeight}
      background={"white"}
      borderBottom={".5px solid whitesmoke"}
    >
      <Container maxW={"8xl"} as={Center} height={"full"}>
        <Button
          size={"md"}
          display={"flex"}
          fontWeight={500}
          fontSize={"xl"}
          variant={"unstyled"}
        >
          CTS
        </Button>
      </Container>
    </Box>
  );
};

export default Header;
