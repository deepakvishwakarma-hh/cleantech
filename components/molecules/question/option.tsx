interface Props {
  option: string;
  selected: boolean;
}
import Image from "next/image";
import { find } from "~/lib/functions";
import { useRouter } from "next/router";
import { Button, Box } from "@chakra-ui/react";
import { useLocalStorage } from "@mantine/hooks";
import { localstorage } from "~/hooks/useQuiz";

const Option: React.FC<Props> = ({ option, selected }) => {
  const router = useRouter();
  const [storage, setStorage]: any = useLocalStorage(localstorage);
  const { ctgr, itd, idx, cpd } = router.query;
  const { question } = find(
    (ctgr as string) ?? "no-rinse surface disinfection"
  );

  return (
    <Button
      px={10}
      key={option}
      blockSize="auto"
      display={"flex"}
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
      outline={selected ? "2px solid blue" : undefined}
      onClick={() => {
        // category name (in string)
        const category = ctgr as string;

        // deepcopy of storage.path for quic manipulation (direct manipuration)
        const deepcopy = { ...storage.path };
        deepcopy[category][parseInt(idx as string)] = (
          question.at(parseInt(idx as string)) as any
        ).options[option];
        // save deepcopy to path;
        setStorage({ ...storage, path: deepcopy });

        // program - next question
        const previous = parseInt(idx as string);
        if (previous < question.length - 1) {
          // push to next question (increase index number)
          router.push({
            pathname: router.pathname,
            query: {
              idx: previous + 1,
              ctgr, //default
              itd, // default
              cpd,
            },
          });
        } else {
          const nextCtgrName = storage.select.at(
            (storage.select as string[]).indexOf(category) + 1
          );
          if (nextCtgrName) {
            router.push({
              pathname: router.pathname,
              query: {
                ctgr: nextCtgrName,
                idx: 0, // reset on new category;
                itd: true,
                cpd,
              },
            });
          } else {
            router.push({
              pathname: router.pathname,
              query: {
                ctgr,
                idx, // reset on new category;
                itd,
                cpd: true,
              },
            });
          }
          // push to next category (chnage ctgr )
        }
      }}
    >
      <Box mr={2} minW={"50px"} minHeight={"50px"}>
        <Image src="/Icons/ck.svg" alt="icon" width={60} height={60} />
      </Box>
      {option} <br />
    </Button>
  );
};
export default Option;
