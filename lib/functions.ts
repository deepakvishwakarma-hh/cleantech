type TypeStoragePathGeneration = (categories: string[]) => {
    [key: string]: any[];
  };
  export const StoragePathGeneration: TypeStoragePathGeneration = (
    categories: string[]
  ) => {
    const T: any = {};
    for (let category of categories) {
      const data = find(category);
      T[category] = [...data.question.map((q: any) => null)];
    }
    return T;
  };


  export const find = (name: string) => {
    // console.log(name) last error counter : undefined
    return QUIZ.filter((item) => item.name === name)[0];
  };
  

import QUIZ from "../quiz.json";
