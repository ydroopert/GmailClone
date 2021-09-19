import React from 'react';
import './App.css';
import Header from "./Header"
import Sidebar from './Sidebar';
import styled from "styled-components";
import Mail from './Mail';
import EmailList from './EmailList';
import { useSelector } from 'react-redux'
import { selectMail } from './features/mailSlice'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SendMail from './SendMail';

function App() {

  const sendMessageIsOpen = useSelector(selectMail)
  return (
    <Router>
      <AppBody>
        <Header />
        <br />

        <Sidebar />

        <Switch>
          <Route path="/mail">
            <Mail />
          </Route>
          <Route path="/">
            <EmailList />
          </Route>

        </Switch>
        {sendMessageIsOpen && <SendMail />}
      </AppBody>


    </Router>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`

