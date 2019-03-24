import React from 'react'

export default class Info extends React.Component {
  render(){
    return (
      <div>
        <hr />
        
        this is Info 
        <span style={{color: 'red'}}>{this.props.match.params.value}</span>
      </div>
    );
  }
}