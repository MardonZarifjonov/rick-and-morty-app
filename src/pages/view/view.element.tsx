import { ReactNode } from 'react';
import styles from './styles.module.scss';

type ViewElementProps = {
  label?: string;
  element?: ReactNode;
  hideExtraBorder?: boolean;
};

export function ViewElement({
  label,
  element,
  hideExtraBorder = false,
}: ViewElementProps) {
  if (!element || element === '') return null;

  return (
    <div className={styles.View__Element}>
      <p>{label}</p>
      <div className={hideExtraBorder ? styles.hideBorder : undefined}>
        {element}
      </div>
    </div>
  );
}
