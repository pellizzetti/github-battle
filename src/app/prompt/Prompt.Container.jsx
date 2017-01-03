import React, { Component, PropTypes } from 'react';
import PromptComponent from './Prompt.Component';

class PromptContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { username: '' };
    this.handleSubmitUsername = this.handleSubmitUsername.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
  }
  handleSubmitUsername(e) {
    e.preventDefault();
    const username = this.state.username;
    this.setState({ username: '' });

    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/confirmBattle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: username,
        },
      });
    } else {
      this.context.router.push(`/playerTwo/${username}`);
    }
  }
  handleChangeUsername(e) {
    this.setState({ username: e.target.value });
  }
  render() {
    return (
      <PromptComponent
        onSubmitUsername={this.handleSubmitUsername}
        onChangeUsername={this.handleChangeUsername}
        header={this.props.route.header}
        username={this.state.username}
      />
    );
  }
}

PromptContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

PromptContainer.propTypes = {
  routeParams: PropTypes.objectOf(PropTypes.string).isRequired,
  route: PropTypes.shape({
    component: PropTypes.func.isRequired,
    header: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }),
};

export default PromptContainer;
