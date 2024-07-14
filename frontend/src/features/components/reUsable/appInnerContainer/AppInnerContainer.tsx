import React, { FunctionComponent, ReactNode } from "react";
import { Box, BoxExtendedProps } from "grommet";
import AppInnerTitle from "../appInnerTitle/AppInnerTitle";

interface OwnProps extends BoxExtendedProps {
  title: string;
  titleChildren?: ReactNode[] | ReactNode | undefined;
  children?: ReactNode[] | ReactNode | undefined;
  onBack?: () => void;
}

type Props = OwnProps;

const AppInnerContainer: FunctionComponent<Props> = (props) => {
  return (
    <Box {...props} fill height={"medium"}>
      <AppInnerTitle title={props.title} children={props.titleChildren} />
      <Box fill direction={"row"}>
        {props.children}
      </Box>
    </Box>
  );
};

export default AppInnerContainer;