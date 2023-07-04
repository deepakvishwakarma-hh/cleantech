import superjson from "superjson";

const defaultValue = {

}

export const localstorage = {
    key: 'quiz',
    defaultValue,
    serialize: superjson.stringify,
    deserialize: (str: string) => (str === undefined ? defaultValue : superjson.parse(str))
}