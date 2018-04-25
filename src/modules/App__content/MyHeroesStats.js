import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App__content.css';

class MyHeroes extends Component {
  strength = () => {
    let strength = 0;
    this.props.myHeroes.forEach(hero => strength += hero.strength);
    return strength;
  }

  intelligence = () => {
    let intelligence = 0;
    this.props.myHeroes.forEach(hero => intelligence += hero.intelligence);
    return intelligence;
  }

  speed = () => {
    let speed = 0;
    this.props.myHeroes.forEach(hero => speed += hero.speed);
    return speed;
  }

  render() {
    console.log('this.props myheroesstats', this.props);
    return (
      <div className="heroes-container">
        <h3>My Heroes Stats</h3>
        <div className="heroes-container__item">
          <span><b>Strength:</b></span><span>{this.strength()}</span>
        </div>
        <div className="heroes-container__item">
          <span><b>Intelligence:</b></span><span>{this.intelligence()}</span>
        </div>
        <div className="heroes-container__item">
          <span><b>Speed: </b></span><span>{this.speed()}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myHeroes: state.myHeroes
  };
}

export default connect(mapStateToProps, null)(MyHeroes);