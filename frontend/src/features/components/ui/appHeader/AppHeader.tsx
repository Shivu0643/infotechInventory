import { Avatar, Box, BoxExtendedProps, Heading, Image,Text } from 'grommet'
import React, { FunctionComponent } from 'react'
interface ownProps extends BoxExtendedProps { }

type Props = ownProps;

const AppHeader: FunctionComponent<Props> = (Props) => {
    return (
        <Box {...Props}>
            <Box
                border={{
                    side: "bottom",
                }}
                direction='row'
                justify='between'
                pad={{ vertical: 'xsmall', horizontal: 'medium' }}
                background="#EEEDEB"
            >
                <Box
                    direction='row'
                    gap="small"
                >
                    <Box align="center"
                        justify="center">
                        <Image  src={`${process.env.PUBLIC_URL}/images/Inventory.svg`} alt="Logo" style={{ width: '60px', height: '20px' }} />
                    </Box>
                </Box>
                <Box
                    direction='row'
                    align="center"
                        justify="center"
                        gap="small"
                >
                    <Box>
                       <Box>
                       <Text  weight="bold"> John Doe</Text>
                       </Box>
                       <Box>
                       <Text size='small'>Admin</Text>
                       </Box>
                    </Box>
                    <Box >
                        <Avatar src='https://img.freepik.com/free-photo/modern-office-space-with-desktops-with-modern-computers-created-with-generative-ai-technology_185193-110089.jpg' />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default AppHeader