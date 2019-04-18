import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { util_fetch } from '../util/fetch';

class Login extends Component{
    constructor (props){
        super(props);
        this.state = {
        }
    }
    handleSubmit(e){
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('表单数据: ', values);
                const options = util_fetch('POST', values)
                fetch(URL.BASEURL + URL.USER_LOGIN, options)
                    .then(res => res.json())
                    .then(data => {
                        console.log('登录结果数据',data)
                    })
                    .catch(e => {
                        console.log('错误:', e)
                    })
            }
        });
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <Form onSubmit={e => this.handleSubmit(e)} className="login-form">
                <Form.Item>
                    {getFieldDecorator('account', {
                        rules: [{ required: true, message: '请输入管理员帐号！' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="管理员帐号" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入管理员密码！' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="管理员密码" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>记住密码</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">忘记密码？</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                    或者 <a href="">马上去注册</a>
                </Form.Item>
            </Form>
        )
    }
}


const MyLoginForm = Form.create({ name: 'normal_login' })(Login)

export default MyLoginForm