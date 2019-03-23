import React from 'react'
import { Row, Col } from 'antd';
import './index.less'
import Util from './../../utils/utils'
import axios from './../../axios'

export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  componentWillMount(){
    this.setState({
      name: 'hahahha',
    });

    setInterval(()=>{
      let time = Util.formateDate(new Date().getTime());
      this.setState({
        time
      })
    },1000);

    // this.getWeatherAPIDate();
  }

  getWeatherAPIDate = () => {
    let city = "101010100";
    axios.jsonp({
      url: 'https://free-api.heweather.net/s6/weather?location=CN'+city+'&key=fa311c351a814600bf23edb6c290b088',
    }).then((res) => {
      // if(res.status == 'success'){
      //   //输出setState
      // }
    })
  }

  render() {
    return(
      <div className="header">
        <Row className="header-top">
          <Col span="24">
            <span>hello {this.state.name}</span>
            <a href="#">exit</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span="4" className="breadcrumb-title">
            首页
          </Col>
          <Col span="20" className="breadcrumb-info">
            <span className="date">{this.state.time}</span>
            <span className="weather-detail">晴转多云</span>
          </Col>
        </Row>
      </div>
    );
  }
}