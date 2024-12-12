import styles from '@/app/home.module.scss';
import { boards } from '@/backend/data';
import AddEditButton from '@/components/AddEditButton';
import Board from '@/components/Board';

export default function Home() {
  return (
    <div className={styles['home__container']}>
      {boards.map((board) => (
        <Board key={board.id} board={board} />
      ))}
      <AddEditButton />
    </div>
  );
}
