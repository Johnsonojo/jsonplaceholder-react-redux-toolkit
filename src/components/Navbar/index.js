import EventNoteOutlinedIcon from "@material-ui/icons/EventNoteOutlined";
import InsertCommentOutlinedIcon from "@material-ui/icons/InsertCommentOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import MusicVideoOutlinedIcon from "@material-ui/icons/MusicVideoOutlined";
import PeopleOutlinedIcon from "@material-ui/icons/PeopleOutlined";
import PhotoCameraOutlinedIcon from "@material-ui/icons/PhotoCameraOutlined";
import React from "react";
import { useHistory } from "react-router-dom";
import { NavContentWrapper, NavLink, NavLinksWrapper, NavText } from "./style";

const Navbar = () => {
  const history = useHistory();
  return (
    <NavContentWrapper>
      <NavLinksWrapper>
        <NavLink
          onClick={() => {
            history.push("/posts");
          }}
        >
          <EventNoteOutlinedIcon />
          <NavText>Posts</NavText>
        </NavLink>

        <NavLink
          onClick={() => {
            history.push("/comments");
          }}
        >
          <InsertCommentOutlinedIcon />
          <NavText>Comments</NavText>
        </NavLink>

        <NavLink
          onClick={() => {
            history.push("/albums");
          }}
        >
          <MusicVideoOutlinedIcon />
          <NavText>Albums</NavText>
        </NavLink>

        <NavLink
          onClick={() => {
            history.push("/photos");
          }}
        >
          <PhotoCameraOutlinedIcon />
          <NavText>Photos</NavText>
        </NavLink>

        <NavLink
          onClick={() => {
            history.push("/todos");
          }}
        >
          <ListAltOutlinedIcon />
          <NavText>Todos</NavText>
        </NavLink>

        <NavLink
          onClick={() => {
            history.push("/");
          }}
        >
          <PeopleOutlinedIcon />
          <NavText>Users</NavText>
        </NavLink>
      </NavLinksWrapper>
    </NavContentWrapper>
  );
};

export default Navbar;
