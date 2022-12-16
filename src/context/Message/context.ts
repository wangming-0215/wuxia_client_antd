import { createContext } from 'react';
import { MessageInstance } from 'antd/es/message/interface';

// info: TypeOpen;
// success: TypeOpen;
// error: TypeOpen;
// warning: TypeOpen;
// loading: TypeOpen;
// open(args: ArgsProps): MessageType;
// destroy(key?: React.Key): void;

const Context = createContext<MessageInstance | undefined>(undefined);

export default Context;
