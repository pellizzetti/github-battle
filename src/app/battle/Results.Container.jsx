import React, { Component, PropTypes } from 'react';
import ResultsComponent from './Results.Component';
import githubApiHelper from '../utils/githubApi.Helper';

class ResultsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      scores: [],
    };
  }

  componentDidMount() {
    githubApiHelper.battle(this.props.location.state.playersInfo)
      .then((scores) => {
        this.setState({
          scores,
          isLoading: false,
        });
      });
  }

  render() {
    return (
      <ResultsComponent
        isLoading={this.state.isLoading}
        playersInfo={this.props.location.state.playersInfo}
        scores={this.state.scores}
      />
    );
  }

}

ResultsContainer.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.any)).isRequired,
  }),
};

export default ResultsContainer;
