import React, { useRef } from 'react';
import { Form, Input } from 'antd';
import { useHistory } from 'react-router-dom';

const FormItem = Form.Item;

const FormProps = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const Login: React.FC = () => {
    const history = useHistory();
    const submit = (values: any) => {
        console.log(values);
        localStorage.setItem(values.name, values);
        history.replace('/home');
    };

    return (
        <div>
            <Form {...FormProps} name="login" onFinish={submit}>
                <FormItem required label="name">
                    <Input placeholder="pleace"></Input>
                </FormItem>
                <FormItem required label="password">
                    <Input type="password" placeholder="pleace "></Input>
                </FormItem>
            </Form>
        </div>
    );
};

export default Login;
