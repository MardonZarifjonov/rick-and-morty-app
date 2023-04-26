import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

export function Container({ children, className }: ContainerProps) {
  return (
    <main className={`${styles.Container} ${className || ''}`}>{children}</main>
  );
}
