import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/reducers/usersReducer";
import { UserContent, UserContentWrapper } from "./style";

const Users = () => {
  // eslint-disable-next-line
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  const { allUsers } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await dispatch(getAllUsers());
      setUsers(fetchedUsers.payload.data);
    };

    if (!allUsers?.length) {
      fetchUsers();
    }
  }, [dispatch, allUsers]);

  return (
    <UserContentWrapper>
      {users?.map((user) => (
        <UserContent key={user.id}>
          <h2>Name: {user.name}</h2>
          <p>Username: {user.username}</p>
          <span>Email: {user.email}</span>
        </UserContent>
      ))}
    </UserContentWrapper>
  );
};

export default Users;
