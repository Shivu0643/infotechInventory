import React, { FunctionComponent, ReactNode, useContext } from "react";
import { Box, BoxExtendedProps, Button, Heading, ResponsiveContext } from "grommet";
import { FormNext, LinkPrevious } from "grommet-icons";
import { useNavigate } from "react-router-dom";

interface OwnProps extends BoxExtendedProps {
  title: string;
  children?: ReactNode[] | ReactNode | undefined;
  onBack?: () => void;
}

type Props = OwnProps;

const AppInnerTitle: FunctionComponent<Props> = (props) => {
  const navigate = useNavigate();
  const onBackHandler = () => {
    if (props.onBack) {
      props.onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <Box
      {...props}
      fill={"horizontal"}
      border={{ size: "xsmall", side: "bottom", color: "border-weak" }}
      direction={"row"}
      background={"background"}
      round={{ corner: "top", size: "small" }}
      pad={"small"}
    >
      <Box
        fill="vertical"
        // width="medium"
        justify="start"
        pad={{ horizontal: "medium" }}
        direction="row"
        gap="small"
      >
        <Box
          border={{ color: "green", size: "small" }}
          margin={"xsmall"}
          round={"xsmall"}
          alignSelf={"center"}
          pad={{ horizontal: "small", vertical: "xxsmall" }}
          onClick={onBackHandler}
          hoverIndicator={{ elevation: "small" }}
        >
          <LinkPrevious size={"small"} color={"text-strong"} />
        </Box>
        <Box justify="center" align="center" direction={"row"}>
          <Heading level="2" weight={"bold"} margin="none">
            {props.title}
          </Heading>
        </Box>
      </Box>
      <Box
        fill={"horizontal"}
        flex={true}
        align={"end"}
        justify={"center"}
        pad={{ right: "large" }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default AppInnerTitle;