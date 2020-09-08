import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllUsers } from "../../redux/reducers/usersReducer";
import { ImageWrapper, UserContent, UserContentWrapper } from "./style";

const Users = () => {
  // eslint-disable-next-line
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const { allUsers } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const fetchedUsers = await dispatch(getAllUsers());
      setLoading(false);
      setUsers(fetchedUsers.payload.data);
    };

    if (!allUsers.length) {
      fetchUsers();
    }
  }, [dispatch, allUsers]);

  return (
    <UserContentWrapper>
      {allUsers.map((user) => (
        <UserContent
          key={user.id}
          onClick={() => {
            history.push(`/users/${user.id}`);
          }}
        >
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ImageWrapper>{<img alt="avatar" src={user.pics} />}</ImageWrapper>
          )}
          <p>
            <b>Name:</b> {user.name}
          </p>
          <p>
            <b>Username:</b> {user.username}
          </p>
          <span>
            <b>Email:</b> {user.email}
          </span>
          <span>
            <b>Company:</b> {user.company.name}
          </span>
        </UserContent>
      ))}
    </UserContentWrapper>
  );
};

export default Users;
