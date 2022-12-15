import { Form, Input, Button, message, type FormRule } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { LoadingStatus } from '../../../constants/enums';
import zhCN from '../../../locales/zh_cn';
import { signInThunk } from '../authThunk';
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

/**
 * 登录表单
 * @returns
 */
export default function SignInForm() {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = async ({ username, password }: FormValues) => {
    try {
      await dispatch(signInThunk({ username, password })).unwrap();
      navigate('/');
    } catch (error) {
      messageApi.error('hello error');
      console.log(error);
    }
  };

  return (
    <div className={classes.form}>
      {contextHolder}
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
            loading={status === LoadingStatus.Pending}
          >
            登录
          </Button>
        </FormItem>
      </Form>
    </div>
  );
}
