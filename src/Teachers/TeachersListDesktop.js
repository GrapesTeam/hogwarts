import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TeacherCard from './TeacherCard';
import { actions } from './teachersModule';
import { connect } from 'react-redux';

class TeachersList extends Component {
  static propTypes = {
    teachers: PropTypes.object.isRequired
  };

  handleClick = () => {
    this.props.loadTeachers();
  };

  render() {
    const { teachers } = this.props;
    return (
      <div className="teachers-list">
        <button onClick={this.handleClick}>Load teachers</button>
        {teachers.data.map(teacher => (
          <TeacherCard key={teacher.id} {...teacher} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  teachers: state.teachers
});

const mapDispatchToProps = {
  ...actions
};

export default connect(mapStateToProps, mapDispatchToProps)(TeachersList);
