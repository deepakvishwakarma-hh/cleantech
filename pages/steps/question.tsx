
import Layout from "~/components/Layout/step"
import useQuiz from "~/hooks/useQuiz"
import getQuiz from "~/lib/quiz-functions"
import { Button, Flex, Text, Box, Center } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useLocalStorage } from "@mantine/hooks"
import { useState } from "react"
const QuestionPage = () => {
    const router = useRouter()
    const [introduction, setIntroduction] = useState(true)
    const [storage, setStorage] = useLocalStorage({ key: 'quiz', defaultValue: {} })

    const quiz = useQuiz()

    const { isCompleted, index, category_name, data: { question, options } } = getQuiz(quiz)


    return (
        <>
            <Layout previous="ctgr-selection">
                <Box bg="#FEF4EC" width={'100%'} height={'100vh'}>

                    <Center height={'90%'} flexDir={'column'}>



                        <Box maxW={'300px'} p={2} bg={'white'} rounded={'md'} position={'fixed'} bottom={5} right={5}>
                            <Text fontFamily={'heading'}>Development</Text>
                            <hr />


                            <Text mt={2}><b>Completed</b> : {JSON.stringify(isCompleted)}</Text>
                            <Text><b>Options & Points</b> : {JSON.stringify(options)}</Text>
                            <Text><b>Question Index</b> : {JSON.stringify(index + 1)}/3</Text>
                            <Text><b>Storage</b> : {JSON.stringify(storage)}</Text>

                            <Button color={'red.900'} size={'sm'} bg={'red.200'} textTransform={'capitalize'} onClick={() => { quiz.clean() }}>clear localstorage</Button>

                        </Box>

                        {isCompleted && <QuizCompletion />}

                        {!isCompleted && introduction && index == 0 && <CategoryIntroduction title={category_name} setIntroduction={setIntroduction} />}

                        {!introduction && !isCompleted && <Question
                            index={index}
                            setIntroduction={setIntroduction}
                            category={category_name}
                            question={question}
                            options={options} />}

                    </Center>



                </Box>
            </Layout>
        </>
    )
}
export default QuestionPage




const Question = ({ question, options, category, setIntroduction, index }: any) => {
    const { set, storage, read } = useQuiz()

    return (
        <Box maxW={'3xl'}>
            <Text letterSpacing={2} mb={5} textTransform={'uppercase'} textAlign={'center'}>{category}</Text>
            <Text fontSize={'4xl'} fontFamily={'heading'} textAlign={'center'} mb={5} >{question}</Text>

            <Flex gap={5} flexWrap={'wrap'} py={2} alignItems={'center'} justifyContent={'center'}>
                {
                    Object.keys(options).map((opt) => (
                        <Button
                            variant={'unstyled'}
                            border={'2px black solid'}
                            display={'flex'}
                            py={7}
                            px={10}
                            fontWeight={400}
                            borderRadius={'full'}
                            textTransform={'capitalize'}
                            _hover={{ bg: 'black', color: "white" }}


                            onClick={() => {


                                // point for this option
                                const points = options[opt];
                                // boolean category avilablity
                                const categoryAvailable = read(category)
                                // updated instace with points


                                if (!categoryAvailable) {
                                    set({
                                        [category]: storage?.[category]
                                            ? [...storage?.[category], points] // when category key available in storage : direct updating
                                            : [points] // otherwise set point with 
                                    })

                                } else {
                                    set({
                                        [category]: [...storage?.[category], points]
                                    })
                                }



                                if (index == 2) {
                                    setIntroduction(true)
                                }



                            }}
                            key={opt}>{opt}</Button>))
                }
            </Flex>

        </Box>
    )
}


const QuizCompletion = () => {
    return (
        <Box>
            <Text fontSize={'4xl'} fontFamily={'heading'} textAlign={'center'} mb={5} >Congratulation!, Quiz Completed.</Text>
        </Box>
    )
}



const CategoryIntroduction = ({ title, disciption, setIntroduction }: any) => {
    return (
        <Box maxW={'500px'}>
            <Text fontSize={'4xl'} textTransform={'capitalize'} fontFamily={'heading'} textAlign={'center'} mb={5} >{title}</Text>
            <Text fontSize={'md'} textAlign={'center'} mb={5} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat possimus dolorum, sint alias delectus id molestias?</Text>
            <Button
                variant={'unstyled'}
                border={'2px black solid'}
                display={'flex'}
                py={7}
                px={10}
                fontWeight={400}
                borderRadius={'full'}
                textTransform={'capitalize'}
                _hover={{ bg: 'black', color: "white" }}
                mx={'auto'}
                onClick={() => {
                    setIntroduction(false)
                }}

            >Next →</Button>

        </Box>
    )
}