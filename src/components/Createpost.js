import {
    Flex, Spacer, Text, FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'
function Createpost({ socket }) {
    const [title, setTitle] = useState("")

    const createPost = async (e) => {
        const result = await axios.post("http://localhost:4000/", { title: title })
    }
    return (
        <>
            <Flex direction='row' justifyContent='center' alignItems='center' width='100vw' mt='50px'>
                <Flex direction='column'>
                    <Text fontSize='36px' fontWeight='900'>Create POST</Text>
                    <Flex direction='column'>
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input placeholder='Input Post' width='300px' onChange={(e) => { setTitle(e.target.value) }} onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    createPost()
                                    e.target.value = ''
                                    setTitle("")
                                }
                            }} />
                        </FormControl>
                    </Flex>
                </Flex>

            </Flex>
        </>
    )
}

export default Createpost;