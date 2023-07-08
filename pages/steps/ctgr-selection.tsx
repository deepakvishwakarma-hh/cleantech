import { useState } from 'react'
import { useRouter } from 'next/router';
import Layout from "~/components/Layout/step";
import categories from "~/quiz/categories.json"
import { localstorage, useLocalStorage } from "~/lib/localstorage";
import { Button, Text, Flex, Box, Center, SimpleGrid } from "@chakra-ui/react"

const CategorySelection = () => {
    const router = useRouter()
    const [storage] = useLocalStorage(localstorage)
    const [selected, setSelected] = useState([0])
    const category = (categories as any)[(storage as any).usage as string]


    const onClick = (index: number) => {
        if (selected.includes(index)) {
            setSelected(prev => prev.filter(item => item !== index));
        } else {
            setSelected(prev => [...prev, index]);
        }
    }

    return (
        <Layout previous="usage">
            <Box bg="#FEF4EC" width={'100%'} minH={'100vh'} >
                <Center pt={'5rem'}>
                    <Flex flexDir={'column'} alignItems={'center'} gap={2} maxW={'1500px'}>
                        <Text px={[2, 2, 1, 0]} fontSize={['2xl', '2xl', '3xl', "4xl"]} fontFamily={'heading'} textAlign={'center'} mb={5} >Select an Application Category</Text>

                        <SimpleGrid columns={[1, 1, 2, 4]}>
                            {category.map((title: string, index: number) => <Boxes key={index} title={title} selected={selected.includes(index)} onClick={() => onClick(index)} />)}
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
        <Center
            rounded={'md'}
            border={selected ? '2px black solid' : '2px transparent solid'}
            onClick={onClick}
            bg={'white'}
            margin={3}
            p={10}>

            <Center alignItems={'center'} height={['100%', '100%', '50%']} flexDirection="column" gap={[0, 0, 2]}>
                <Text textTransform={'capitalize'} fontSize={'xl'} textAlign={'center'} fontFamily={'body'}>{title}</Text>
                <Text fontSize={'md'} textAlign={['left', 'left', 'center']} fontFamily={'heading'}>This is basic discription.</Text>
            </Center>

        </Center>
    )
}