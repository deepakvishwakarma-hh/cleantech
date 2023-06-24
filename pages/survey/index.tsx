import useSWR from 'swr'
import { useEffect } from 'react'
import { useRouter } from "next/router";
import { Button, Box } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion'
import { Firstname, Age, Email, Begin, WelcomeUser } from '~/components/steps';

const Com = {
    'welcome-quiz': Begin,
    'get-name': Firstname,
    'welcome-user': WelcomeUser,
    'get-email': Email,
    'get-age': Age,

}

import Layout from '~/components/Layout/step';

const Survey = () => {

    const router = useRouter()
    const { question } = router.query;
    const URL = `/api/survey/getInfo?question=${question}`
    const { data, error, mutate } = useSWR<any>(URL, fetcher);

    const Component = Com[question as 'welcome-quiz' | 'get-name' | 'get-email' | 'get-age']

    console.log(data)


    useEffect(() => {
        // Call mutate to re-fetch the data when the question changes
        mutate();
    }, [question, mutate]);

    if (error) {
        return <div>Error loading survey information </div>;
    }

    if (!data) {
        return <div>Loading survey information...</div>;
    }



    const nextHandler = () => {
        router.push({
            pathname: router.pathname, query: {
                question: data.question.next
            }
        })
    }
    const previousHandler = () => {
        router.push({
            pathname: router.pathname, query: {
                question: data.question.previous
            }
        })
    }

    return (
        <div>
            <Layout previous={previousHandler}>
                <Component next={nextHandler} />
            </Layout>
        </div >
    )
}
export default Survey

const fetcher = (url: string) => fetch(url).then((res) => res.json())



