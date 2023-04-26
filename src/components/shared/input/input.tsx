import styles from './styles.module.scss';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return <input className={`${styles.Input} ${className}`} {...props} />;
}
