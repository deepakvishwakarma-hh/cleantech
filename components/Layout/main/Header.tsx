import {
  Container,
  Flex,
  Stack,
  Center,
  Button,
  IconButton,
  useMediaQuery,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";
import ASPECT from "~/theme/aspects";
import Logo from "~/components/atoms/Logo";
import { useSessionStorage } from "@mantine/hooks";
import { Alert, AlertIcon } from "@chakra-ui/react";
import useQuiz, { localstorage } from "~/hooks/useQuiz";
import { FiMenu, FiX, FiShoppingBag } from "react-icons/fi";

// responsive heights
const NavResponsiveHeight = [
  ASPECT.mobile.layout.header.height,
  ASPECT.mobile.layout.header.height,
  ASPECT.desktop.layout.header.height,
];

const Header = () => {
  const { clean } = useQuiz();
  const btnRef = useRef<HTMLButtonElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDesktop] = useMediaQuery("(min-width: 800px)");
  const [{ isCompleted }]: any = useSessionStorage(localstorage);

  if (isDesktop) {
    return (
      <Box position={"fixed"} top={0} w={"100%"}>
        {isCompleted && (
          <Alert status="success" as={Center}>
            <AlertIcon />
            Congratulation you have completed quiz. You can reset by clicking
            reset button
            <Button
              onClick={clean}
              variant={"outline"}
              ml={2}
              size={"sm"}
              tabIndex={0}
              fontWeight={400}
              color={"black"}
              fontSize={"sm"}
              rounded={"full"}
            >
              Reset Quiz
            </Button>
          </Alert>
        )}

        <Container
          as={Flex}
          maxWidth={""}
          background={"white"}
          height={NavResponsiveHeight}
        >
          <Stack direction={"row"} alignItems={"center"} flex={1}>
            <Button as={Link} href="/" variant={"straight"}>
              <Logo />
            </Button>
          </Stack>

          <Center>{/* <Logo /> */}</Center>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"flex-end"}
            flex={1}
          >
            <Link passHref href={"/products"}>
              <Button bg="transparent" aria-label="user">
                Shop
              </Button>
            </Link>

            <Link passHref href={"/cart"}>
              <IconButton
                bg="transparent"
                aria-label="cart"
                icon={<FiShoppingBag size={22} />}
              />
            </Link>

            <Link passHref href={"/steps/quiz"}>
              <Button variant="takequizsmall" ml={2}>
                Take the quiz{" "}
              </Button>
            </Link>
          </Stack>
        </Container>
      </Box>
    );
  }
  return (
    <>
      <Container
        height={NavResponsiveHeight}
        maxWidth={""}
        bg="gray.100"
        as={Stack}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <IconButton
          onClick={onOpen}
          ref={btnRef}
          bg="transparent"
          aria-label="cart"
          icon={<FiMenu size={22} />}
        />

        <IconButton
          bg="transparent"
          aria-label="cart"
          icon={<FiShoppingBag size={22} />}
        />
      </Container>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"full"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Container
            as={Stack}
            direction={"row"}
            maxWidth={""}
            height={NavResponsiveHeight}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <IconButton
              bg="transparent"
              onClick={onClose}
              aria-label="user"
              icon={<FiX size={22} />}
            />
            <IconButton
              as={Link}
              href={"/cart"}
              bg="transparent"
              aria-label="user"
              icon={<FiShoppingBag size={22} />}
            />
          </Container>

          <DrawerBody>
            <Stack direction={"column"}>
              <Button
                as={Link}
                href={"/"}
                justifyContent={"start"}
                variant={"straight"}
              >
                Home
              </Button>
              <Button
                as={Link}
                href={"/products"}
                justifyContent={"start"}
                variant={"straight"}
              >
                Shop
              </Button>
              <Button
                as={Link}
                href={"/cart"}
                justifyContent={"start"}
                variant={"straight"}
              >
                Cart
              </Button>
            </Stack>
            <Button
              as={Link}
              href={"/steps/quiz"}
              variant="takequizsmall"
              my={5}
            >
              Take the quiz
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default Header;
