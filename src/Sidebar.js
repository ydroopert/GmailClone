import React from 'react'
import styled from "styled-components"
import { Button,IconButton } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import SidebarOption from './SidebarOption'
import InboxIcon from "@material-ui/icons/Inbox"
import StarIcon from "@material-ui/icons/Star"
import NearMeIcon from "@material-ui/icons/NearMe"
import NoteIcon from "@material-ui/icons/Note"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import PhoneIcon from "@material-ui/icons/Phone"
import DuoIcon from "@material-ui/icons/Duo"
import PersonIcon from "@material-ui/icons/Person"
import { useDispatch } from "react-redux"
import { openMessage } from "./features/mailSlice"

function Sidebar() {
    const dispatch = useDispatch()

    return (
        <SidebarContainer>

            <SidebarCompose>
                <Button startIcon={<AddIcon fontSize="large"/>}
                onClick={()=> dispatch(openMessage())}
                >Compose</Button>
            </SidebarCompose>

            <SidebarOption Icon={InboxIcon} title="Inbox" number={5} selected={true}/>
            <SidebarOption Icon={StarIcon} title="Starred" number={4}/>
            <SidebarOption Icon={NearMeIcon} title="Near" number={4}/>
            <SidebarOption Icon={NoteIcon} title="Note" number={4}/>
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={4}/>

            <SidebarFooter>
                <IconButton>
                    <PersonIcon />
                </IconButton>
                <IconButton>
                    <DuoIcon />
                </IconButton>
                <IconButton>
                    <PhoneIcon />
                </IconButton>
            </SidebarFooter>
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    margin-top: 60px;
    flex: 0.1;
`

const SidebarCompose = styled.div`

> .MuiButton-root {
    margin-top: 15px;
    margin-left: 10px;
    margin-bottom: 15px;
    text-transform: capitalize;
    color: gray;
    padding: 15px;
    border-radius: 30px;
    box-shadow: 0px 2px 5px -2px rgba(0,0,0,0.75);}
`

const SidebarFooter = styled.div`
    display: flex;
    justify-content: center;
`