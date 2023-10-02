import Image from "next/image";
import { Box } from "@chakra-ui/react";
const Logo = () => {
  return (
    <Box sx={{ background: "white" }} px={10} rounded={"xl"}>
      <Image
        src={"/cleantech.png"}
        alt="cleantech-logo"
        width={150}
        height={50}
        style={{ margin: "0" }}
      />
    </Box>
  );
};

export default Logo;
