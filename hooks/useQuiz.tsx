import superjson from "superjson";
import { useLocalStorage } from "@mantine/hooks";

const defaultValue = {
    select: ["skin contact", "skin care", "hair cart"]
}

export const localstorage = {
    key: 'quiz',
    defaultValue,
    serialize: superjson.stringify,
    deserialize: (str: string) => (str === undefined ? defaultValue : superjson.parse(str))
}



const useQuiz = () => {
    const [storage, setStorage]: any = useLocalStorage(localstorage)
    return {
        storage,
        select: (categories: string[]) => {
            setStorage((prev: any) => { return { ...prev, select: categories } })
        },
        set: (payload: { [name: string]: number[] }) => {
            setStorage((prev: any) => { return { ...prev, ...payload } })
        },
        clean: () => {
            setStorage(defaultValue)
        },
        isCompleted: (key: string) => {
            return (storage as any)[key]?.length == 3 ? true : false
        },
        read: (key: string) => {
            return storage?.[key] ? true : false
        },


    }
}

export default useQuiz