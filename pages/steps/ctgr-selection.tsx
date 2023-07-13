import { useState } from 'react'
import { useRouter } from 'next/router';
import Layout from "~/components/Layout/step";
import categories from "~/quiz/categories.json"
import { localstorage, useLocalStorage } from "~/lib/localstorage";
import { Button, Text, Flex, Box, Center, SimpleGrid, Grid, GridItem } from "@chakra-ui/react"

const CategorySelection = () => {
    const router = useRouter()
    const [storage] = useLocalStorage(localstorage)
    const [selected, setSelected] = useState<string[]>([])
    const category = (categories as any)[(storage as any).usage as string]

    const onClick = (title: string) => {
        if (selected.includes(title)) {
            setSelected(prev => prev.filter(item => item !== title));
        } else {
            setSelected(prev => [...prev, title]);
        }
    }

    return (
        <Layout previous="usage">
            <Box bg="#FEF4EC" width={'100%'} minH={'100vh'} >
                <Center pt={'10rem'}>
                    <Flex flexDir={'column'} alignItems={'center'} gap={2} maxW={'1500px'}>
                        <Text px={[2, 2, 1, 0]} fontSize={['2xl', '2xl', '3xl', "4xl"]} fontFamily={'heading'} textAlign={'center'} mb={5} >Select an Application Category</Text>

                        <SimpleGrid columns={[1, 1, 2, 4]} gap={5} px={5}>
                            {category.map((title: string, index: number) => <Boxes key={index} title={title} selected={selected.includes(title)} onClick={() => onClick(title)} />)}
                        </SimpleGrid>



                        <Button isDisabled={!selected.length} onClick={() => { router.push('question') }} my={'3.5em'} mx={'auto'} px={20} py={8} fontSize={'xl'} variant="takequizsmall">Next </Button>

                    </Flex>
                </Center>
            </Box>
        </Layout>
    )
}

export default CategorySelection


const Boxes = ({ title, onClick, selected }: any) => {
    return (
        <Grid
            rounded={'full'}
            onClick={onClick}

            templateColumns={'30px auto'}
            gap={2}

            alignItems={'center'}

            bg={'white'}
            p={2}>


            <GridItem as={Center}>
                <Box width={5} height={5} background={!selected ? 'gray.100' : 'gray.900'} rounded={'full'}></Box>
            </GridItem>

            <GridItem>
                <Text textTransform={'capitalize'} fontSize={'lg'} fontFamily={'body'} pr={1}>{title}</Text>
            </GridItem>


            {/* <Text fontSize={'md'} textAlign={['left', 'left', 'center']} fontFamily={'heading'}>This is basic discription.</Text> */}

        </Grid >
    )
}