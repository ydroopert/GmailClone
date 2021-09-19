import React from 'react'
import styled from 'styled-components'


function SidebarOption({Icon, title, number, selected}) {
    return (
        <SidebarOptionContainer>
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
        </SidebarOptionContainer>
    )
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 10px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
    color: #818181;

    > .MuiSvgIcon-root{
        padding: 5px;
    }
    > h3 {
        flex: 1;
        font-size: 14px;
        font-weight: 600;
    }
    > p {
        display:none;
        font-weight: 400;
    }

    :hover {
        background-color: #fcecec;
        color: #c04b37;
    }

    :hover > p {
        display:inline;
    }
`