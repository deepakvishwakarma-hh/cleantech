import superjson from "superjson";
import { useLocalStorage } from "@mantine/hooks";

const defaultValue = {
  select: ["skin contact", "skin care", "hair cart"],
};

export const localstorage = {
  key: "quiz",
  defaultValue,
  serialize: superjson.stringify,
  deserialize: (str: string) =>
    str === undefined ? defaultValue : superjson.parse(str),
};

const useQuiz = () => {
  const [storage, setStorage]: any = useLocalStorage(localstorage);
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
  };
};

export default useQuiz;
