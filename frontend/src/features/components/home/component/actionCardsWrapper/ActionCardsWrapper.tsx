import { Box } from "grommet";
import { AddCircle, UserAdd, UserWorker } from "grommet-icons";
import React from "react";
import ActionCard from "../../../reUsable/actionCard.tsx/ActionCard";

const actions = [
  {
    icon: <AddCircle size="30px" color="black" />,
    title: "Product",
    description: "allows you to manage products",
    path: "product-management",
    isBackground: true,
  },
  {
    icon: <UserAdd size="30px" color="black" />,
    title: "Vendor",
    description: "allows you to manage vendors",
    path: "vendor-management",
    isBackground: true,
  },
  {
    icon: <UserWorker size="30px" color="black" />,
    title: "Employee",
    description: "allows you to manage employees",
    path: "employeee-management",
    isBackground: true,
  },
];
const ActionCardsWrapper = () => {
  return (
    <Box>
      <Box gap={"large"} direction="row" pad={'medium'}>
        {actions?.map((feature, index) => {
          return (
            <Box key={index} width={"medium"}>
              <ActionCard
                icon={feature?.icon}
                title={feature?.title}
                description={feature?.description}
                path={feature?.path}
                isBackground={feature?.isBackground}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ActionCardsWrapper;
