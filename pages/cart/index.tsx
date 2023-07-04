import { Container, Grid, GridItem, Box, Button, Center, Flex, Text } from "@chakra-ui/react"

import { FiX } from 'react-icons/fi'

const Cart = () => {
    return (
        <Container as={Grid} templateColumns={'1fr 1fr'} maxW={''} >



            <GridItem px={'5rem'} pt={'10rem'} background={'#FBF5F1'} >

                <Flex w={'full'} alignItems={'center '} justifyContent={'space-between'} borderBottom={'1px solid black'} pb={5} >
                    <Text fontSize={'4xl'} fontFamily={'heading'} fontWeight={500}>Your Plan</Text>


                    <Button px={10} py={8} fontSize={'md'} variant="takequizsmall" ml={2}>Browse all </Button>


                </Flex>

                <Flex direction={'column'}>



                    <Item />


                </Flex>





            </GridItem>



            <GridItem></GridItem>












        </Container>
    )
}

export default Cart


const Item = () => {
    return (
        <Grid templateColumns={'70px auto 100px'} alignItems={'center'} my={3} gap={5} >


            <img style={{ width: '70px', height: "70px", borderRadius: "100%" }} src="https://images.ctfassets.net/t9x0u6p47op0/5HdlPRMA1CLWhG364xFE06/9efe9862b7fe029681ae9987cd2aacfa/tile_multivitaminreformulation.jpg" alt="image" />



            <Box>
                <Text fontSize={'xl'}> Multivitamin</Text>
                <Text fontSize={'sm'}>500IU Vitamin D3</Text>

            </Box>


            <Flex alignItems={'center'} justifyContent={'space-between'} >
                <Text fontSize={'xl'}>$6.50</Text>
                <FiX size={20} />

            </Flex >








        </Grid >
    )
}