import React, { PropTypes } from 'react';
import { transparentBg } from '../styles';

const PromptComponent = props =>
  <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
    <h1>{props.header}</h1>
    <div className="col-sm-12">
      <form onSubmit={props.onSubmitUsername}>
        <div className="form-group">
          <input
            className="form-control"
            onChange={props.onChangeUsername}
            placeholder="Github Username"
            type="text"
            value={props.username}
          />
        </div>
        <div className="form-group col-sm-4 col-sm-offset-4">
          <button className="btn btn-block btn-success" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  </div>;

PromptComponent.propTypes = {
  onSubmitUsername: PropTypes.func.isRequired,
  onChangeUsername: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default PromptComponent;
