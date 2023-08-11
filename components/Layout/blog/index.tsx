interface Props {
  children: any;
}

import { Container, Box } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "../main/Footer";
const BlogsLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box>
      <Header />
      <Container mt={5} maxW={"8xl"}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default BlogsLayout;
