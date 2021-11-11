import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  // if (true) {
  //   throw new Error("...and then I said... Wait. Where am I? Did I die?")
  // }

  return (
    <div>
      {robots.map(user => {
        return <Card key={user.username} name={user.name} email={user.email} />
      })}
    </div>
  )
}

export default CardList;