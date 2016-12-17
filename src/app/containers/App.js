import React from "react";
import { connect } from "react-redux";

import { Main } from "../components/Main";
import { User } from "../components/User";

// App component
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Main changeUserName={() => this.props.setName("jaime")}/>
        <User username={this.props.user.name} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    math: state.mathReducer
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: "SET_NAME",
        payload: name
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

//https://www.youtube.com/watch?v=tfuZ7uZmVyg&t=929s&index=7&list=PL55RiY5tL51rrC3sh8qLiYHqUV3twEYU_
