interface Props {
  children: any;
}

import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};
export default Layout;
