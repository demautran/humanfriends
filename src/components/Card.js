import React from "react";

const Card = ({ name, email }) => {
  return (
    <div className="card-box tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="A regular desc" src={`https://robohash.org/${name}.png?set=set5&size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;