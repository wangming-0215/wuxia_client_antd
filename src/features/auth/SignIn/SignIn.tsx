import Header from './Header';
import SignInForm from './SignInForm';
import classes from './SignIn.module.scss';

export default function SignIn() {
  return (
    <div className={classes.Root}>
      <Header />
      <SignInForm />
    </div>
  );
}