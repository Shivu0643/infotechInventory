import { Box, Text } from "grommet";
import React from "react";

export const HeroSection = () => {
  return (
    <Box>
      <Box pad={"medium"} gap={"medium"}>
        <Box gap={"small"}>
          <Text>
            Hello
            <Text weight={"bold"}> Shivu</Text>, Welocme to
          </Text>
          <Text weight={"bolder"} size="large" color={"orange"}>
            INVEN
            <Text size="large" color={"lightgreen"}>
              TORY
            </Text>
          </Text>
        </Box>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
          inventore corporis vel maiores soluta dolores, officiis dolor,
          obcaecati possimus quidem vitae fugit. Similique libero consectetur
          distinctio voluptate deserunt quae error! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Quam iste voluptatibus veniam, dicta
          tempora esse amet dolore omnis a rem!
        </Box>
      </Box>
    </Box>
  );
};
