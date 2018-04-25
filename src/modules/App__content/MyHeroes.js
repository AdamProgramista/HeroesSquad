import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App__content.css';
import * as actionCreators from '../../actions/index'

class MyHeroes extends Component {
  render() {
    console.log('this.props myheroes', this.props);
    return (
      <div className="heroes-container">
        <h3>My Heroes</h3>
        {this.props.myHeroes.map(hero => (
          <div key={hero.id} className="heroes-container__item">
            <span>{hero.name}</span>
            <div className="btn" onClick={() => this.props.onRemoveHeroById(hero.id)}>x</div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myHeroes: state.myHeroes
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveHeroById: (id) => dispatch(actionCreators.removeHeroById_action(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyHeroes);