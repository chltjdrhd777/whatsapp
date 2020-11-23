import React from "react";
import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";
import CachedIcon from "@material-ui/icons/Cached";
import MessageIcon from "@material-ui/icons/Message";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import EachChat from "./EachChat";

function Sidebar() {
  return (
    <SidebarDiv>
      <div className="sidebar__header">
        <Avatar src="https://m.media-amazon.com/images/M/MV5BMjE0MjIwMDE2MV5BMl5BanBnXkFtZTgwMzM5MDQzNTM@._V1_.jpg" />

        <div className="sidbar_headerIcons">
          <IconButton>
            <CachedIcon />
          </IconButton>
          <IconButton>
            <MessageIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      {/* header end */}

      <div className="siderbar__bottom">
        <div className="sidebar__search">
          <SearchIcon />
          <input
            type="text"
            className="search__input"
            placeholder="Search or start new chat"
          />
        </div>

        <div className="sidebar__chats">
          <h2 className="sidebar__chatTitle">Add new chat</h2>

          <div className="sidebar__chatList">
            <EachChat />
            <EachChat />
            <EachChat />
          </div>
        </div>
      </div>
    </SidebarDiv>
  );
}

const SidebarDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.3;
  border-right: 1px solid #efefef;

  & .sidebar__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    & .sidbar_headerIcons {
      color: gray;
      & > button {
        padding: 10px;
      }
    }
  }

  //? sidebar_header end

  & .siderbar__bottom {
    background: #efefef;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    & .sidebar__search {
      display: flex;
      align-items: center;
      background: white;
      width: 90%;
      margin-top: 10px;
      border-radius: 10px;
      height: 45px;
      color: gray;
      box-shadow: 1px 1px 10px 0px lightgray;
      margin-bottom: 10px;

      & > input {
        border: none;
        outline: none;
        padding: 10px;
        background-color: transparent;
      }

      & > svg {
        margin-left: 5px;
      }
    }

    //? sidebar_bottomSearch end
    & .sidebar__chats {
      background-color: white;
      box-shadow: 1px 1px 10px 0px lightgray;
      width: 90%;
      height: 90%;
      border-radius: 7px;

      & .sidebar__chatTitle {
        padding: 20px;
      }

      & .sidebar__chatList {
        margin-left: 20px;
        height: 600px;
        overflow: auto;
        ::-webkit-scrollbar {
          background: transparent;
        }
      }
    }
  }
`;

export default Sidebar;
