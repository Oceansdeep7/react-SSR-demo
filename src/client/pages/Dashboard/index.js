import React from 'react';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  handlerClick(){
    alert('触发了');
  }

  render() {
    return <h1 onClick={this.handlerClick}>click here!</h1>
  }
}
