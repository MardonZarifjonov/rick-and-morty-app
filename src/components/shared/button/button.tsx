import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

export type ButtonProps = PropsWithChildren &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button className={styles.Button} {...props}>
      {children}
    </button>
  );
}
