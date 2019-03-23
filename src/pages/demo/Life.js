import React from 'react'
import Child from './Child'
export default class Life extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        count: 0,
    };
  }
  handleAdd = () => {
    this.setState({
        count: this.state.count+1,
    });
  }

  render(){
    var style={
      padding: 50
    }
    return(
      <div style={style}>
        <h1>点击加1</h1>
        <button onClick={this.handleAdd}>点击</button>
        <p>{this.state.count}</p>
        <Child name={this.state.count}></Child>
      </div>
    );    
  }
}