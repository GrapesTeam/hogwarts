import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions } from './module/teachers';
import TeacherCard from './TeacherCard';

class Teachers extends Component {
  static prototypes = {
    teachers: PropTypes.array.isRequired
  };

  handleClick = () => {
    this.props.loadTeachers();
  }

  render() {
    const { teachers } = this.props;
    return (
      <div className="about">
        <button onClick={this.handleClick}>Load teachers</button>
        {teachers.data.map(teacher => <TeacherCard key={teacher.id} {...teacher} />)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Teachers);
