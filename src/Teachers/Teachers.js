import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom"
import TeachersList from './TeachersList'
import Teacher from 'Teacher'

class TeachersPage extends Component {
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    const { location } = this.props;

    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation.pathname !== location.pathname
    );
    return (
      <div className="teachers">
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/teachers" component={TeachersList} />
          <Route path="/teacher/:id" component={Teacher} />
        </Switch>
        {isModal ? <Route path="/teacher/:id" component={Modal} /> : null}
      </div>
    );
  }
}

const Modal = ({ history }) => {
  const back = e => {
    e.stopPropagation();
    history.goBack();
  };
  return (
    <div
      onClick={back}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.15)"
      }}
    >
      <div
        className="modal"
        style={{
          position: "absolute",
          background: "#fff",
          top: 25,
          left: "10%",
          right: "10%",
          padding: 15,
          border: "2px solid #444"
        }}
      >
        <Teacher />
        <button type="button" onClick={back}>
          Close
        </button>
      </div>
    </div>
  );
};

export default TeachersPage;

