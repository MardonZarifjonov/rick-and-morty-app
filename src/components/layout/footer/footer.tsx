import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

export function Footer({ children }: PropsWithChildren) {
  return <footer className={styles.Footer}>{children}</footer>;
}
