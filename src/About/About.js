import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions } from './teachersModule';

class About extends Component {
  static prototypes = {
    title: PropTypes.string.isRequired,
    teachers: PropTypes.array.isRequired,
    counter: PropTypes.func.isRequired
  };

  static defaultProps = {
    title: 'This is a title'
  };

  handleClick = () => {
    this.props.loadTeachers();
  }

  render() {
    const { title, teachers } = this.props;
    return (
      <div className="about">
        <div className="jumbotron">
          <h1>{title}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh elit, lobortis at tortor sed, posuere porttitor dui. Cras dolor ipsum, dapibus vel metus ut, ultrices congue orci. Ut tortor nibh, consectetur eget pharetra quis, laoreet eget lectus. Integer nec condimentum turpis. Maecenas ac placerat odio. Morbi euismod quam a metus commodo, et faucibus lacus accumsan. Etiam in orci rhoncus, eleifend odio eu, fringilla velit. Nunc viverra volutpat urna et suscipit. Nam malesuada condimentum turpis, in dignissim ex pharetra in.</p>
        </div>
        <button onClick={this.handleClick}>Teachers</button>
        {teachers.data.map(t =><p key={t.id}>{t.nickname}</p>)}
        <p>Etiam vitae velit gravida, fermentum mi id, tristique sapien. Vivamus varius varius ornare. Morbi ultrices sed nibh sed cursus. Cras porttitor metus elit, at rhoncus purus tincidunt et. Cras varius auctor imperdiet. Aliquam hendrerit volutpat vehicula. Duis aliquet augue at eleifend finibus. Vestibulum sollicitudin rutrum sodales. Curabitur blandit, dolor at gravida suscipit, nisi nulla tempor turpis, in vestibulum enim tortor ac ipsum. Donec dignissim semper diam, a vulputate ligula rutrum eu. Morbi vitae blandit justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. In commodo rhoncus sapien, sit amet laoreet dui pellentesque a.</p>
        <p>Ut in ex non enim cursus tincidunt. Morbi congue orci eget felis congue, id consectetur nisl imperdiet. Duis consectetur elit id nunc imperdiet pretium. Donec malesuada nulla in neque efficitur, vitae dignissim sapien pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas interdum purus metus, in hendrerit sem scelerisque at. Aenean volutpat gravida erat, semper gravida metus. Praesent varius tristique neque commodo fringilla. Cras varius nibh quis tellus ultrices, sit amet iaculis justo malesuada. Sed tempor quam a velit varius mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis laoreet consectetur metus. Donec molestie euismod leo at tincidunt. In blandit nibh eu nulla porttitor venenatis. Quisque tincidunt et est id ornare.</p>
        <p>Proin interdum finibus justo eu maximus. Donec in ante ligula. Phasellus sed felis ac enim pharetra viverra. Maecenas eget posuere elit. Nulla in posuere turpis. Fusce dictum volutpat libero, non ultrices mi congue vel. Cras eget mollis urna. Mauris auctor vitae risus facilisis dapibus. Curabitur commodo metus eu tempus fermentum. Nam metus turpis, fermentum a eros quis, dapibus tempus elit. Mauris nunc lacus, convallis vel ex vel, fringilla porttitor turpis. Integer sed vestibulum arcu, eu ultrices lorem. Aenean eu augue quis risus malesuada commodo vel nec justo. Vivamus at magna ultricies, rhoncus lacus at, tincidunt nibh. Nam orci massa, ullamcorper at vestibulum at, pharetra at quam.</p>
        <p>Proin non fermentum nibh. Duis justo tellus, lacinia blandit lacinia at, congue ac mauris. Aliquam facilisis massa quis enim rutrum consequat. Sed vehicula nisl at sem porttitor, non commodo eros imperdiet. Maecenas ut bibendum neque. Ut a turpis sed erat faucibus pretium. Duis fermentum orci ligula, at rhoncus lorem tristique vel. Fusce ornare eget neque ut viverra. Nunc posuere neque in lorem accumsan vulputate. Donec euismod ex id consectetur luctus. Mauris sollicitudin felis at luctus dictum. Fusce condimentum, mauris eu varius accumsan, orci mauris aliquet nunc, ac convallis enim neque in felis. In tincidunt, felis eu cursus posuere, nisi lorem consequat elit, ut placerat orci nisl sed erat.</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
