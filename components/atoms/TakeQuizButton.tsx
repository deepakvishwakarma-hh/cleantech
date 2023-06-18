interface Props {
    size: 'sm' | 'md' | 'lg'
}

import { Button } from "@chakra-ui/react"
import { useRouter } from "next/router"






const TakeQuizButton: React.FC<Props> = ({ size }) => {
    const { push } = useRouter()

    return (
        <Button
            px={10}
            bg="black"
            color={'white'}
            borderRadius={'full'}
            fontSize={'md'}
            fontWeight={400}
            letterSpacing={".5px"}

            variant={'unstyled'}>Take the quiz</Button>
    )
}

export default TakeQuizButton