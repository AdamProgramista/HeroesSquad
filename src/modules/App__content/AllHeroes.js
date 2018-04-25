import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App__content.css';
import * as actionCreators from '../../actions/index'

class AllHeroes extends Component {
  
  render() {
    console.log('this.props allheroes', this.props);
    return (
      <div className="heroes-container">
        <h3>All Heroes</h3>
        {this.props.allHeroes.map(hero => (
          <div key={hero.id} className="heroes-container__item">
            <span>{hero.name}</span>
            <div className="btn" onClick={() => this.props.onAddHeroById(hero.id)}>+</div>
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
    onAddHeroById: (id) => dispatch(actionCreators.addHeroById_action(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllHeroes);
