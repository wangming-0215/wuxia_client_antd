import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { logout, profile } from '../features/auth/authThunk';

/**
 * 登录路由守卫
 */
export default function AuthGuard() {
  const authenticated = useAppSelector((state) => state.auth.authenticated);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authenticated) {
      dispatch(profile());
    } else {
      dispatch(logout());
    }
  }, [authenticated, dispatch]);

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
