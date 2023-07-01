import Link from 'next/link'
import Aspect from "~/theme/aspects"
import { useRouter } from "next/router"
import Logo from "~/components/atoms/Logo"
import { FiChevronLeft } from "react-icons/fi"
import { Center, Container, Button, Text, Flex } from "@chakra-ui/react"

const Header: React.FC = () => {
    const router = useRouter()
    const responsiveHeight = [Aspect.mobile.layout.header.height, Aspect.mobile.layout.header.height, Aspect.desktop.layout.header.height]
    return (
        <>
            <Center
                top={0}
                left={0}
                width={'100%'}
                position={'absolute'}
                height={responsiveHeight}>
                <Link href="/">
                    <Logo />
                </Link>
            </Center>

            <Container
                top={0}
                as={Flex}
                maxWidth={''}
                left={0}
                width={'100%'}
                position={'absolute'}
                alignItems={'center'}
                justifyContent={'flex-end'}
                pointerEvents={'none'}
                height={responsiveHeight}>

                {/* <Button
                    display={'flex'}
                    pointerEvents={'all'}
                    // onClick={() => router.push(previous)}
                    variant={'unstyled'}>
                    <FiChevronLeft size={22} />
                    <Text ml={.5} fontWeight={400}>Back</Text>
                </Button> */}

                <Button variant="takequizsmall" py={7}>Take the quiz </Button>


            </Container>

        </>
    )
}

export default Header