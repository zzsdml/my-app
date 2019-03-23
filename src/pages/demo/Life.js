import React from 'react'
import Child from './Child'
import {Button} from 'antd'
// import 'antd/dist/antd.css'
import './style.less'
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
      <div className="content">
        <h1>点击加1</h1>
        <Button onClick={this.handleAdd}>antd click</Button>
        <button onClick={this.handleAdd}>点击</button>
        <p>{this.state.count}</p>
        <Child name={this.state.count}></Child>
      </div>
    );    
  }
}