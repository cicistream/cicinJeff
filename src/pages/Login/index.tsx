import React from 'react';
import { Form, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { useUserStore } from '@/stores/userInfo';

const FormItem = Form.Item;

const FormProps = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const Login: React.FC = () => {
    const history = useHistory();

    const submit = (values: any) => {
        localStorage.setItem('login', 'true');
        console.log('Success:', values);
        history.replace('/');
    };

    return (
        <div className="relative top-32 h-full bg-white">
            <Form
                {...FormProps}
                name="login"
                className="flex flex-col justify-between w-1/2 text mx-auto p-32 "
                onFinish={submit}
            >
                <FormItem required label="name">
                    <Input className="input" placeholder="pleace"></Input>
                </FormItem>
                <FormItem required label="password">
                    <Input
                        className="input"
                        type="password"
                        placeholder="pleace"
                    ></Input>
                </FormItem>
                <FormItem>
                    <Button
                        className="btn bg-orange-secondary"
                        htmlType="submit"
                    >
                        Submit
                    </Button>
                </FormItem>
            </Form>
        </div>
    );
};

export default Login;
