import { Box, Grid } from 'grommet'
import React from 'react'
import AppHeader from '../appHeader/AppHeader'
import AppFooter from '../appFooter/AppFooter'
import AppMain from '../appMain/AppMain'

const AppGrid = () => {
  return (
    <Grid
    rows={[
        "auto",
        "flex",
        "auto"
    ]}
    columns={["auto"]}
    areas={[
        ["header"],
        ["main"],
        ["footer"]
    ]}
    fill
    >
            <AppHeader gridArea="header"/>
            <AppMain gridArea="main"/>
            
<AppFooter gridArea = "footer"/>
            
    </Grid>
  )
}

export default AppGrid