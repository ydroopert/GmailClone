import React from 'react'
import CloseIcon from "@material-ui/icons/Close";
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux"
import { closeMessage } from "./features/mailSlice"
import { db } from './firebase';
import { collection, addDoc ,serverTimestamp } from "firebase/firestore";

function SendMail() {
    
    const dispatch = useDispatch()

    const { register, handleSubmit,  formState: { errors } } = useForm();

    const onSubmit = (formData) => {
        console.log(formData);
        const { to, subject, message} = formData;
        try {
            const docRef = addDoc(collection(db, 'email'),{
            to: `${to}`,
            subject: `${subject}`,
            message:`${message}`,
            timestamp: serverTimestamp(),
        });
    } catch (e) {
        console.error("Error adding document: ", e);
      }
        dispatch(closeMessage());
    }

    return (
        <SendMailContainer>
            <SendMailHeader>
                <h3>New Message</h3>
                <CloseIcon onClick={() => dispatch(closeMessage())}/>
            </SendMailHeader>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="To" {...register("to", { required: true })} />
                <input placeholder="Subject" {...register("subject", { required: true })} />
                <input className="message" {...register("message", { required: true })} />

                <SendMailOption>
                    <Button variant="contained" color="primary" type="submit">Send</Button>
                </SendMailOption>

            </form>
        </SendMailContainer>
    )
}

export default SendMail

const SendMailContainer = styled.div`
    position: absolute;
    bottom: 0px;
    right: 50px;
    background-color: gray;
    width: 40%;
    height: 40%;
    max-width: 500px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    flex-direction: column;
    border: 1px solid whitesmoke;

    >form {
        display: flex;
        flex: 1;
        flex-direction: column;
        >input {
            height: 30px;
            padding: 10px;
            border: none;
            border-bottom: 1px solid whitesmoke;
            outline: none;
        }
        > .message {
                flex:1;
            }
    }
`

const SendMailHeader = styled.div`
    padding: 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    >svg{
        cursor: pointer;
    }
`

const SendMailOption = styled.div`
>button{
    margin: 15px;
}
`