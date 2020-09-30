import React from "react";

function Card({icon,title, children}
) {
  return (
    // YOUR CODE HERE
    <div className="card mt-5">
      <div className="card-header">
        <h1>
          <i className={'fa fa-${icon}'} aria-hidden="true"/>
          </h1>
      </div>
    </div>
  );
}

export default Card;
