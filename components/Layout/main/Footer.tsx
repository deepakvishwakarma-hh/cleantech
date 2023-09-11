import Link from "next/link";
import UnderlineOnHover from "~/components/atoms/buttons/Underline";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsArrowRightShort,
} from "react-icons/bs";
import {
  Container,
  Grid,
  GridItem,
  Text,
  Input,
  Stack,
  IconButton,
  InputGroup,
  InputRightAddon,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import SubscriptionForm from "~/components/molecules/subscriptionForm";

const cart_of = [
  { name: "Contact Us", href: "https://customcleansolutions.com/contact-us" },
  {
    name: "Pricing & Payment",
    href: "https://customcleansolutions.com/pricing-payment-options/",
  },
  {
    name: "News & Articles",
    href: "https://customcleansolutions.com/our-articles/",
  },
  { name: "FAQ", href: "https://customcleansolutions.com/our-articles/" },
  {
    name: "Returns/ Refunds",
    href: "https://customcleansolutions.com/returns-refunds/",
  },
  {
    name: "Affiliate program",
    href: "https://customcleansolutions.com/affiliate-program/",
  },
  {
    name: "Affiliate Login",
    href: "https://customcleansolutions.com/affiliate-area/",
  },
  {
    name: "Affiliate Program TOS",
    href: "https://customcleansolutions.com/affiliate-program-tos/",
  },
  { name: "More About Us", href: "https://customcleansolutions.com/about-us/" },
  {
    name: "Terms & Conditions",
    href: "https://customcleansolutions.com/terms-conditions/",
  },
  {
    name: "Service Agreement",
    href: "https://customcleansolutions.com/service-agreement/",
  },
  {
    name: "Reference And Cite",
    href: "https://customcleansolutions.com/reference-and-cite/",
  },
  {
    name: "Certifications",
    href: "https://customcleansolutions.com/certifications/",
  },
  {
    name: "Privacy Policy",
    href: "https://customcleansolutions.com/certifications/",
  },
  {
    name: "Take The Quiz",
    href: "https://customcleansolutions.com/take-the-quiz/",
  },
  {
    name: "CLO2 Calculator",
    href: "https://customcleansolutions.com/clo2-calculator/",
  },
  {
    name: "Services Calculator",
    href: "https://customcleansolutions.com/services-calculator/",
  },
  {
    name: "Mixing Instructions",
    href: "https://customcleansolutions.com/mixing-instructions/",
  },
];

const Footer = () => {
  const clear = () => {
    localStorage.clear();
  };

  return (
    <Container
      bg={"#3A3E43"}
      color={"white"}
      as={Grid}
      gap={10}
      templateColumns={["1fr", "1fr", "1fr", "1fr", "1fr 1fr", "2fr 1fr"]}
      maxWidth={""}
      p={[10, 10, 100]}
    >
      <GridItem as={Stack} justifyContent={"space-between"}>
        <Stack maxWidth={"sm"} gap={5}>
          <Text fontSize="xl" fontFamily={"heading"} fontWeight={300}>
            Subscribe and stay up-to-date on Care/of news, exclusive offers, and
            more.
          </Text>
          <SubscriptionForm />

          <Stack direction={"row"}>
            <IconButton
              onClick={clear}
              bg="transparent"
              aria-label="facebook"
              icon={<BsFacebook size={25} />}
            ></IconButton>
            <IconButton
              bg="transparent"
              aria-label="facebook"
              icon={<BsTwitter size={25} />}
            ></IconButton>
            <IconButton
              bg="transparent"
              aria-label="facebook"
              icon={<BsInstagram size={25} />}
            ></IconButton>
            S
          </Stack>
        </Stack>

        <Stack
          display={["none", "none", "flex"]}
          direction={"row"}
          flexWrap={"wrap"}
          mt={20}
          gap={10}
        >
          <Button
            height={"auto"}
            _hover={{ opacity: 0.8 }}
            as={Link}
            href="/"
            variant={"unstyled"}
            fontSize={"md"}
            fontWeight={200}
          >
            Terms Of Use
          </Button>
          <Button
            height={"auto"}
            _hover={{ opacity: 0.8 }}
            as={Link}
            href="/"
            variant={"unstyled"}
            fontSize={"md"}
            fontWeight={200}
          >
            Privacy Notice
          </Button>
          <Button
            height={"auto"}
            _hover={{ opacity: 0.8 }}
            as={Link}
            href="/"
            variant={"unstyled"}
            fontSize={"md"}
            fontWeight={200}
          >
            Do Not Sell My Personal Information
          </Button>
          <Text fontSize={"md"} fontWeight={200}>
            © 2023 Customcleantechsolutions. All rights reserved.
          </Text>
        </Stack>
      </GridItem>

      <GridItem as={Stack} justifyContent={"space-between"}>
        <Grid
          display={["none", "none", "grid"]}
          templateColumns={["1fr", "1fr", "2fr 1fr"]}
          gap={[10, 10, 0]}
        >
          <GridItem>
            <Text fontWeight={200}>CUSTOM CLEANTECH SOLUTIONS</Text>

            <SimpleGrid mt={5} columns={2} spacing={3.5}>
              {cart_of.map((link) => (
                <Link href={link.href} key={link.name}>
                  <UnderlineOnHover fontSize={"md"}>
                    {link.name}
                  </UnderlineOnHover>
                </Link>
              ))}
            </SimpleGrid>
          </GridItem>

          <GridItem>
            <Text fontWeight={200}>CONTACT US</Text>

            <SimpleGrid mt={5} columns={1} spacing={3.5}>
              <UnderlineOnHover fontSize={"md"}>
                1 (877) 227-3631
              </UnderlineOnHover>
              <UnderlineOnHover fontSize={"md"}>Email Us</UnderlineOnHover>
            </SimpleGrid>
          </GridItem>
        </Grid>

        <Accordion display={["block", "block", "none"]} allowMultiple>
          <AccordionItem border="none">
            <h2>
              <AccordionButton
                as={Stack}
                direction={"row"}
                justifyContent={"space-between"}
              >
                <Text fontWeight={200}>CARE/OF</Text>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleGrid mt={5} columns={2} spacing={3.5}>
                {cart_of.map((link) => (
                  <UnderlineOnHover fontSize={"md"} key={link.name}>
                    {link.name}
                  </UnderlineOnHover>
                ))}
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border="none">
            <h2>
              <AccordionButton
                as={Stack}
                direction={"row"}
                justifyContent={"space-between"}
              >
                <Text fontWeight={200}>CONTACT US</Text>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleGrid mt={5} columns={1} spacing={3.5}>
                <UnderlineOnHover fontSize={"md"}>
                  1 (877) 227-3631
                </UnderlineOnHover>
                <UnderlineOnHover fontSize={"md"}>Email Us</UnderlineOnHover>
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Text
          fontSize={"sm"}
          mt={[10, 10, 20]}
          fontWeight={200}
          border={"1px solid gray"}
          p={2}
        >
          *These statements have not been evaluated by the Food and Drug
          Administration. This product is not intended to diagnose, treat, cure
          or prevent any disease.
        </Text>

        <Stack
          display={["flex", "flex", "none"]}
          direction={"row"}
          flexWrap={"wrap"}
          mt={10}
          gap={10}
        >
          <Button
            height={"auto"}
            _hover={{ opacity: 0.8 }}
            as={Link}
            href="https://customcleansolutions.com/terms-conditions/"
            variant={"unstyled"}
            fontSize={"md"}
            fontWeight={200}
          >
            Terms Of Use
          </Button>
          <Button
            height={"auto"}
            _hover={{ opacity: 0.8 }}
            as={Link}
            href="https://customcleansolutions.com/privacy-policy/"
            variant={"unstyled"}
            fontSize={"md"}
            fontWeight={200}
          >
            Privacy Notice
          </Button>
          <Button
            height={"auto"}
            _hover={{ opacity: 0.8 }}
            as={Link}
            href="/"
            variant={"unstyled"}
            fontSize={"md"}
            fontWeight={200}
          >
            Do Not Sell My Personal Information
          </Button>
          <Text fontSize={"md"} fontWeight={200}>
            © 2023 Care/of. All rights reserved.
          </Text>
        </Stack>
      </GridItem>
    </Container>
  );
};

export default Footer;
