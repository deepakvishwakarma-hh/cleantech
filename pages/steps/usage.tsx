/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import Layout from "~/components/Layout/step";
import { Text, Flex, Box, Center, Stack, SimpleGrid } from "@chakra-ui/react"
import { localstorage, useLocalStorage } from "~/lib/localstorage";

const __data = [
    {
        alt: "alt",
        name: 'low',
        title: "Low Usage",
        discription: "Civilian use and residetial application",
        src: "https://images.ctfassets.net/t9x0u6p47op0/2pIZBg7jStZ31KigklURO1/2a3f9153599fad715ac3b2042bd4b25d/informed__1_.svg?",
    },
    {
        alt: "alt",
        name: 'medium',
        title: "Medium Usage",
        discription: "Commersial use and professional application",
        src: "https://images.ctfassets.net/t9x0u6p47op0/2pIZBg7jStZ31KigklURO1/2a3f9153599fad715ac3b2042bd4b25d/informed__1_.svg?",
    }, {
        alt: "alt",
        name: 'high',
        title: "Heavy Usage",
        discription: "Industrial and large scale operation",
        src: "https://images.ctfassets.net/t9x0u6p47op0/2pIZBg7jStZ31KigklURO1/2a3f9153599fad715ac3b2042bd4b25d/informed__1_.svg?",
    }
]

export default function Usage() {
    const router = useRouter()
    const [storage, setStorage] = useLocalStorage(localstorage)
    const handleClick = (usage: string) => {
        setStorage((prev: any) => { return { ...prev, usage } })
        router.push('ctgr-selection')
    }

    return (
        <Layout previous="email">
            <Box bg="#FEF4EC" width={'100%'} height={'100vh'}>
                <Center height={'90%'}>
                    <Flex flexDir={'column'} alignItems={'center'} gap={2} maxW={'1000px'}>
                        <Text px={[2, 2, 1, 0]} fontSize={['2xl', '2xl', '3xl', "4xl"]} fontFamily={'heading'} textAlign={'center'} mb={5} >Select your usage so that we can design your further process accordingly</Text>
                        <SimpleGrid width={'full'} p={[5, 5, 0]} gap={10} height={['auto', 'auto', '400px']} columns={[1, 1, 3]}>
                            {__data.map((data, i) => <Boxes key={i} {...data} selected={data.title === (storage as typeof localstorage['defaultValue']).usage} onclick={() => { handleClick(data.name) }} />)}
                        </SimpleGrid>
                    </Flex>
                </Center>
            </Box>
        </Layout>
    )
}


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