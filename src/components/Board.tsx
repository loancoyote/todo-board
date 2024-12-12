import styles from '@/components/cards.module.scss';
import ProjectCard from './ProjectCard';

interface BoardProps {
  board: {
    id: string;
    name: string;
    items?: {
      id: string;
      title: string;
      client: string;
      date: string;
    }[];
  };
}

export default function Boards({ board }: BoardProps) {
  return (
    <div key={board.id} className={styles['l-card__list']}>
      <h2 className={styles['l-card__list--ttl']}>{board.name}</h2>
      <div className={styles['l-card']}>
        {board.items && (
          <ul>
            <ProjectCard projects={board.items} />
          </ul>
        )}
      </div>
    </div>
  );
}
