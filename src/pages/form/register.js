import React from 'react'
import {Card, Form, Input, Icon, Radio, InputNumber, Select, Switch, DatePicker, TimePicker, Upload, Checkbox, Button } from 'antd'
import './style.less'
import moment from 'moment'
import TextArea from 'antd/lib/input/TextArea';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

class FormRegister extends React.Component {

  state = {
    uploadImg: '',
    checked: true,
  }

  handleSubmit = () => {
    let info = this.props.form.getFieldsValue();
    console.log(JSON.stringify(info));
  }

  // 获取图片base64格式字符串
  getBase64 = (img, callback) => {
    const reader = new FileReader();
    // reader.result是一个base64格式的东西
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      // info.file.originFileObj是一个文件对象，得到一个
      this.getBase64(info.file.originFileObj, imageUrl => this.setState({
        uploadImg:imageUrl,
        loading: false,
      }));
    }
  }
  // 如果有自己的服务端，则不会使用getBase64，因为服务端会返回给我们图片的url地址

  render(){
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol:{
        xs: 24,
        sm:4,
      },
      wrapperCol:{
        xs:24,
        sm:12,
      }
    }
    const offsetLayout = {
      wrapperCol: {
        xs:24,
        sm: {
          span:12,
          offset:4,
        }
      }
    }

    return (
      <Card title="注册表单" className="card-wrap">
        <Form layout="horizontal">
          <FormItem label="用户名" {...formItemLayout}>
            {
              getFieldDecorator('username',{
                rules:[
                  { required: true, message:"用户名不能为空" }
                ]
              })(
                <Input prefix={<Icon type="user" />} placeholder="username" />
              )
            }
          </FormItem>
          <FormItem label="密码" {...formItemLayout}>
            {
              getFieldDecorator('password',{
                rules:[
                  { required: true, message:"密码不能为空" }
                ]
              })(
                <Input prefix={<Icon type="lock" />} placeholder="password" />
              )
            }
          </FormItem>
          <FormItem label="性别" {...formItemLayout}>
            {
              getFieldDecorator('male',{
                initialValue: '1',
              })(
                <RadioGroup>
                  <Radio value="1">男</Radio>
                  <Radio value="2">女</Radio>
                </RadioGroup>
              )
            }
          </FormItem>
          <FormItem label="年龄" {...formItemLayout}>
            {
              getFieldDecorator('age',{
                initialValue: '18',
              })(
                <InputNumber />
              )
            }
          </FormItem>
          <FormItem label="当前状态" {...formItemLayout}>
            {
              getFieldDecorator('status',{
                initialValue: '2',
              })(
                <Select>
                  <Option value="1">大一</Option>
                  <Option value="2">大二</Option>
                  <Option value="3">大三</Option>
                  <Option value="4">大四</Option>
                  <Option value="5">研一</Option>
                  <Option value="6">研二</Option>
                  <Option value="7">研三，终于毕业啦</Option>
                </Select>
              )
            }
          </FormItem>
          <FormItem label="爱好" {...formItemLayout}>
            {
              getFieldDecorator('habit',{
                initialValue: ['1','4','5','6'],
              })(
                <Select mode="multiple">
                  <Option value="1">吃饭</Option>
                  <Option value="2">睡觉</Option>
                  <Option value="3">打豆豆</Option>
                  <Option value="4">喝</Option>
                  <Option value="5">玩</Option>
                  <Option value="6">乐</Option>
                  <Option value="7">没啦</Option>
                </Select>
              )
            }
          </FormItem>
          <FormItem label="是否是学生" {...formItemLayout}>
            {
              getFieldDecorator('isStudent',{
                initialValue: true,
                valuePropName: 'checked',
              })(
                <Switch />
              )
            }
          </FormItem>
          <FormItem label="生日" {...formItemLayout}>
            {
              getFieldDecorator('birthday',{
                initialValue: new moment('2018-08-08 00:00:00'),
              })(
                <DatePicker
                  showTime
                  format="YYYY-MM-DD HH:mm:ss"
                />
              )
            }
          </FormItem>
          <FormItem label="地址" {...formItemLayout}>
            {
              getFieldDecorator('address',{
                initialValue: '北京市海淀区西土城路10号北京邮电大学',
              })(
                <TextArea 
                  autosize={
                    {minRows:1, maxRows:6}
                  }
                />
              )
            }
          </FormItem>
          <FormItem label="起床时间" {...formItemLayout}>
            {
              getFieldDecorator('getUp',{
              })(
                <TimePicker
                  defaultValue={moment('12:08:23', 'HH:mm:ss')}
                />
              )
            }
          </FormItem>
          <FormItem label="上传图片" {...formItemLayout}>
            {
              getFieldDecorator('uploadImg',{
              })(
                <Upload
                  listType="picture-card"
                  showUploadList={false}
                  action="//jsonplaceholder.typicode.com/posts/"
                  onChange={this.handleChange}
                >
                  {this.state.uploadImg ? <img src={this.state.uploadImg} alt="avatar" /> : <Icon type="plus" />}
                </Upload>
              )
            }
          </FormItem>
          <FormItem {...offsetLayout}>
            {
              getFieldDecorator('read',{
              })(
                <Checkbox checked={this.state.checked}>我已阅读此协议</Checkbox>
              )
            }
          </FormItem>
          <FormItem {...offsetLayout}>
            {
              getFieldDecorator('reg',{
              })(
                <Button type="primary" onClick={this.handleSubmit}>注册</Button>
              )
            }
          </FormItem>
                      
          {/* 当前状态单选  爱好多选  switch是否上学  datePicker生日  联系地址Input.TextArea  早期时间TimePicker  上传插件Upload 阅读协议Checkbox  button注册*/}
        </Form>
      </Card>
    );
  }
}
export default Form.create()(FormRegister);