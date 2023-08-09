import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Center,
} from "@chakra-ui/react";

import { UnderlineOnHoverBAC as Underline } from "../buttons/Underline";

const WhyWeAsk = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        mt={5}
        black
        as={Underline}
        fontWeight={400}
        onClick={onOpen}
        variant={"unstyled"}
      >
        Why we ask
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody
            py={"5rem"}
            bgPosition={"bottom"}
            bgRepeat={"no-repeat"}
            backgroundImage={"/svgs/curve.svg"}
          >
            <Text
              fontSize={"2xl"}
              fontWeight={500}
              fontFamily={"heading"}
              textAlign={"center"}
              mb={5}
            >
              Why we ask?
            </Text>
            <Text textAlign={"center"} px={10} lineHeight={1.8}>
              Depending on your stage of life, you may require different
              nutrients in your day-to-day diet. We’ll use your response to
              determine the vitamins and minerals that are right for your unique
              needs. We do not recommend supplements for those younger than 18.
            </Text>
            <Center>
              <Button
                mt={5}
                black
                as={Underline}
                fontWeight={400}
                onClick={onClose}
                variant={"unstyled"}
              >
                Got it
              </Button>
            </Center>
          </ModalBody>
          {/* <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default WhyWeAsk;
