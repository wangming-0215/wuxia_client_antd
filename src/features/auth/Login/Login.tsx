import Header from './Header';
import LoginForm from './LoginForm';
import classes from './Login.module.scss';

export default function Login() {
  return (
    <div className={classes.root}>
      <Header />
      <LoginForm />
    </div>
  );
}
