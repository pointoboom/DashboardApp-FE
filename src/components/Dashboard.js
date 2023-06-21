import {
    Grid, GridItem, Flex, Text, FormControl, FormLabel, Input, Button
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from "axios"
function Dashboard({ socket }) {
    const [data, setData] = useState([])
    const [comment, setComment] = useState("")
    const postComment = async (e, postId) => {
        e.preventDefault();
        const result = await axios.post(`http://localhost:4000/comment/${postId}`, {
            text: comment
        })
        setComment("")
    }
    const getData = async () => {
        const result = await axios.get("http://localhost:4000/")
    }
    useEffect(() => {
        // socket.emit('get-post')
        getData()
        socket.on("show-post", (data) => {
            console.log("show post", data)
            setData(data)
        })
    }, [socket])
    return (
        <>
            <Text fontSize='30px' fontWeight='400' ml='20px'>POST Lists</Text>
            <Grid templateColumns='repeat(3, 1fr)' gap={6} mt='50px'>
                {data ? data.map((post) => {
                    return (
                        <Flex direction='column' px='20px' >
                            <Flex justifyContent='center' alignItems='center' backgroundColor='#E5E5E5'>
                                <Text py='20px' fontSize='36px' fontWeight='700'>{post.title}</Text>
                            </Flex>

                            <Flex direction='column' backgroundColor='#F2F2F2' pl='10px'>
                                <Text>{post.comment ? post.comment.length : 0} Comment</Text>
                                {post.comment?.length > 0 ? post.comment.map((comment) => {
                                    return (
                                        <Flex backgroundColor='#E5E5E5' p='10px' mt='10px'>
                                            <Text>{comment.comment}</Text>
                                        </Flex>
                                    )
                                }) : null}

                            </Flex>
                            <Flex direction='column' backgroundColor='#F2F2F2' pl='10px'>
                                <FormControl my='10px'>
                                    <FormLabel>Comment</FormLabel>
                                    <Flex justifyContent='center' alignItems='center' >
                                        <Input placeholder='Input Comment' width='350px' backgroundColor='#FFFFFF' onChange={(e) => {
                                            setComment(e.target.value)
                                        }} />
                                        <Button backgroundColor='#4D7CFE' color='white' ml='10px' onClick={(e) => { postComment(e, post.post_id) }}>SUBMIT</Button>
                                    </Flex>
                                </FormControl>
                            </Flex>
                        </Flex>
                    )
                }) : null}


            </Grid></>
    )
}
export default Dashboard