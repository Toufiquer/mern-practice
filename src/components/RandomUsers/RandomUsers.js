import React, { useEffect, useState } from "react";
import User from "../User/User";

const RandomUsers = () => {
  let [users, setUsers] = useState([]);
  const getUsers = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUsers([data.results]));
  };
  useEffect(() => {
    getUsers();
  }, []);
  const handleGetUser = () => {
    getUsers();
  };
  const handleAddGetUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUsers([...users, data.results]));
  };
  return (
    <>
      <h4>
        <button onClick={handleGetUser}>New User</button>
        <button onClick={handleAddGetUser}>Add New User</button>
      </h4>
      {users.map((user, index) => (
        <User user={user} key={index}></User>
      ))}
    </>
  );
};

export default RandomUsers;
