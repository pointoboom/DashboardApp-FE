import { Flex, Spacer } from '@chakra-ui/react'
import Createpost from '../components/Createpost';
import Dashboard from '../components/Dashboard';
import socketIO from "socket.io-client";
const socket = socketIO.connect("http://backend:4000");
function Homepage() {
    return (
        <>
            <Flex direction='column'>
                <Createpost socket={socket} />
                <Dashboard socket={socket} />
            </Flex>
        </>
    )
}

export default Homepage;