import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';

/**
 * 登录路由守卫
 */
export default function AuthGuard() {
  const authenticated = useAppSelector((state) => state.auth.authenticated);

  if (!authenticated) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />;
}
