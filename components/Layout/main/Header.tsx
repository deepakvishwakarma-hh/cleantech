import Aspect from "~/theme/aspects"
import Logo from "~/components/atoms/Logo"
import { FiUser, FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';
import {
    Container, Flex, Stack, Center, Button, IconButton, useMediaQuery, useDisclosure, Drawer, DrawerBody, DrawerOverlay, DrawerContent
} from "@chakra-ui/react"




import { useRef } from 'react'
const Header = () => {
    const responsiveHeight = [Aspect.mobile.layout.header.height, Aspect.mobile.layout.header.height, Aspect.desktop.layout.header.height]
    const [isDesktop] = useMediaQuery('(min-width: 800px)')

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<HTMLButtonElement>(null)

    if (isDesktop) {
        return (
            <Container height={responsiveHeight} maxWidth={''} bg="gray.100" as={Flex}>
                <Stack direction={'row'} alignItems={'center'} flex={1}>
                    <Button variant={'straight'}>Shop</Button>
                    <Button variant={'straight'}>Learn</Button>
                    <Button variant={'straight'}>Metabolism</Button>
                </Stack>

                <Center>
                    <Logo />
                </Center>
                <Stack direction={'row'} alignItems={'center'} justifyContent={"flex-end"} flex={1}>
                    <IconButton bg="transparent" aria-label='user' icon={<FiUser size={22} />} />
                    <IconButton bg="transparent" aria-label='cart' icon={<FiShoppingBag size={22} />} />
                    <Button variant="takequizsmall" ml={2}>Take the quiz </Button>
                </Stack>

            </Container>
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




