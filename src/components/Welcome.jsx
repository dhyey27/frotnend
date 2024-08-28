import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";

export default function Welcome({ currentUser }) {
    /*const [userName, setUserName] = useState("");
    useEffect(async () => {
        setUserName(await JSON.parse(localStorage.getItem("chat-app-current-user")).username);
    }, []);*/
  
    return (
        <Container>
            <img src={Robot} alt="" />
            <h1>
                Welcome, <span>{currentUser.userName}!</span>
            </h1>
            <h3>Please select a chat to Start Messaging.</h3>
        </Container>
      );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    flex-direction: column;
    img {
        height: 20rem;
    }
    span {
        color: #4e0eff;
    }
`;
