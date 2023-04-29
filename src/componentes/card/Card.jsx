import React from "react";
import './card.css';

const Card = ({users}) => {
  return  (
    <li>
      {users.name.first} {users.name.last}
    </li>
)};

export default Card;
