import useQuiz from "~/hooks/useQuiz";
import { Button, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
interface Props {
  index: number;
  option: string;
  category: string;
  options: { [key: string]: number };
  setIntroduction: Dispatch<SetStateAction<boolean>>;
}

const Option: React.FC<Props> = ({
  option,
  options,
  category,
  setIntroduction,
  index,
}) => {
  const { set, storage, read } = useQuiz();

  return (
    <Button
      variant={"unstyled"}
      border={"2px black solid"}
      display={"flex"}
      whiteSpace="normal"
      blockSize="auto"
      w={["full", "full", "full", "auto"]}
      py={3}
      px={10}
      fontWeight={400}
      borderRadius={"full"}
      textTransform={"capitalize"}
      _hover={{ bg: "black", color: "white" }}
      onClick={() => {
        // point for this option
        const points = options[option];
        // boolean category avilablity
        const categoryAvailable = read(category);
        // updated instace with points

        if (!categoryAvailable) {
          set({
            [category]: storage?.[category]
              ? [...storage?.[category], points] // when category key available in storage : direct updating
              : [points], // otherwise set point with
          });
        } else {
          set({
            [category]: [...storage?.[category], points],
          });
        }

        if (index == 2) {
          setIntroduction(true);
        }
      }}
      key={option}
    >
      {option}
    </Button>
  );
};
export default Option;
