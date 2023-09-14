import React, { useState } from "react";
import ReactStars from "react-stars";
import { Flex, Text } from "@chakra-ui/react";

interface IRatingProps {
  rating: { rate: number; count: number };
  //   onChangeRating: (newRating: number) => void;
}

export const Rating: React.FC<IRatingProps> = ({ rating }) => {
  // Set a default rating value (e.g., 5)
  const [currentRating, setCurrentRating] = useState(5);

  const handleRatingChange = (newRating: number) => {
    setCurrentRating(newRating);
    // onChangeRating(newRating); // Call the provided onChangeRating callback
  };

  return (
    <Flex align="center">
      <ReactStars
        count={5}
        value={currentRating}
        half={true}
        size={24}
        color2={"#ffd700"}
        edit={true}
        onChange={handleRatingChange} // Add onChange to handle rating changes
      />
      <Text fontSize="xs" mx="1">
        ({rating.count})
      </Text>
    </Flex>
  );
};
