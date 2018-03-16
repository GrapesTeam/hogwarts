import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom"
import TeachersList from './TeachersList'
import Teacher from 'Teacher'

export class TeachersPage extends Component {
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
      this.previousLocation !== location
    );
    console.log(isModal)
    return (
      <div className="teachers">
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/teachers" component={TeachersList} />
          <Route path="/teacher" component={Teacher} />
        </Switch>
      </div>
    );
  }
}

export default TeachersPage;

