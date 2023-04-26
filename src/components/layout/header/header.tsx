import RickAndMortyImage from 'assets/images/header-image.png';
import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

export function Header({ children }: PropsWithChildren) {
  return (
    <header className={styles.Header}>
      <img src={RickAndMortyImage} alt='rick and morty' />
      <h1>Rick and Morty Characters</h1>
      {children && <div className={styles.extraRight}>{children}</div>}
    </header>
  );
}
