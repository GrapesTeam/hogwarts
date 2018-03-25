import React from 'react';
import { shallow } from 'enzyme';
import { TeachersPage } from 'Teachers/Teachers';
import TeacherCard from 'Teachers/TeacherCard';

const loadTeachers = jest.fn();

describe('Teachers page', () => {
  it('should load teachers after click', () => {
    const teachers = {
      data: []
    };
    const wrapper = shallow(
      <TeachersPage loadTeachers={loadTeachers} teachers={teachers} />
    );
    wrapper.find('button').simulate('click');
    expect(loadTeachers).toHaveBeenCalled();
  });

  it('should add teachers card list', () => {
    const teachers = {
      data: [
        {
          id: 123123,
          nickname: 'jack',
          oms_apply_video_url: 'video url'
        }
      ]
    };
    const wrapper = shallow(<TeachersPage teachers={teachers} />);
    expect(wrapper).toContainReact(<TeacherCard {...teachers.data[0]} />);
  });

  it('should add teachers card list without video', () => {
    const teachers = {
      data: [
        {
          id: 123123,
          nickname: 'jack'
        }
      ]
    };
    const wrapper = shallow(<TeachersPage teachers={teachers} />);
    expect(wrapper).toContainReact(<TeacherCard {...teachers.data[0]} />);
  });
});
