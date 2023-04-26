import { Character } from 'declarations';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

type MainCardProps = {
  character: Character;
};

export function MainCard({ character }: MainCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className={styles.MainCard}
      onClick={() => navigate(`/view/${character?.id}`)}
      role='presentation'
    >
      <p>{character.name}</p>
      <img src={character.image} alt={character.name} />
    </div>
  );
}
