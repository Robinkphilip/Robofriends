import React from "react";

const Card = ({ id, name, username, email }) => {
  return (
    <div className="bg-light-silver dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <h5>{username}</h5>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;