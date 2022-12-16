import { Form, Input, Button, type FormRule } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { LoadingStatus } from '../../constants/enums';
import zhCN from '../../locales/zh_cn';
import { getErrorMessage } from '../../utils';
import { useMessage } from '../../context/Message';
import { login } from './authThunk';

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
export default function LoginForm() {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const message = useMessage();

  // 表单提交
  const handleSubmit = async ({ username, password }: FormValues) => {
    try {
      await dispatch(login({ username, password })).unwrap();
      message?.info('欢迎回家');
      navigate('/');
    } catch (error) {
      message?.error(getErrorMessage(error));
    }
  };

  return (
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
          loading={status === LoadingStatus.Pending}
        >
          登录
        </Button>
      </FormItem>
    </Form>
  );
}
