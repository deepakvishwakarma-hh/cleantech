import { Button, Text, Box } from "@chakra-ui/react"

interface Props {
    title: string,
    description: string,
    handleNext: () => void
}

const CategoryIntroduction: React.FC<Props> = ({ title, description, handleNext }) => {
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
                onClick={handleNext}>Next →</Button>
        </Box>
    )
}


export default CategoryIntroduction