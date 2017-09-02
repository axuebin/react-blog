import React from 'react';
import { Route } from 'react-router-dom';

export default class Article extends React.Component {
  constructor(props){
    super(props);
    console.log( this.props.match);
  }
  render() {
    return (
      <div className="article">
        <h2>id</h2>
        <p>{this.props.match.params.id}</p>
      </div>
    );
  }
}
