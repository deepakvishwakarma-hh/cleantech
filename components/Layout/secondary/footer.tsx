import { Container, Text, Flex } from '@chakra-ui/react'
import Logo from '~/components/atoms/Logo'
const Footer = () => {
    return (
        <Container
            bg={'#3A3E43'}
            color={'white'}
            maxWidth={''}
            as={Flex}
            alignItems={'center'}
            justifyContent={'space-between'}
            p={[10, 10, 100]}
            border={'2px solid grey'}>

            <Logo />

            <Text>© 2023 Care/of.All rights reserved.</Text>

        </Container>
    )
}
export default Footer 