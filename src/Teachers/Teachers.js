import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from "react-router-dom"
import TeachersList from './TeachersList'
import TeachersListTablet from './TeachersListTablet'
import TeachersListMobile from './TeachersListMobile'
import Teacher from 'Teacher'
import TeacherTablet from 'TeacherTablet'
import TeacherMobile from 'TeacherMobile'

class TeachersPage extends Component {
  previousLocation = this.props.location;

  static contextTypes = {
    device: PropTypes.string
  }

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
    const { device } = this.context;
    const { location } = this.props;

    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation.pathname !== location.pathname
    );
    return (
      <div className="teachers">
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/teachers" render={() => {
            if (device === 'desktop') {
              return <TeachersList />
            } else if (device === 'tablet') {
              return <TeachersListTablet />
            } else if (device === 'mobile') {
              return <TeachersListMobile />
            } else {
              return <TeachersList />
            }
          }} />
          <Route path="/teacher/:id" render={() => {
            if (device === 'desktop') {
              return <Teacher />
            } else if (device === 'tablet') {
              return <TeacherTablet />
            } else if (device === 'mobile') {
              return <TeacherMobile />
            } else {
              return <Teacher />
            }
          }} />
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

