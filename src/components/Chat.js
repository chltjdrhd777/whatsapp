import React from "react";
import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SettingsVoiceIcon from "@material-ui/icons/SettingsVoice";
function Chat({ messages }) {
  return (
    <ChatDiv>
      <div className="Chat_header">
        <div className="Chat_header_right">
          <Avatar className="Header_Avatar" />
          <div className="hedear_right_info">
            <h3>Chat Name</h3>
            <small>detail</small>
          </div>
        </div>

        <div className="Chat_header_icons">
          <IconButton>
            <SearchIcon />
          </IconButton>

          <IconButton>
            <AttachFileIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      {/* chat header end */}

      <div className="Chat_body">
        {messages.map((message) => (
          <p
            className={`chat_messages ${message.received && "chat_receiver"}`}
            key={Math.random()}
          >
            <span className="chat_name">{message.name}</span>
            {message.message}
            <span className="chat_timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>

      <div className="Chat_input">
        <InsertEmoticonIcon />

        <div className="Chat_input_typingMessage">
          <form>
            <input type="text" placeholder="Type your message" />
            <button type="submit">send this</button>
          </form>
        </div>

        <SettingsVoiceIcon />
      </div>
    </ChatDiv>
  );
}

const ChatDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.7;

  & .Chat_header {
    border-bottom: 1px solid lightgray;
    display: flex;
    align-items: center;
    height: 11%;

    & .Chat_header_right {
      flex: 1;
      display: flex;
      padding: 15px;

      & > .Header_Avatar {
        margin-right: 10px;
      }

      & small {
        color: gray;
        font-weight: 500;
      }
    }
    //? header right end

    & .Chat_header_icons {
      & > svg {
        padding: 15px;
        cursor: pointer;
        color: gray;
      }
    }
  }
  //? CHAT HEADER END

  & .Chat_body {
    flex: 1;
    background-image: url("https://img.freepik.com/free-photo/paperboard-texture_95678-72.jpg?size=626&ext=jpg");
    background-repeat: repeat;
    background-position: center;
    padding: 30px;
    overflow: auto;

    ::-webkit-scrollbar {
      color: transparent;
    }

    & .chat_messages {
      position: relative;
      font-size: 17px;
      padding: 10px;
      width: fit-content;
      background-color: #ffffff;
      border-radius: 10px;
      margin-bottom: 50px;
      margin-top: 10px;

      & .chat_timestamp {
        margin-left: 10px;
        font-size: x-small;
      }

      & .chat_name {
        position: absolute;
        top: -25px;
        font-weight: 700;
      }
    }

    & .chat_receiver {
      background-color: #e3faa5;
      margin-left: auto;
    }
  }
  //? CHAT_BODY_END

  & .Chat_input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    border-top: 1px solid lightgray;
    padding: 0 10px;

    & > svg {
      cursor: pointer;
      padding: 10px;
      &:hover {
        color: gray;
      }
    }

    & .Chat_input_typingMessage {
      flex: 1;

      & > form {
        flex: 1;
        display: flex;
      }

      & > form > input {
        flex: 1;
        border-radius: 30px;
        padding: 10px;
        border: none;
        outline: none;
      }

      & > form > button {
        display: none;
      }
    }
  }
`;

export default Chat;
