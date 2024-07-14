import { Box, Form, FormField, Text} from "grommet";
import React from "react";
import FormHeader from "../../../../../reUsable/formHeader/FormHeader";

const SignInFormPage = () => {
  return (
    <Box>
      <Box pad={"medium"}>
        <FormHeader />
      </Box>
      <Box>
        <Form>
          <FormField>
            <Text>Sign In</Text>
          </FormField>
        </Form>
      </Box>
    </Box>
  );
};

export default SignInFormPage;
