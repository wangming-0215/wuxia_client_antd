import { useContext } from 'react';
import Context from './context';

export default function useMessage() {
  return useContext(Context);
}
