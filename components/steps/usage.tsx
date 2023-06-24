/* eslint-disable @next/next/no-img-element */
import { type StepComp } from "./type"
import { Text, Flex, Box, Center, Stack, SimpleGrid } from "@chakra-ui/react"
import { useState } from 'react'
const __data = [
    {
        src: "https://images.ctfassets.net/t9x0u6p47op0/2pIZBg7jStZ31KigklURO1/2a3f9153599fad715ac3b2042bd4b25d/informed__1_.svg?",
        alt: "alt",
        discription: "Civilian use and residetial application",
        title: "Low Usage"
    },
    {
        src: "https://images.ctfassets.net/t9x0u6p47op0/2pIZBg7jStZ31KigklURO1/2a3f9153599fad715ac3b2042bd4b25d/informed__1_.svg?",
        alt: "alt",
        discription: "Commersial use and professional application",
        title: "Medium Usage"
    }, {
        src: "https://images.ctfassets.net/t9x0u6p47op0/2pIZBg7jStZ31KigklURO1/2a3f9153599fad715ac3b2042bd4b25d/informed__1_.svg?",
        alt: "alt",
        discription: "Industrial and large scale operation",
        title: "Heavy Usage"
    }
]

const Usage: StepComp = ({ next }) => {
    const [selected, setSelected] = useState('')
    return (
        <Box bg="#FEF4EC" width={'100%'} height={'100vh'}>
            <Center height={'90%'}>
                <Flex flexDir={'column'} alignItems={'center'} gap={2} maxW={'1000px'}>
                    <Text fontSize={'4xl'} fontFamily={'heading'} textAlign={'center'} mb={5} >Select your usage so that we can design your further process accordingly</Text>
                    <SimpleGrid width={'full'} p={[5, 5, 0]} gap={10} height={['auto', 'auto', '400px']} columns={[1, 1, 3]}>
                        {__data.map((data, i) => <Boxes key={i} {...data} selected={data.title === selected} onclick={() => { setSelected(data.title) }} />)}
                    </SimpleGrid>
                </Flex>
            </Center>
        </Box>
    )
}
export default Usage


const Boxes = ({ src, alt, title, discription, selected, onclick }: { src: string, alt: string, title: string, discription: string, selected: boolean, onclick: any }) => {
    return (
        <Flex border={selected ? "2px black solid" : "2px white solid"} onClick={onclick} flexDirection={['row', 'row', 'column']} bg="white" rounded={'md'} padding={[2, 2, 10]}>
            <Center height={['100%', '100%', '50%']}>
                <img
                    alt={alt}
                    src={src}
                    style={{ margin: 'auto' }} />
            </Center>
            <Center alignItems={['start', 'start', 'center']} height={['100%', '100%', '50%']} flexDirection="column" gap={[0, 0, 2]}>
                <Text textTransform={'capitalize'} fontSize={'xl'} textAlign={'center'} fontFamily={'body'}>{title}</Text>
                <Text fontSize={'md'} textAlign={['left', 'left', 'center']} fontFamily={'heading'}>{discription}</Text>
            </Center>
        </Flex>
    )
}