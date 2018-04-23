import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App__content.css';

class MyHeroes extends Component {
  render() {
    return (
      <div className="heroes-container">
        <h3>My Heroes</h3>
        {this.props.myHeroes.map(hero => (
          <div key={hero.id} className="heroes-container__item">
            <span>{hero.name}</span>
            <div className="btn" onClick={() => this.props.removeHeroById_action(hero.id)}>x</div>
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
    removeHeroById_action: (id) => dispatch({ type: 'REMOVE_HERO', id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyHeroes);