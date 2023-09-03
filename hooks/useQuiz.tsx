import superjson from "superjson";
import { useSessionStorage } from "@mantine/hooks";

const defaultValue = {
  path: {},
  select: ["no-rinse surface disinfection"],
  isCompleted: false,
};

export const localstorage = {
  key: "quiz",
  defaultValue,
  serialize: superjson.stringify,
  deserialize: (str: string) =>
    str === undefined ? defaultValue : superjson.parse(str),
};

const useQuiz = () => {
  const [storage, setStorage]: any = useSessionStorage(localstorage);
  return {
    storage,
    select: (categories: string[]) => {
      setStorage((prev: any) => {
        return { ...prev, select: categories };
      });
    },
    path: (STG: { [key: string]: any[] }) => {
      setStorage((prev: any) => {
        return { ...prev, path: STG };
      });
    },
    set: (payload: { [name: string]: number[] }) => {
      setStorage((prev: any) => {
        return { ...prev, ...payload };
      });
    },
    clean: () => {
      setStorage(defaultValue);
    },
    read: (key: string) => {
      return storage?.[key] ? true : false;
    },
    markCompleted: () => {
      setStorage({ ...storage, isCompleted: true });
    },
  };
};

export default useQuiz;
