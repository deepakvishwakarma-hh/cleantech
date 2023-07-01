/* eslint-disable @next/next/no-img-element */

import { useState } from 'react'
import dynamic from "next/dynamic";
import Layout from "~/components/Layout/step";
import categories from "~/quiz/categories.json"
import { useBreakpointValue } from '@chakra-ui/react'
import { localstorage, useLocalStorage } from "~/lib/localstorage";
import { Button, Text, Flex, Box, Center, SimpleGrid } from "@chakra-ui/react"
const Slider = dynamic(() => import('react-slick').then(m => m.default), { ssr: false, loading: () => <p>Slider loading...</p> })

const CategorySelection = () => {
    const [storage] = useLocalStorage(localstorage)
    const [selected, setSelected] = useState([0])
    const category = (categories as any)[(storage as any).usage as string]
    const responsiveSlideToShow = useBreakpointValue({ base: 1, md: 2, lg: 3, xl: 3, '2xl': 4 }, { ssr: true })

    const onClick = (index: number) => {
        if (selected.includes(index)) {
            setSelected(prev => prev.filter(item => item !== index));
        } else {
            setSelected(prev => [...prev, index]);
        }
    }

    return (
        <Layout previous="usage">
            <Box bg="#FEF4EC" width={'100%'} height={'100vh'}>
                <Center height={'90%'}>
                    <Flex flexDir={'column'} alignItems={'center'} gap={2} maxW={'1500px'}>
                        <Text fontSize={'4xl'} fontFamily={'heading'} textAlign={'center'} mb={5} >Select an Application Category</Text>
                        <SimpleGrid width={'full'} p={[5, 5, 0]} gap={10} height={['auto', 'auto', '400px']} w={['90%', '90%', '90%', '90%', '90%', '100%']} columns={[1, 1, 1]}
                            sx={{
                                ".slick-dots": {
                                    transform: "translateY(1em)"
                                },
                                ".slick-dots li button": {
                                    _before: {
                                        transition: "0.2s",
                                        width: "10px",
                                        height: "10px",

                                        content: "''",
                                        borderRadius: "50%",
                                        background: "black"
                                    }
                                },
                                ".slick-arrow": {
                                    border: '1px solid gray',
                                    color: "white",
                                    w: "40px",
                                    h: "40px",
                                    borderRadius: '50%',
                                    transition: "0.2s",
                                    _hover: {
                                        border: '1px solid gray',
                                        color: "white"
                                    },
                                    _focus: {
                                        border: '1px solid gray',
                                        color: "white"
                                    },
                                    _before: {
                                        transition: "0.2s"
                                    }
                                },
                                ".slick-prev": {
                                    left: "-40px",
                                    _before: {
                                        color: "black",
                                        content: '"←"'
                                    }
                                },
                                ".slick-next": {
                                    right: "-40px",
                                    _before: {
                                        color: "black",
                                        content: '"→"'
                                    }
                                }
                            }}>

                            <Slider {...{
                                dots: true,
                                infinite: true,
                                speed: 500,
                                slidesToShow: responsiveSlideToShow,
                                slidesToScroll: 4
                            }}>
                                {category.map((title: string, index: number) => <Boxes key={index} title={title} selected={selected.includes(index)} onClick={() => onClick(index)} />)}
                            </Slider>

                        </SimpleGrid>

                        <Button isDisabled={!selected.length} onClick={() => { alert("questions are'nt created!") }} mt={'3.5em'} mx={'auto'} px={20} py={8} fontSize={'xl'} variant="takequizsmall">Next </Button>

                    </Flex>
                </Center>
            </Box>
        </Layout>
    )
}

export default CategorySelection


const Boxes = ({ title, onClick, selected }: any) => {
    return (
        <Box rounded={'md'} border={selected ? '2px black solid' : '2px transparent solid'} onClick={onClick} bg={'white'} height={'400px'} margin={3} p={5} >
            <Center height={['100%', '100%', '50%']}>
                <img
                    alt={'hello'}
                    src={"https://images.ctfassets.net/t9x0u6p47op0/2pIZBg7jStZ31KigklURO1/2a3f9153599fad715ac3b2042bd4b25d/informed__1_.svg?"}
                    style={{ margin: 'auto' }} />
            </Center>
            <Center alignItems={['start', 'start', 'center']} height={['100%', '100%', '50%']} flexDirection="column" gap={[0, 0, 2]}>
                <Text textTransform={'capitalize'} fontSize={'xl'} textAlign={'center'} fontFamily={'body'}>{title}</Text>
                <Text fontSize={'md'} textAlign={['left', 'left', 'center']} fontFamily={'heading'}>This is basic discription.</Text>
            </Center>

        </Box>
    )
}