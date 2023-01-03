import React, { useEffect, useState } from "react";

const RandomUsers = () => {
  let [users, setUsers] = useState([]);
  const getUsers = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
    console.log("count", " => Line No: 9");
  };
  useEffect(() => {
    getUsers();
  }, []);
  const handleGetUser = () => {
    getUsers();
  };

  return (
    <div>
      <h4>
        <button onClick={handleGetUser}>New User</button>
      </h4>
      <div style={{ border: "2px solid black", maxWidth: "600px", margin: "10px  auto" }}>
        <h2>Name: {users[0]?.name.title + " " + users[0]?.name.first + " " + users[0]?.name.last}</h2>
        <h2>Email: {users[0]?.email}</h2>
        <h2>Gender: {users[0]?.gender}</h2>
        <img src={users[0]?.picture.medium} alt={users[0]?.name.title + " " + users[0]?.name.first + " " + users[0]?.name.last} />
      </div>
    </div>
  );
};

export default RandomUsers;
