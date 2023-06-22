import useSWR from 'swr'
import { useEffect } from 'react'
import { useRouter } from "next/router";
import { fetcher } from "~/lib/fetcher"

const Survey = () => {

    const router = useRouter()
    const { question } = router.query;
    const URL = `/api/survey/getInfo?question=${question}`
    const { data, error, mutate } = useSWR<any>(URL, fetcher);



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

    return (
        <div>{JSON.stringify(data)} </div>
    )
}
export default Survey



