import React from "react";

const User = (props) => {
  let { name, gender, email, picture } = props.user[0];
  return (
    <div>
      <div>
        <div style={{ border: "2px solid black", maxWidth: "600px", margin: "10px  auto" }}>
          <h2>Name: {name.title + " " + name.first + " " + name.last}</h2>
          <h2>Email: {email}</h2>
          <h2>Gender: {gender}</h2>
          <img src={picture.medium} alt={name.title + " " + name.first + " " + name.last} />
        </div>
      </div>
    </div>
  );
};

export default User;
