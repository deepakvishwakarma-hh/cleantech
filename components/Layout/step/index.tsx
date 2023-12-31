interface Props {
  previous: string;
  children: any;
}

interface HeaderProps {
  previous: string;
}

import Link from "next/link";
import Aspect from "~/theme/aspects";
import { useRouter } from "next/router";
import Logo from "~/components/atoms/Logo";
import { FiChevronLeft } from "react-icons/fi";
import { Text, Flex, Center, Container, Button } from "@chakra-ui/react";

const Layout: React.FC<Props> = ({ previous, children }) => {
  return (
    <>
      <Header previous={previous} />
      {children}
    </>
  );
};

export default Layout;

const Header: React.FC<HeaderProps> = ({ previous }) => {
  const router = useRouter();
  const responsiveHeight = [
    Aspect.mobile.layout.header.height,
    Aspect.mobile.layout.header.height,
    Aspect.desktop.layout.header.height,
  ];
  return (
    <>
      <Center
        top={0}
        left={0}
        zIndex={10}
        width={"100%"}
        position={"absolute"}
        pointerEvents={"none"}
        height={responsiveHeight}
      >
        <Link style={{ pointerEvents: "all" }} href="/">
          <Logo />
        </Link>
      </Center>

      <Container
        top={0}
        left={0}
        as={Flex}
        zIndex={9}
        maxWidth={""}
        width={"100%"}
        position={"absolute"}
        alignItems={"center"}
        pointerEvents={"none"}
        height={responsiveHeight}
      >
        <Button
          display={["none", "none", "flex"]}
          backgroundColor={"white"}
          pointerEvents={"all"}
          onClick={() => router.push(previous)}
          variant={"unstyled"}
          background={"lightblue"}
          px={5}
        >
          <FiChevronLeft size={22} />
          <Text ml={0.5} fontWeight={400}>
            Back
          </Text>
        </Button>
      </Container>
    </>
  );
};
