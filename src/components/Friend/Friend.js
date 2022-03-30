import React from "react";
import { useNavigate } from "react-router-dom";

const Friend = (props) => {
  const { name, email, username, id } = props.friend;

  const navigate = useNavigate();

  const showFriendDetails = () => {
    const path = `/friend/${id}`;
    navigate(path);
  };

  return (
    <div>
      <h2>Name:{name}</h2>
      <h3>E-mail: {email}</h3>
      <button onClick={showFriendDetails}>{username}</button>
    </div>
  );
};

export default Friend;
