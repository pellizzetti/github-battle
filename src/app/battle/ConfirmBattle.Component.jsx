import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import UserDetailsComponent from './UserDetails.Component';
import styles from '../styles';

const ConfirmBattleComponent = (props) => {
  const isLoading = props.isLoading;
  return isLoading
  ?
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <h1>Loading...</h1>
    </div>
  :
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <h1>Confirm Players</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-6">
          <p className="lead">Player 1</p>
          <UserDetailsComponent info={props.playersInfo[0]} />
        </div>
        <div className="col-sm-6">
          <p className="lead">Player 2</p>
          <UserDetailsComponent info={props.playersInfo[1]} />
        </div>
      </div>
      <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-12" style={styles.buttonSpace}>
          <button
            type="button"
            className="btn btn-lg btn-success"
            onClick={props.onInitiateBattle}
          >Initiate Battle!</button>
        </div>
        <div className="col-sm-12" style={styles.buttonSpace}>
          <Link to="/playerOne">
            <button
              type="button"
              className="btn btn-lg btn-danger"
            >Reselect Players</button>
          </Link>
        </div>
      </div>
    </div>;
};

ConfirmBattleComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default ConfirmBattleComponent;
