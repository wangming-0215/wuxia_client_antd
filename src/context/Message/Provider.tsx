import { type PropsWithChildren } from 'react';
import { message } from 'antd';
import Context from './context';

export default function MessageProvider({ children }: PropsWithChildren) {
  const [instance, contextHolder] = message.useMessage();

  return (
    <Context.Provider value={instance}>
      {contextHolder}
      {children}
    </Context.Provider>
  );
}
