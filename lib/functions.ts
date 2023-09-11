import QUIZV2 from "../quizv2.json"

type TypeStoragePathGeneration = (categories: string[]) => {
    [key: string]: any[];
  };
  export const StoragePathGeneration: TypeStoragePathGeneration = (
    categories: string[]
  ) => {
    const T: any = {};
    for (let category of categories) {
      const data = find(category);
      if(!data){
        console.log(category)
      }
      T[category] = [...data.question.map((q: any) => null)];
    }
    return T;
  };


  export const find = (name: string) => {
    // console.log(name) last error counter : undefined
    return QUIZV2.filter((item) => item.name === name)[0];
  };
  

