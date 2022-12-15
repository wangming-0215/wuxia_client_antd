import { Form, Input, Button, type FormRule } from 'antd';

import zhCN from '../../../locales/zh_cn';
import { signIn } from '../authApi';
import classes from './styles.module.scss';

const { Item: FormItem } = Form;

const rules: Record<'username' | 'password', FormRule[]> = {
  username: [{ required: true, message: zhCN.messages.username.required }],
  password: [{ required: true, message: zhCN.messages.password.required }],
};

interface FormValues {
  username: string;
  password: string;
}

export default function SignInForm() {
  const handleSubmit = async ({ username, password }: FormValues) => {
    const response = await signIn(username, password);
    console.log(response);
  };

  return (
    <div className={classes.form}>
      <Form name="sign_in" onFinish={handleSubmit}>
        <FormItem name="username" rules={rules.username}>
          <Input placeholder="用户名" size="large" />
        </FormItem>
        <FormItem name="password" rules={rules.password}>
          <Input.Password placeholder="密码" size="large" />
        </FormItem>
        <FormItem>
          <Button
            block
            type="primary"
            htmlType="submit"
            size="large"
            className={classes.form_submit}
          >
            登录
          </Button>
        </FormItem>
      </Form>
    </div>
  );
}
