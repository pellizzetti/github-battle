import React, { Component, PropTypes } from 'react';
import ConfirmBattleComponent from './ConfirmBattle.Component';
import githubApiHelper from '../utils/githubApi.Helper';

class ConfirmBattleContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      playersInfo: [],
    };
    this.handleInitiateBattle = this.handleInitiateBattle.bind(this);
  }

  componentDidMount() {
    const query = this.props.location.query;
    githubApiHelper.getUsersInfo([query.playerOne, query.playerTwo])
      .then((players) => {
        this.setState({
          isLoading: false,
          playersInfo: players,
        });
      });
  }

  handleInitiateBattle() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo,
      },
    });
  }

  render() {
    return (
      <ConfirmBattleComponent
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattle}
        playersInfo={this.state.playersInfo}
      />
    );
  }

}

ConfirmBattleContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

ConfirmBattleContainer.propTypes = {
  location: PropTypes.objectOf(PropTypes.any),
};

export default ConfirmBattleContainer;
