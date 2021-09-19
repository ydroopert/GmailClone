import { IconButton } from '@material-ui/core'
import React from 'react'
import { Checkbox } from '@material-ui/core'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { chooseMail } from './features/mailSlice'
function EmailRow({ id, title, subject, description, time }) {
    const history = useHistory();
    const dispatch = useDispatch()

    const openMail = () =>{
        dispatch(chooseMail({
            id,
            title,
            subject,
            description,
            time,
        }))
        history.push("/mail");
    }
    return (
        <div onClick={openMail}>
        <EmailRowContainer>
            <Checkbox />
            <IconButton>
                <StarBorderOutlinedIcon />
            </IconButton>
            <IconButton>
                <LabelImportantOutlinedIcon />
            </IconButton>
            <h3>{title}</h3>
            <h4>{subject}<span>-{description}</span></h4>
            <p>{time}</p>
        </EmailRowContainer>
        </div>
    )
}

export default EmailRow

const EmailRowContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 2px solid whitesmoke;
    >h3 {
        flex: 0.1;
    }
    >h4 {
        width:400px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
        padding-left: 5px;
        padding-right: 5px;
        flex: 0.8;
        text-align: left;
        margin-left: 30px;
        >span{
            font-weight: 400;
            color: gray;
        }
    }
    >p {
        padding-right:15px ;
        flex:0.1;
        float:right;
    }
    
    :hover {
        border-top: 1px solid whitesmoke;
        box-shadow: 0px 4px 4px -2px rgba(0,0,0,0.24);
        cursor:pointer;
    }

    
`