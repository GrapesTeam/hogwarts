import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import TeachersListTablet from 'Teachers/TeachersList/TeachersListTablet';
import TeacherCard from 'Teachers/TeacherCard';

const teachers = {
  data: [
    {
      id: 1,
      nickname: 'jack',
      oms_apply_video_url: 'video url'
    },
    {
      id: 2,
      nickname: 'jack'
    }
  ]
};
const mockStore = configureMockStore();
jest.mock('../module/teachers', () => ({
  actions: {
    loadTeachers: () => ({
      type: 'LOAD_TEACHERS'
    })
  }
}))

describe('Teachers page', () => {
  let store
  beforeEach(() => {
    store = mockStore({
      teachers
    })
  })

  it('should load teachers after click', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <TeachersListTablet />
        </MemoryRouter>
      </Provider>
    );
    wrapper.find('button').simulate('click');
    expect(store.getActions()).toEqual([{"type": "LOAD_TEACHERS"}]);
  });

  it('should add teachers card list', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <TeachersListTablet />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper).toContainReact(<TeacherCard {...teachers.data[0]} />);
  });
});
