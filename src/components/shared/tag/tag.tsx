import styles from './styles.module.scss';

type TagProps = {
  title?: string;
};

export function Tag({ title = 'Tag' }: TagProps) {
  return <span className={styles.Tag}>{title}</span>;
}
