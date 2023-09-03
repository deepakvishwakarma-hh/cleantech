import superjson from "superjson";
export { useLocalStorage } from "@mantine/hooks";

const defaultValue = {
    name: 'deepak',
    age: '19',
    email: 'default@gmail.com',
    usage: 'medium',
    surrounded : []
}
export const localstorage = {
    key: 'storage',
    defaultValue: defaultValue,
    serialize: superjson.stringify,
    deserialize: (str: string) => (str === undefined ? defaultValue : superjson.parse(str))
}

