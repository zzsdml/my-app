import React from 'react'
import {Card, Form, Input, Button, Icon, message, Checkbox} from 'antd'
import './style.less'
const FormItem = Form.Item;

class FormLogin extends React.Component {

  handleSubmit = () => {
    let userinfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, values) => {
      if(!err){
        message.success(`登陆成功，用户名为${userinfo.username},密码为${userinfo.password}`);
      }
    })
    
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <div>
        <Card title="登陆表单" className="card-wrap">
          <Form
            style={{width:300}}
            
          >
            <FormItem>
              {
                getFieldDecorator('username', {
                  initialValue:'',
                  rules: [
                    { required: true, message: '用户名不能为空!' },
                    { min: 5, max: 10, message: '用户名长度不在范围内'},
                    { pattern: new RegExp('^\\w+$', 'g'), message: '用户名必须为英文字母或数字' }
                  ]
                })(
                <Input prefix={<Icon type="user" />} placeholder="username" />
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('password', {
                  initialValue:'',
                  rules: [
                    { required: true, message: '密码不能为空!' },
                    { min: 5, max: 10, message: '密码长度不在范围内'}
                  ]
                })(
                  <Input prefix={<Icon type="lock" />} placeholder="password"></Input>
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('remember',{
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>remember me</Checkbox>
                )
              }
              <a href="#" style={{float: "right"}}>忘记密码</a>
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={this.handleSubmit}>login</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}
export default Form.create()(FormLogin);