import QUIZ from "../quiz.json";
import { localstorage } from "./useQuiz";
import { useSessionStorage } from "@mantine/hooks";

const useReport = () => {
  const [{ path }]: any = useSessionStorage(localstorage);
  return Object.keys(path).map((categoryName) => {
    const [{ question }] = QUIZ.filter(({ name }) => name == categoryName);
    return {
      name: categoryName,
      questions: question?.map((q: any, index) => {
        const selectedOptionName = path[categoryName].at(index);
        return {
          name: q.name,
          answer: selectedOptionName,
          option: q?.options[selectedOptionName],
        };
      }),
    };
  });
};

export default useReport;
