import Aspect from "~/theme/aspects"
import Logo from "~/components/atoms/Logo"
import { FiUser, FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';
import {
    Container, Flex, Stack, Center, Button, IconButton, useMediaQuery, useDisclosure, Drawer, DrawerBody, DrawerOverlay, DrawerContent, Box
} from "@chakra-ui/react"


import { useScroll, useTransform, useMotionValueEvent, motion, useAnimationControls, cubicBezier } from 'framer-motion'
import { useState } from 'react'

import Link from "next/link";

import { useRef } from 'react'
import { Linden_Hill } from "next/font/google";
const Header = () => {

    const responsiveHeight = [Aspect.mobile.layout.header.height, Aspect.mobile.layout.header.height, Aspect.desktop.layout.header.height]
    const [isDesktop] = useMediaQuery('(min-width: 800px)')

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<HTMLButtonElement>(null)


    // This Animation is not optimized for production

    const MotionBox = motion(Box)
    const { scrollY } = useScroll()
    const MotionContainer = motion(Container)
    const control = useAnimationControls()
    const control2 = useAnimationControls()

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 0) {
            control.start({ opacity: 1 })
            control2.start({ color: 'black' })
        } else {
            control.start({ opacity: 0 })
            control2.start({ color: 'white' })
        }
    })

    if (isDesktop) {
        return (
            <>
                <MotionBox
                    top={0}
                    width={'100%'}
                    animate={control}
                    position={'fixed'}
                    background={'white'}
                    height={responsiveHeight}
                    initial={{ opacity: 0 }}
                    transition={{ duration: .5 }}></MotionBox>

                <MotionContainer
                    onHoverStart={() => {
                        control.start({ opacity: 1 })
                        control2.start({ color: 'black' })
                    }}

                    onHoverEnd={() => {
                        control.start({ opacity: 0 })
                        control2.start({ color: 'white' })
                    }}
                    initial={{ color: 'white' }}
                    animate={control2}
                    transition={{ duration: .5 }}
                    as={Flex}
                    maxWidth={''}
                    height={responsiveHeight}
                    position={'fixed'}
                    top={0}
                >
                    <Stack direction={'row'} alignItems={'center'} flex={1}>
                        <Button variant={'straight'}>Shop</Button>
                        <Button variant={'straight'}>Learn</Button>
                        <Button variant={'straight'}>Metabolism</Button>
                    </Stack>

                    <Center>
                        {/* <Logo /> */}
                    </Center>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={"flex-end"} flex={1}>
                        <IconButton bg="transparent" aria-label='user' icon={<FiUser size={22} />} />
                        <IconButton bg="transparent" aria-label='cart' icon={<FiShoppingBag size={22} />} />

                        <Link passHref href={'/survey?question=welcome-quiz'} >
                            <Button variant="takequizsmall" ml={2}>Take the quiz </Button>
                        </Link>
                    </Stack>

                </MotionContainer >

            </>
        )
    }
    return (
        <>
            <Container height={responsiveHeight} maxWidth={''} bg="gray.100" as={Stack}
                direction={'row'} alignItems={'center'} justifyContent={"space-between"}
            >

                <IconButton onClick={onOpen} ref={btnRef} bg="transparent" aria-label='cart' icon={<FiMenu size={22} />} />

                <IconButton bg="transparent" aria-label='cart' icon={<FiShoppingBag size={22} />} />

            </Container>



            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={'full'}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <Container as={Stack} direction={'row'} maxWidth={''} height={responsiveHeight} alignItems={'center'} justifyContent={"space-between"}>
                        <IconButton bg="transparent" onClick={onClose} aria-label='user' icon={<FiX size={22} />} />
                        <IconButton bg="transparent" aria-label='user' icon={<FiUser size={22} />} />
                    </Container >

                    <DrawerBody>
                        <Stack direction={'column'} >
                            <Button justifyContent={'start'} variant={'straight'}>Shop</Button>
                            <Button justifyContent={'start'} variant={'straight'}>Learn</Button>
                            <Button justifyContent={'start'} variant={'straight'}>Metabolism</Button>

                        </Stack>
                        <Button variant="takequizsmall" my={5}>Take the quiz </Button>
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    )
}
export default Header




