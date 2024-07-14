import { Box, Text, Tabs, Tab } from "grommet";
import { Task, Tasks } from "grommet-icons";
import React from "react";
import SignInFormPage from "./signInReport/SignInFormPage";

const RequestRapperPage = () => {
  return (
    <Box>
      <Box direction="row" justify="between">
        <Tabs>
          <Box width={"medium"}>
            <Tab title="Active Task" icon={<Tasks />}>
              <Box>Active task</Box>
            </Tab>
          </Box>

          <Box width={"medium"}>
            <Tab title="Completed Task" icon={<Task />}>
              Completed tasks
            </Tab>
          </Box>
        </Tabs>
      </Box>
    </Box>
  );
};

export default RequestRapperPage;
