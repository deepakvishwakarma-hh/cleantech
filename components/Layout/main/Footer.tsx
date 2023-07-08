import Link from 'next/link';
import UnderlineOnHover from '~/components/atoms/buttons/Underline';
import { BsFacebook, BsTwitter, BsInstagram, BsArrowRightShort } from "react-icons/bs";
import { Container, Grid, GridItem, Text, Input, Stack, IconButton, InputGroup, InputRightAddon, Button, SimpleGrid } from '@chakra-ui/react';

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

const cart_of = [
    { name: 'Personalize', href: '/personalize' },
    { name: 'Browse', href: '/browse' },
    { name: 'Buy in store', href: '/buy-in-store' },
    { name: 'Gift cards', href: '/gift-cards' },
    { name: 'Articles', href: '/articles' },
    { name: 'Careers', href: '/careers' },
    { name: 'Research', href: '/research' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Honesty', href: '/honesty' },
    { name: 'Quality', href: '/quality' },
    { name: 'About us', href: '/about-us' },
    { name: 'Email us', href: '/email-us' }
];

const Footer = () => {
    return (
        <Container
            bg={'#3A3E43'}
            color={'white'}
            as={Grid}
            gap={10}
            templateColumns={['1fr', '1fr', '1fr', '1fr', '2.5fr 1fr']}
            maxWidth={''}
            p={[10, 10, 100]}>
            <GridItem as={Stack} justifyContent={'space-between'}>
                <Stack maxWidth={'sm'} gap={5}>
                    <Text fontSize='xl' fontFamily={'heading'} fontWeight={300}>Subscribe and stay up-to-date on Care/of news, exclusive offers, and more.</Text>

                    <InputGroup size='md' borderBottom={'1px solid white'} py={1}>
                        <Input border={'none'} p={0} _focus={{ outline: "none" }} placeholder='Email Address' />
                        <InputRightAddon p={0} bg="none" border="none">
                            <IconButton size={'md'} rounded={'full'} bg="white" color={"black"} aria-label='facebook' icon={<BsArrowRightShort size={22} />}></IconButton>
                        </InputRightAddon>
                    </InputGroup>

                    <Stack direction={'row'} >
                        <IconButton bg="transparent" aria-label='facebook' icon={<BsFacebook size={25} />}   ></IconButton>
                        <IconButton bg="transparent" aria-label='facebook' icon={<BsTwitter size={25} />}   ></IconButton>
                        <IconButton bg="transparent" aria-label='facebook' icon={<BsInstagram size={25} />}   ></IconButton>
                    </Stack>
                </Stack>

                <Stack display={['none', 'none', 'flex']} direction={'row'} flexWrap={'wrap'} mt={20} gap={10}>
                    <Button height={'auto'} _hover={{ opacity: .8 }} as={Link} href="/" variant={'unstyled'} fontSize={'md'} fontWeight={200} >Terms Of Use</Button>
                    <Button height={'auto'} _hover={{ opacity: .8 }} as={Link} href="/" variant={'unstyled'} fontSize={'md'} fontWeight={200} >Privacy Notice</Button>
                    <Button height={'auto'} _hover={{ opacity: .8 }} as={Link} href="/" variant={'unstyled'} fontSize={'md'} fontWeight={200} >Do Not Sell My Personal Information</Button>
                    <Text fontSize={'md'} fontWeight={200}>© 2023 Care/of. All rights reserved.</Text>
                </Stack>

            </GridItem>

            <GridItem as={Stack} justifyContent={'space-between'}>

                <Grid display={['none', 'none', 'grid']} templateColumns={['1fr', '1fr', '2fr 1fr']} gap={[10, 10, 0]}>

                    <GridItem>
                        <Text fontWeight={200}>CARE/OF</Text>

                        <SimpleGrid mt={5} columns={2} spacing={3.5}>
                            {cart_of.map((link) => <UnderlineOnHover fontSize={'md'} key={link.name}>{link.name}</UnderlineOnHover>)}
                        </SimpleGrid>
                    </GridItem>

                    <GridItem>
                        <Text fontWeight={200}>CONTACT US</Text>

                        <SimpleGrid mt={5} columns={1} spacing={3.5}>
                            <UnderlineOnHover fontSize={'md'}>1 (877) 227-3631</UnderlineOnHover>
                            <UnderlineOnHover fontSize={'md'}>Email Us</UnderlineOnHover>

                        </SimpleGrid>
                    </GridItem>

                </Grid>

                <Accordion display={['block', 'block', 'none']} allowMultiple>
                    <AccordionItem border="none">
                        <h2>
                            <AccordionButton as={Stack} direction={'row'} justifyContent={'space-between'} >
                                <Text fontWeight={200}>CARE/OF</Text>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <SimpleGrid mt={5} columns={2} spacing={3.5}>
                                {cart_of.map((link) => <UnderlineOnHover fontSize={'md'} key={link.name}>{link.name}</UnderlineOnHover>)}
                            </SimpleGrid>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem border="none">
                        <h2>
                            <AccordionButton as={Stack} direction={'row'} justifyContent={'space-between'} >
                                <Text fontWeight={200}>CONTACT US</Text>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} >
                            <SimpleGrid mt={5} columns={1} spacing={3.5}>
                                <UnderlineOnHover fontSize={'md'}>1 (877) 227-3631</UnderlineOnHover>
                                <UnderlineOnHover fontSize={'md'}>Email Us</UnderlineOnHover>

                            </SimpleGrid>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <Text fontSize={'sm'} mt={[10, 10, 20]} fontWeight={200} border={"1px solid gray"} p={2}>
                    *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease.
                </Text>

                <Stack display={['flex', 'flex', 'none']} direction={'row'} flexWrap={'wrap'} mt={10} gap={10}>
                    <Button height={'auto'} _hover={{ opacity: .8 }} as={Link} href="/" variant={'unstyled'} fontSize={'md'} fontWeight={200} >Terms Of Use</Button>
                    <Button height={'auto'} _hover={{ opacity: .8 }} as={Link} href="/" variant={'unstyled'} fontSize={'md'} fontWeight={200} >Privacy Notice</Button>
                    <Button height={'auto'} _hover={{ opacity: .8 }} as={Link} href="/" variant={'unstyled'} fontSize={'md'} fontWeight={200} >Do Not Sell My Personal Information</Button>
                    <Text fontSize={'md'} fontWeight={200}>© 2023 Care/of. All rights reserved.</Text>
                </Stack>

            </GridItem>








        </Container>
    )
}

export default Footer