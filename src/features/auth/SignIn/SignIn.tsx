import Header from './Header';
import SignInForm from './SignInForm';
import classes from './styles.module.scss';

export default function SignIn() {
  return (
    <div className={classes.root}>
      <Header />
      <SignInForm />
    </div>
  );
}
