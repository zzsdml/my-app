import React from 'react'
import {Card, Table, Radio, Modal} from 'antd'
import axios from './../../axios/index'

export default class BTable extends React.Component{

  state = {
    dataSource2: []
  }

  componentWillMount(){
    this.request();
  }

  request = () => {
    axios.ajax({
      url: 'table/list',
      data: {
        params: {
          page:1
        },
        isShowLoading: true,
      }
    }).then((res) => {
      if(res.code === 0){
        this.setState({
          dataSource2: res.result,
        })
      }
    })
  }

  onRowClick = (record, index) => {
    let selectKey = [index+1];
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record,
    });
    Modal.info({
      title: '选中的信息',
      content: `用户名：${record.username}  地址：${record.address}`,
    })
  }

  render(){
    const columns = [{
      title: '姓名',
      dataIndex: 'username',
      key: "username",
    },{
      title: '性别',
      dataIndex: 'sex',
      key: "sex",
      render(sex){
        return sex === 1 ? '女' : '男';
      }
    },{
      title: '状态',
      dataIndex: 'state',
      key: "state",
    },{
      title: '爱好',
      dataIndex: 'interest',
      key: "interest",
    },{
      title: '是否已婚',
      dataIndex: 'isMarried',
      key: "isMarried",
    },{
      title: '生日',
      dataIndex: 'birthday',
      key: "birthday",
    },{
      title: '地址',
      dataIndex: 'address',
      key: "address",
    },{
      title: '起床时间',
      dataIndex: 'time',
      key: "time",
    }];
    let {selectedRowKeys} = this.state;
    const rowSelection = {
      type: Radio,
      selectedRowKeys
    }

    return (
          
      <Card title="动态渲染表格">
        <Table
          bordered
          rowSelection={rowSelection}
          onRow={(record, index) => {
            return {
              onClick: () => {this.onRowClick(record, index)},       // 点击行
            };
          }}
          columns={columns}
          dataSource={this.state.dataSource2}
          pagination={false}
        />
      </Card>
    );
  }
}