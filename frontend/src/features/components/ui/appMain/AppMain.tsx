import { Box, BoxExtendedProps } from "grommet";
import React, { FunctionComponent } from "react";
import AppRoutes from "../appRoutes/AppRoutes";

interface ownProps extends BoxExtendedProps{}

type Props = ownProps

const AppMain:FunctionComponent<Props> = (props)=>{
    return(
        <Box {...props}>
                <AppRoutes/> 
        </Box>
    )
}

export default AppMain