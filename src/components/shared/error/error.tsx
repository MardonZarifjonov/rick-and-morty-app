import ErrorImage from 'assets/images/not-found.png';
import Button, { ButtonProps } from 'components/shared/button';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

type ErrorProps = {
  actionTitle?: string;
  actionHandler?: ButtonProps['onClick'];
  hideButton?: boolean;
  title?: string;
};

export function Error({
  actionHandler,
  actionTitle = 'Go to the main page',
  hideButton = false,
  title = 'Something went wrong',
}: ErrorProps) {
  const navigate = useNavigate();
  const defaultActionHandler = () => {
    navigate('/');
  };

  return (
    <div className={styles.Error}>
      <div>
        <h1>{title}</h1>
        {!hideButton && (
          <Button onClick={actionHandler || defaultActionHandler}>
            {actionTitle}
          </Button>
        )}
      </div>
      <img src={ErrorImage} alt='error indicator' />
    </div>
  );
}
