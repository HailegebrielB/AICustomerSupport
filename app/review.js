import { Box, Button, IconButton, Modal, Rating, Stack, TextareaAutosize, TextField } from "@mui/material"
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close'
import { firestore } from "../firebase.js";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc } from "firebase/firestore";


export default function Review({ openState, closeFunc }) {
    const [value, setValue] = useState(2)
    const [review, setReview] = useState("")


    const addReview = async () => {

        await addDoc(collection(firestore, "Reviews"), {
            Rating: value,
            Comment: review
        });
    }

    return (

        <Modal open={openState} onClose={closeFunc}>
            <Box
                position="absolute"
                top="50%"
                left="50%"
                p={2}
                sx={{ transform: "translate(-50%,-50%)" }}


            >
                <Stack
                    width="500px"
                    height="300px"
                    bgcolor="white"
                    border="1px solid black"
                    p={2}
                    spacing={3}
                >
                    <IconButton onClick={() => { closeFunc() }} aria-label="close" sx={{ position: "absolute", top: "5%", left: "89%" }}><CloseIcon></CloseIcon></IconButton>
                    <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }} />
                    <TextField id="outlined-basic" label="How was your chat?" variant="outlined" multiline value={review} onChange={(e) => { setReview(e.target.value) }} />
                    <Button position="absolute" onClick={() => { addReview(); closeFunc() }}>Submit</Button>

                </Stack>
            </Box >
        </Modal>
    )
}

