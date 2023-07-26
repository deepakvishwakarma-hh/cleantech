
import { Container, Text, Button, Box, SimpleGrid } from "@chakra-ui/react"


import { HiOutlineArrowLongRight } from 'react-icons/hi2'

function RecommendationHero() {
    return (
        <Box bg={'#F9F1EB'} >

            <Container maxWidth={''} px={['10px', '10px', '10px', '2rem', '10rem']}>


                <SimpleGrid columns={[1, 1, 1, 2]} gap={'10rem'} py={'10rem'}>

                    <Box>

                        <Text letterSpacing={5} fontWeight={400} textTransform={'uppercase'}>RECOMMENDATION</Text>
                        <Text py={5} fontSize={'6xl'} fontFamily={'heading'} >Made for Deepak</Text>
                        <Text fontSize={'xl'} fontFamily={'heading'}>Your recommendation is based on your goals to focus on Eyes. We referenced hundreds of clinical studies to ensure you’re getting just what your body needs.</Text>




                        <Button display={'flex'} mt={5} gap={2} fontWeight={400} fontFamily={'body'} variant={'unstyled'}>Lets Go <HiOutlineArrowLongRight size={30} /> </Button>

                    </Box>

                    <Box>

                        <img src="https://images.unsplash.com/photo-1603248322878-f0e0ac378588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />

                    </Box>



                </SimpleGrid>




            </Container>





        </Box >
    )
}

export default RecommendationHero