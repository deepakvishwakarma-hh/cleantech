import Option from "./option"
import { Dispatch, SetStateAction } from "react"
import { Flex, Text, Box } from "@chakra-ui/react"

interface Props {
    index: number,
    question: string,
    category: string,
    options: { [key: string]: number }
    setIntroduction: Dispatch<SetStateAction<boolean>>,
}

const Question: React.FC<Props> = ({ question, options, category, setIntroduction, index }) => {
    return (
        <Box maxW={'3xl'} pt={'10rem'}>
            <Text letterSpacing={2} mb={5} textTransform={'uppercase'} textAlign={'center'}>{category}</Text>
            <Text fontSize={'4xl'} fontFamily={'heading'} textAlign={'center'} mb={5} >{question}</Text>
            <Flex gap={5} flexWrap={'wrap'} py={2} alignItems={'center'} justifyContent={'center'}>
                {
                    Object.keys(options).map((option) => (
                        <Option
                            key={option}
                            index={index}
                            option={option}
                            options={options}
                            category={category}
                            setIntroduction={setIntroduction} />
                    ))
                }
            </Flex>

        </Box>
    )
}

export default Question