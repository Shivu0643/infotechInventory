import { Box, Text, BoxExtendedProps } from 'grommet'
import React, { FunctionComponent } from 'react'
interface ownProps extends BoxExtendedProps { }

type Props = ownProps;

const AppFooter: FunctionComponent<Props> = (Props) => {
  return (
    <Box>
        <Box  direction='row'
    justify='between'
    pad={{ vertical: 'xsmall', horizontal: 'medium' }}
    background="light-2">
        <Box
    >
      <Text>© Copy rights reserved</Text>
    </Box>
            <Box 
             direction='row'
             justify='between'
             width= '300px'
            >
                <Text>About</Text>
                <Text>Contact</Text>
                <Text>Support</Text>
            </Box>
        </Box>
    </Box>
  )
}

export default AppFooter