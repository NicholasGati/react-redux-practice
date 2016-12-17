import React from "react";

export const Main = (props) => {
  console.log(props);
  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <h1>Main Page</h1>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="col-xs-4">
              <p>Change name: </p>
              <input type="text"  />
            </div>
            <div className="col-xs-8">
              <button className="btn btn-primary" onClick={() => props.changeUserName()}>Change name</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
