import { Checkbox, IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styled from 'styled-components';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings'
import EmailRow from './EmailRow';

import { collection, onSnapshot } from "firebase/firestore";
import { db } from './firebase';
function EmailList() {

    const [emails, setEmails] = useState([])

    useEffect(() => {
        onSnapshot(collection(db, "email"), (collection) => {
            setEmails(
                collection.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        })
    }, [])
    return (
        <EmailListContainer>
            <EmailListSettings>
                <SettingsLeft>
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </SettingsLeft>
                <SettingsRight>
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </SettingsRight>
            </EmailListSettings>
            {emails.map(({ id, data: { to, subject, message, timestamp } }) =>
            (<EmailRow
                id={id}
                key={id}
                title={to}
                subject={subject}
                description={message}
                time={new Date(timestamp?.seconds * 1000).toUTCString()}
            />)
            )}


        </EmailListContainer>
    )
};

export default EmailList;

const EmailListContainer = styled.div`
    margin-top: 60px;
    flex:1;
    overflow: scroll;
`

const EmailListSettings = styled.div`
    display:flex;
    top: 0;
    justify-content: space-between;
    position: sticky;
    border-bottom: 1px solid whitesmoke;
    background-color: white;
    z-index: 999;
    padding-right: 10px;
`

const SettingsLeft = styled.div`
`

const SettingsRight = styled.div`

`