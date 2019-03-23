import React from 'react'
export default class Child extends React.Component{
  conponentWillMount(){
    console.log('will mount');
  }
  componentDidMount(){
    console.log('did mount');
  }
  componentWillReceiveProps(newProps){
    console.log('will receive new props: ' + newProps.name);
  }
  componentWillUpdate(){
    console.log('will update');
  }
  componentDidUpdate(){
    console.log('did update');
  }

  render (){
    return (
      <div>
        <div>这是子组件的内容</div>
        <p>{this.props.name}</p>
      </div>
    )
  }
}
