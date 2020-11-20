import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";

function EachChat() {
  return (
    <EachChatDiv>
      <Avatar />
      <div className="chat__info">
        <h4>chat1</h4>
        <p>This is a first chat</p>
      </div>
    </EachChatDiv>
  );
}

const EachChatDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  &:hover {
    background-color: lightpink;
  }

  & .chat__info {
    margin-left: 15px;
    & > h4 {
      margin-bottom: 5px;
    }
  }
`;

export default EachChat;
