interface Props extends BoxProps {
  children: any;
  black?: boolean;
}

import { Box, Text, BoxProps } from "@chakra-ui/react";
import { motion, useAnimationControls } from "framer-motion";

const UnderlineOnHover: React.FC<Props> = ({
  children,
  black,
  ...otherProps
}) => {
  const MotionBox = motion(Box);
  const control = useAnimationControls();
  return (
    <Box cursor={"pointer"} tabIndex={0} {...otherProps}>
      <Box
        onMouseEnter={() => {
          control.start({ width: "100%" });
        }}
        onMouseLeave={() => {
          control.start({ width: "0%" });
        }}
        width={"max-content"}
      >
        <Text>{children}</Text>
        <MotionBox
          initial={{ width: "0%" }}
          height={0.2}
          animate={control}
          bg={black ? "black" : "white"}
        ></MotionBox>
      </Box>
    </Box>
  );
};

export const UnderlineOnHoverBAC: React.FC<Props> = ({
  children,
  black,
  ...otherProps
}) => {
  const MotionBox = motion(Box);
  const control = useAnimationControls();
  return (
    <Box cursor={"pointer"} tabIndex={0} {...otherProps}>
      <Box
        onMouseEnter={() => {
          control.start({ width: ["0%", "100%"] }, { duration: 0.5 });
        }}
        width={"max-content"}
      >
        <Text>{children}</Text>
        <MotionBox
          initial={{ width: "100%" }}
          height={0.2}
          animate={control}
          bg={black ? "black" : "white"}
        ></MotionBox>
      </Box>
    </Box>
  );
};

export default UnderlineOnHover;
