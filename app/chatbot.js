"use client"
import { Box, Button, Stack, TextField } from "@mui/material"
import { useState } from "react"
import ReactMarkDown from "react-markdown"

export default function ChatBot() {
    const [messages, setMessages] = useState([{ role: 'model', parts: [{ text: `Hi! I'm the Shal Inc. Support assistant how can i help you today?` }] },])
    const [message, setMessage] = useState('')

    const sendMessage = async () => {
        setMessage('')

        setMessages((messages) => [...messages, { role: 'user', parts: [{ text: message }] }, { role: 'model', parts: [{ text: '' }] }])

        const responseStream = fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify([...messages, { role: 'user', parts: [{ text: message }] }]),

        }).then(async (res) => {
            const reader = res.body.getReader()  // Get a reader to read the response body
            const decoder = new TextDecoder()  // Create a decoder to decode the response text

            let result = ''
            // Function to process the text from the response
            return reader.read().then(function processText({ done, value }) {
                if (done) {
                    return result
                }
                const text = decoder.decode(value || new Uint8Array(), { stream: true })  // Decode the text
                setMessages((messages) => {
                    let lastMessage = messages[messages.length - 1]  // Get the last message (assistant's placeholder)
                    let otherMessages = messages.slice(0, messages.length - 1)  // Get all other messages
                    console.log(lastMessage)
                    return [
                        ...otherMessages,
                        { ...lastMessage, parts: [{ text: lastMessage.parts[0].text + text }] },  // Append the decoded text to the assistant's message
                    ]
                })
                return reader.read().then(processText)  // Continue reading the next chunk of the response
            })
        })
    }
    // console.log("works")

    // //const data = await responseStream.json()
    // // for await (const item of response) {
    // //   setMessages((messages) => [...messages, { role: 'model', parts: [{ text: data.message }] }])
    // // }

    // for await (const chunk of responseStream) {
    //   const chunkText = chunk.text();
    //   console.log(chunk.text())
    // }






    return (
        <Box
            // width="100vw"
            // height="100vh"
            // display="flex"
            // flexDirection="column"
            // justifyContent="center"
            // alignItems="center"
            position="absolute"
            top="50%"
            left="50%"
            sx={{ transform: "translate(-50%,-50%)" }}
        >
            <Stack direction={'column'} width="500px" height="700px" border="1px solid black" p={2} spacing={3} bgcolor="white">
                <Stack direction={'column'} spacing={2} flexGrow={1} overflow="auto" maxHeight="100%">
                    {

                        messages.map((message, index) => (

                            <Box
                                key={index}
                                display="flex"
                                justifyContent={message.role === 'model' ? 'flex-start' : 'flex-end'}

                            >
                                <Box
                                    bgcolor={message.role === 'model' ? 'primary.main' : 'secondary.main'}
                                    color="white"
                                    borderRadius={16}
                                    p={3}
                                >
                                    <ReactMarkDown>{message.parts[0].text}</ReactMarkDown>
                                </Box>

                            </Box>
                        ))
                    }
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <TextField
                        label="Message"
                        fullWidth
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <Button variant="contained" onClick={sendMessage}>Send</Button>
                </Stack>

            </Stack>
        </Box >
    )
}

