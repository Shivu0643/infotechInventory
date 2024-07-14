// FormHeader.js
import { Box, Heading, Text } from "grommet";
import { AddCircle } from "grommet-icons";
import React from "react";

const FormHeader = () => {
  return (
    <Box>
      <Box direction="row" justify="between" align="center">
        <Box direction="row" gap={'xsmall'} align="center">
          <Box>
            <AddCircle />
          </Box>
          <Box>
            New Product
          </Box>
        </Box>
        <Box>
          11/15
        </Box>
      </Box>
    </Box>
  );
};

export default FormHeader;
