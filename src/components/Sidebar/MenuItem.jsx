import { Link } from "react-router-dom"
import { Box, Text, Divider } from "@chakra-ui/react"

export function MenuItem({linkTo, text}) {


    return (
        <>
            <Box>
                <Link to={linkTo}>
                    <Text align={'left'} fontSize={17}>{text}</Text>
                </Link>    
            </Box>    
        </>
    )
};