import BackgroundImage from '../../../assets/login_background.png';
import classes from './styles.module.scss';

export default function Image() {
  return (
    <div className={classes.root}>
      <div>
        <img src={BackgroundImage} alt="" />
      </div>
    </div>
  );
}
