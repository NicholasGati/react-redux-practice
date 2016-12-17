import React from "react";

export const Main = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <h1>Main Page</h1>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <button className="btn btn-primary" onClick={() => props.changeUserName("Marie")}>Change username</button>
          </div>
        </div>
      </div>
    </div>
  );
}
