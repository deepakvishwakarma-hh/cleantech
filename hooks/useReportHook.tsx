import QUIZV2 from "../quizv2.json";
import { localstorage } from "./useQuiz";
import { useSessionStorage } from "@mantine/hooks";

const useReport = () => {
  const [{ path }]: any = useSessionStorage(localstorage);
  return Object.keys(path).map((categoryName) => {
    const [{ question }] = QUIZV2.filter(({ name }) => name == categoryName);
    return {
      name: categoryName,
      questions: question?.map((q: any, index) => {
        const selectedOptionName = path[categoryName].at(index);
        return {
          name: q.name,
          answer: selectedOptionName,
          option: q?.options[selectedOptionName].score,
        };
      }),
    };
  });
};

export default useReport;
