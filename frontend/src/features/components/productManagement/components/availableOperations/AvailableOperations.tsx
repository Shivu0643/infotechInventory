import { Box, Text, Grid } from "grommet";
import React from "react";
import { AddCircle, UserAdd, UserWorker } from "grommet-icons";
import ActionCard from "../../../reUsable/actionCard.tsx/ActionCard";

const Operations = [
  {
    icon: <AddCircle size="30px" color="black" />,
    title: "New Product",
    description: "Allows you to manage products",
    path: "New-Product",
  },
  {
    icon: <UserAdd size="30px" color="black" />,
    title: "Edit Product",
    description: "Allows you to manage vendors",
    path: "Edit-Product",
  },
  {
    icon: <UserWorker size="30px" color="black" />,
    title: "Manage Product",
    description: "Allows you to manage employees",
    path: "Manage-Product",
  },
];

const AvailableOperations = () => {
  return (
    <Box>
      <Box
        border={{ side: "bottom", size: "xsmall", color: "border-weak" }}
        pad={{ horizontal: "medium", vertical: "small" }}
      >
        <Text size="medium" weight="bold">
          Available Operations
        </Text>
      </Box>
      <Grid
        pad={{ vertical: "small", horizontal: "medium" }}
        columns={{ count: "fit", size: "small" }}
        gap="xsmall"
      >
        {Operations.map((operation, index) => (
          <Box
            key={index}
            pad="medium"
            round="small"
            background="none"
            width="medium"
          >
            <ActionCard
              icon={operation.icon}
              title={operation.title}
              description={operation.description}
              path={operation.path}
              titleSize="medium"
              descriptionSize="xsmall"
              titleColor="dark-light"
              descriptionColor="dark-3"
            />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default AvailableOperations;
