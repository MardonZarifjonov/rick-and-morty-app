import LoaderLogo from 'assets/images/loader.png';
import styles from './styles.module.scss';

export function Loader() {
  return (
    <div className={styles.Loader}>
      <img src={LoaderLogo} alt='rick and morty loader' />
    </div>
  );
}
