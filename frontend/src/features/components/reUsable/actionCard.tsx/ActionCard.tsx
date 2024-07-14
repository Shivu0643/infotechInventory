import { Box, Text, Heading, BoxExtendedProps } from "grommet";
import { AddCircle, MoreVertical } from "grommet-icons";
import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface ownProps extends BoxExtendedProps {
  icon?: any;
  title?: string;
  description?: string;
  path?: any;
  isBackground?: boolean;
  titleSize?: string;
  descriptionSize?: string;
  titleColor?: string;
  descriptionColor?: string;
}

type Props = ownProps;

const ActionCard: FunctionComponent<Props> = (props) => {
  const navigate = useNavigate();

  return (
    <Box {...props}>
      <Box
        border={{ color: "border-weak" }}
        round="small"
        height={"small"}
        justify="between"
        onClick={() => {
          navigate(props?.path);
        }}
      >
        <Box
          direction="row"
          border={{
            side: "bottom",
            color: "border-weak",
          }}
          pad={{
            horizontal: "small",
            vertical: "xsmall",
          }}
          justify="between"
        >
          <Box>{props?.icon}</Box>
          <Box>
            <MoreVertical color="black" />
          </Box>
        </Box>
        <Box
          pad={{
            horizontal: "small",
            vertical: "xsmall",
          }}
        >
          <Text
            weight={"bold"}
            size={props?.titleSize || "xlarge"}
            color={props?.titleColor}
          >
            {props?.title}
          </Text>
        </Box>
        <Box
          pad={{
            horizontal: "small",
            vertical: "xsmall",
          }}
          border={{
            side: "top",
            color: "border-weak",
          }}
          background={props?.isBackground ? "skyblue" : "white"}
          round={{
            corner: "bottom",
            size: "small",
          }}
        >
          <Text
            size={props?.descriptionSize || "medium"}
            color={props?.descriptionColor}
          >
            {props?.description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ActionCard;
