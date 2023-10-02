interface Props {
  previous: () => void;
  children: any;
}

interface HeaderProps {
  previous: () => void;
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
        zIndex={999}
        left={0}
        width={"100%"}
        position={"absolute"}
        height={responsiveHeight}
      >
        <Link href="/">
          <Logo />
        </Link>
      </Center>

      <Container
        top={0}
        zIndex={999}
        as={Flex}
        maxWidth={""}
        left={0}
        width={"100%"}
        position={"absolute"}
        alignItems={"center"}
        pointerEvents={"none"}
        height={responsiveHeight}
      >
        <Button
          px={5}
          display={"flex"}
          onClick={previous}
          background={"white"}
          pointerEvents={"all"}
          variant={"unstyled"}
          backgroundColor={"white"}
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
