import React from 'react';
import { Link } from 'react-router';
import { transparentBg } from '../styles';

const HomeComponent = () =>
  <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
    <h1>Github Battle</h1>
    <p className="lead">It&#39;s show time!</p>
    <Link to="/playerOne">
      <button type="button" className="btn btn-lg btn-success">Get Started</button>
    </Link>
  </div>;

export default HomeComponent;
