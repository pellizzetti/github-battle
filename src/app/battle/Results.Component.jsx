import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from '../styles';
import UserDetails from './UserDetails.Component';

const StartOver = () =>
  <div className="col-sm-12" style={styles.buttonSpace}>
    <Link to="/playerOne">
      <button type="button" className="btn btn-lg btn-danger">Start Over</button>
    </Link>
  </div>;

const Tie = () =>
  <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
    <h1>It&#39;s a Tie!</h1>
    <StartOver />
  </div>;

const ResultsComponent = (props) => {
  if (props.isLoading) {
    return (<div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <h1>Loading...</h1>
    </div>);
  }
  if (props.scores[0] === props.scores[1]) {
    return <Tie />;
  }
  const winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  const losingIndex = winningIndex === 0 ? 1 : 0;
  return (
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-6">
          <p className="lead">Winner</p>
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </div>
        <div className="col-sm-6">
          <p className="lead">Loser</p>
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
        </div>
      </div>
      <StartOver />
    </div>
  );
};

ResultsComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.arrayOf(PropTypes.any).isRequired,
  scores: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default ResultsComponent;
