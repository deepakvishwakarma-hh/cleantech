import Image from "next/image";
import useQuiz from "~/hooks/useQuiz";
import { Button, Box } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  index: number;
  option: string;
  category: string;
  lastIndex: number;
  options: { [key: string]: number };
  setIntroduction: Dispatch<SetStateAction<boolean>>;
}

const Option: React.FC<Props> = ({
  option,
  options,
  category,
  setIntroduction,
  index,
  lastIndex,
}) => {
  const { set, storage, read } = useQuiz();

  return (
    <Button
      px={10}
      display={"flex"}
      blockSize="auto"
      fontWeight={400}
      py={[1, 1, 1, 0]}
      whiteSpace="normal"
      variant={"unstyled"}
      border={"2px black solid"}
      textTransform={"capitalize"}
      fontSize={["md", "md", "md", "xl"]}
      w={["full", "full", "full", "auto"]}
      _hover={{ bg: "black", color: "white" }}
      borderRadius={["md", "md", "md", "full"]}
      flexDir={["column", "column", "column", "row"]}
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

        if (index == lastIndex - 1) {
          setIntroduction(true);
        }
      }}
      key={option}
    >
      <Box mr={2} minW={"50px"} minHeight={"50px"}>
        <Image src="/Icons/ck.svg" alt="icon" width={60} height={60} />
      </Box>
      {option}
    </Button>
  );
};
export default Option;
