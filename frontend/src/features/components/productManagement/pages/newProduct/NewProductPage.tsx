import { Box } from "grommet";
import React from "react";
import FormHeader from "../../../reUsable/formHeader/FormHeader";

const NewProductPage = () => {
  return (
    <Box>
      <Box direction="row" justify="between">
        <Box width={''}>
          <Box>
            <FormHeader />
          </Box>
          <Box>Form fields</Box>
        </Box>
        <Box>New product</Box>
      </Box>
    </Box>
  );
};

export default NewProductPage;
