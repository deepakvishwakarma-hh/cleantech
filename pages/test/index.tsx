import { useRouter } from "next/router";
import { useState } from "react";
import QUIZ from "../../quiz.json";
import { Button } from "@chakra-ui/react";

const selected_categories = [
  "no-rinse surface disinfection",
  "personal hygiene (antiseptic or hand sanitizer)",
  "extermination of invasive insects (in the garden)",
];

// Working as excepted;

type TypeStoragePathGeneration = (categories: string[]) => {
  [key: string]: any[];
};
const StoragePathGeneration: TypeStoragePathGeneration = (
  categories: string[]
) => {
  const T: any = {};
  for (let category of categories) {
    const data = find(category);
    T[category] = [...data.question.map((q: any) => null)];
  }
  return T;
};

const Text = () => {
  const initial = StoragePathGeneration(selected_categories);
  const [state, setState] = useState<any>(initial);

  const router = useRouter();
  const { ctgr, itd, idx } = router.query;
  const { description, question } = find(
    (ctgr as string) ?? "no-rinse surface disinfection"
  );

  // testing - upload for testing..
  const upload = () => {
    router.push({
      pathname: router.pathname,
      query: {
        ctgr: selected_categories.at(0),
        itd: false,
        idx: 0,
      },
    });
  };

  // next question on current ctgr
  const nextQuestion = () => {
    const previous = parseInt(idx as string);
    router.push({
      pathname: router.pathname,
      query: {
        idx: previous < question.length - 1 ? previous + 1 : 0,
        ctgr, //default
        itd, // default
      },
    });
  };

  const nextCategory = () => {
    router.push({
      pathname: router.pathname,
      query: {
        ctgr: selected_categories.at(1),
        idx: 0, // reset on new category;
        itd,
      },
    });
  };

  return (
    <div>
      {JSON.stringify(state)}
      <br />
      {/* <button onClick={upload}>uplaod</button> */}
      <br />
      {JSON.stringify(question.at(parseInt(idx as string)))}
      {/* question start */}
      <div>
        <h1>{question.at(parseInt(idx as string))?.name}</h1>
        {/* options */}
        <div>
          {Object.keys(
            (question.at(parseInt(idx as string)) as any)?.options
          ).map((option: any, i: number) => (
            <button
              onClick={() => {
                const category = ctgr as string;

                if (state[category]) {
                  //   alert("present");

                  const t = { ...state };
                  t[category][parseInt(idx as string)] = (
                    question.at(parseInt(idx as string)) as any
                  ).options[option];

                  setState(t);
                }

                if (!state[category]) {
                  //   alert("i have to put!");

                  setState({
                    ...state,
                    [category]: [...question.map((que: any) => 0)],
                  });
                }
              }}
              style={{ border: "2px solid red" }}
              key={i}
            >
              {option}
            </button>
          ))}
        </div>
        {/* options */}
      </div>
      {/* question end */}
      <br />
      <br />
      <Button onClick={nextQuestion}>next question</Button> <br />
      <Button onClick={nextCategory}>next categrory</Button>
    </div>
  );
};

export default Text;

const find = (name: string) => {
  // console.log(name) last error counter : undefined
  return QUIZ.filter((item) => item.name === name)[0];
};
