import { UnderlineOnHoverBAC } from '../atoms/buttons/Underline'
import { Container, Center, Text, Box, Button, Stack, Flex, Divider } from '@chakra-ui/react'
const HowItWorks = () => {
    return (
        <Box py={'6rem'}>

            <Container maxWidth={'container.xl'} >

                <Text fontWeight={500} fontFamily={'heading'} fontSize={'5xl'} textAlign={'center'} >Benefits of Products</Text>

                <Flex gap={[10, 10, 10]} overflowX={['scroll', 'scroll', 'hidden']} justifyContent={'space-between'} py={20} >
                    <Element image="https://images.ctfassets.net/t9x0u6p47op0/787Uv75zGAULU4EokrwKnu/fba2aa544362a197a5f77949ab33b7b9/Find-Your-Routine.png" title="Effectiveness" discription="Take our quiz and tell us about your goals, lifestyle, and values." />
                    <Element image="https://images.ctfassets.net/t9x0u6p47op0/26e4QeSBK8OMAavxaBdui1/5bf4a7b91cfe9fb64ecd32fa093b7491/img.homepage-How2__2_-min.jpg" title="Long Lasting Protection" discription="We’ll personalize a plan backed by science made just for you." />
                    <Element image="https://images.ctfassets.net/t9x0u6p47op0/3wUb7Mz3jh5JdSbSyorHFg/256317b976c1daed9dd0b729a43bc509/Homepage_phone__1_new.jpg" title="Cost Efficient" discription="Build habits that improve your health goals by using our app." />
                </Flex>
                ``
                <Divider maxWidth={['100%', '100%', '500px']} margin={'auto'} />

                <Center flexDirection={'column'} py={10}>
                    <Text fontWeight={400} fontFamily={'heading'} fontSize={'3xl'} textAlign={'center'} >Let&apos;s get started</Text>
                    <Button px={20} py={8} fontSize={'xl'} variant="takequizsmall" mt={10} >Take the quiz </Button>

                </Center>


            </Container>



        </Box>
    )
}

export default HowItWorks





interface Props {
    image: string,
    title: string,
    discription: string,
}


const Element: React.FC<Props> = ({ image, title, discription }) => {
    const responsiveWidth = ['90vw', '372px', '372px']
    return (
        <Box width={responsiveWidth}>
            <Box borderRadius={'100%'} width={responsiveWidth} height={responsiveWidth} bgImage={image} bgSize={'cover'}></Box>
            <Text textAlign={'center'} fontSize={'  lg'} letterSpacing={4} mt={25} mb={3}>{title}</Text>
            <Text textAlign={'center'} fontSize={'2xl'} fontFamily={'heading'}>{discription}</Text>

        </Box >
    )


}



