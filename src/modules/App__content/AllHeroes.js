import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App__content.css';

class AllHeroes extends Component {
  
  render() {
    return (
      <div className="heroes-container">
        <h3>All Heroes</h3>
        {this.props.allHeroes.map(hero => (
          <div key={hero.id} className="heroes-container__item">
            <span>{hero.name}</span>
            <div className="btn" onClick={() => this.props.addHeroById_action(hero.id)}>+</div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allHeroes: state.allHeroes
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addHeroById_action: (id) => dispatch({ type: 'ADD_HERO', id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllHeroes);
