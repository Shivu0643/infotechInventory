import React from 'react'
import { Box } from 'grommet'
import AppInnerContainer from '../../../reUsable/appInnerContainer/AppInnerContainer'
import AvailableOperations from '../../components/availableOperations/AvailableOperations'
import RequestRapperPage from '../../components/requestRapper/components/RequestRapperPage'

const ProductManagementPage = () => {
  return (
    <Box  fill>
    <AppInnerContainer title={"Product Management"}>
      <Box
        pad={"xsmall"}
        direction={"row"}
        fill
        gap={"xsmall"}
        background={"background-back"}
        round={{ corner: "bottom", size: "small" }}
      >
        <Box
          width={"60%"}
          overflow={"auto"}
          background={"background"}
          border={{ color: "border-weak" }}
          round={"small"}
        >
          <AvailableOperations />
        </Box>
        <Box
          width={"43%"}
          overflow={"auto"}
          border={{ color: "border-weak" }}
          round={"small"}
          background={"background"}
        >
          <RequestRapperPage />
        </Box>
      </Box>
    </AppInnerContainer>
  </Box>

  )
}

export default ProductManagementPage