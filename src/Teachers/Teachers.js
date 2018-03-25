import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { RouteWithSubRoutes } from 'routes';
import TeachersList, {
  TeachersListTablet,
  TeachersListMobile
} from './TeachersList';
import Teacher, { TeacherTablet, TeacherMobile } from 'Teacher';

class TeachersPage extends Component {
  previousLocation = this.props.location;
  routes = [
    {
      exact: true,
      path: '/teachers',
      desktop: TeachersList,
      tablet: TeachersListTablet,
      mobile: TeachersListMobile
    },
    {
      exact: true,
      path: '/teacher/:id',
      desktop: Teacher,
      tablet: TeacherTablet,
      mobile: TeacherMobile
    }
  ];

  static contextTypes = {
    device: PropTypes.string
  };

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    if (
      nextProps.history.action !== 'POP' &&
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
          {this.routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
        {isModal ? (
          <Route
            path="/teacher/:id"
            render={props => <Modal {...props} route={this.routes[1]} />}
          />
        ) : null}
      </div>
    );
  }
}

const Modal = ({ history, route }) => {
  const back = e => {
    e.stopPropagation();
    console.log(history);
    history.goBack();
  };
  return (
    <div
      onClick={back}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.15)'
      }}
    >
      <div
        className="modal"
        style={{
          position: 'absolute',
          background: '#fff',
          top: 25,
          left: '10%',
          right: '10%',
          padding: 15,
          border: '2px solid #444'
        }}
      >
        <RouteWithSubRoutes {...route} />
        <button type="button" onClick={back}>
          Close
        </button>
      </div>
    </div>
  );
};

export default TeachersPage;
