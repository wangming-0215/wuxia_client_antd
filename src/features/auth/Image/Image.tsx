import BackgroundImage from 'src/assets/login_background.png';
import classes from './Image.module.scss';

export default function Image() {
  return (
    <div className={classes.Root}>
      <div>
        <img src={BackgroundImage} alt="" />
      </div>
    </div>
  );
}
