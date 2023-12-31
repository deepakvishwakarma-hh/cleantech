interface Props {
  type: "number" | "email" | "string";
  onclick: (value: string) => void;
}
import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Flex, Input, IconButton } from "@chakra-ui/react";

const UserInfoInput: React.FC<Props> = ({ type, onclick }) => {
  const [value, setValue] = useState("");
  return (
    <Flex
      pl={8}
      pr={5}
      bg="white"
      height={["70px", "70px", "103px"]}
      width={["auto", "auto", "570px"]}
      margin={[5, 5, 0]}
      alignItems={"center"}
      borderRadius={"10px"}
      border={"3px #515B68 solid"}
    >
      <Input
        autoFocus
        name={type}
        type={type}
        fontSize={["xl", "xl", "3xl"]}
        variant={"unstyled"}
        fontFamily={"heading"}
        background={"transparent"}
        onKeyDown={(evt) => {
          if (evt.code === "Enter") {
            return value !== ""
              ? onclick(value)
              : alert("Please enter a valid Value.");
          }
        }}
        onChange={(evt) => setValue(evt.target.value.trim())}
      />
      <IconButton
        size={"sm"}
        bg="secondary"
        rounded={"full"}
        aria-label="submit"
        // prevent running without value : future[type cheaking]
        onClick={() => (value !== "" ? onclick(value) : null)}
        icon={<FiChevronRight color="white" />}
      ></IconButton>
    </Flex>
  );
};

export default UserInfoInput;
