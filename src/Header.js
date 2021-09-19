import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { Avatar ,IconButton } from '@material-ui/core'
import styled from "styled-components"
import SearchIcon from "@material-ui/icons/Search"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from "@material-ui/icons/Notifications"


function Header() {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img  src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" srcset="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png 1x, https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png 2x " alt="" aria-hidden="true"></img>
            </HeaderLeft>

            <HeaderMid>
                <SearchIcon />
                <input placeholder="Search mail" type="text" />
                <ArrowDropDownIcon />
            </HeaderMid>

            <HeaderRight>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <Avatar />
                </IconButton>
            </HeaderRight>

        </HeaderContainer>       
    )
}

export default Header

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid whitesmoke;
`;

const HeaderLeft = styled.div`
    flex: 0.2;
    display: flex;
    margin-top: 5px;
    margin-left: 10px;
    > img {
        width: 109px;
        height: 40px;
    }
`;

const HeaderMid = styled.div`
    flex: 0.6;
    display: flex;
    background-color: whitesmoke;
    align-items: center;
    padding: 10px;
    border-radius: 5px;

    > .MuiSvgIcon-root {
        color: gray;
    }

    > input {
        border: none;
        width: 100%;
        padding: 10px;
        outline-width: 0;
        background-color: transparent;
        font-size: medium;
        
    }
`;

const HeaderRight = styled.div`
    flex: 0.2;
    
`;