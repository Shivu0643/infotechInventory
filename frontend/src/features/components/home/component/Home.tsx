import React from "react";
import { Box, Heading, Text } from "grommet";
import ActionCard from "../../reUsable/actionCard.tsx/ActionCard";
import { HeroSection } from "./heroSection/HeroSection";
import ActionCardsWrapper from "./actionCardsWrapper/ActionCardsWrapper";

const Home = () => {
  return (
    <Box>
      <Box
      gap={"xlarge"}
      >
        <Box
        height={"medium"}
        >
          <HeroSection />
        </Box>
        <Box
        height="medium"
        >
          <ActionCardsWrapper />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
