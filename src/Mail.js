import { IconButton } from "@material-ui/core"
import styled from "styled-components"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArchiveIcon from '@material-ui/icons/Archive';
import ReportIcon from '@material-ui/icons/Report';
import DeleteIcon from '@material-ui/icons/Delete';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import LabelIcon from '@material-ui/icons/Label';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TranslateIcon from '@material-ui/icons/Translate';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectedOpenMail } from "./features/mailSlice";

function Mail() {
    const history = useHistory()
    const selectedMail = useSelector(selectedOpenMail)

    return (
        <MailListContainer>
            <ToolsContainer>
                <ToolsLeft>
                    <IconButton>
                        <ArrowBackIcon onClick={() => history.push("/")} />
                    </IconButton>
                    <IconButton>
                        <ArchiveIcon />
                    </IconButton>
                    <IconButton>
                        <ReportIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <MarkunreadIcon />
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>
                    <IconButton>
                        <CreateNewFolderIcon />
                    </IconButton>
                    <IconButton>
                        <LabelIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </ToolsLeft>

                <ToolsRight>
                    <p>1 of 555 </p>
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <TranslateIcon />
                    </IconButton>
                </ToolsRight>
            </ToolsContainer>
            <TitleContainer>
                <h3>{selectedMail?.subject}</h3>  <p>- {selectedMail?.description}</p>
            </TitleContainer>
            <h2>{selectedMail?.title}</h2>
            <p>{selectedMail?.message}</p>
        </MailListContainer>
    )
}

export default Mail

const MailListContainer = styled.div`
    margin-top: 60px;
    flex:1;
    overflow: scroll;
`

const ToolsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const ToolsRight = styled.div`
    flex: 0.1;
    display: flex;
    align-items: center;
`

const ToolsLeft = styled.div`
    flex :0.4;
`

const TitleContainer = styled.div`
    display: flex;
    border-bottom: 1px solid whitesmoke;
    > h3, p{
        margin-left: 50px;
        display: inline;
        font-size: 32px;
    }
`