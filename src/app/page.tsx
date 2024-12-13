'use client';

import styles from '@/app/home.module.scss';
import { boards } from '@/backend/data';
// import AddEditButton from '@/components/AddEditButton';
import AddEditModal from '@/components/AddEditModal';
import Board from '@/components/Board';
import { useState } from 'react';
import styless from '@/components/button.module.scss';
import clsx from 'clsx';

// type DialogHandle = {
//   open: () => void;
// } & ComponentPropsWithoutRef<'input'>;

export default function Home() {
  // const dialog = useRef<HTMLDialogElement>(null);
  const [modal, setModal] = useState(false);

  function showModal() {
    setModal((prev) => !prev);
  }
  return (
    <div className={styles['home__container']}>
      {boards.map((board) => (
        <Board key={board.id} board={board} />
      ))}
      <div
        className={
          modal
            ? clsx(styless['circle__close'], styless.circle)
            : styless.circle
        }
        onClick={showModal}
      >
        <div className={styless['circle__bar']}>
          <span className={styless['circle__bar--v']}></span>
          <span className={styless['circle__bar--h']}></span>
        </div>
      </div>
      {modal && <AddEditModal onClick={showModal} />}
    </div>
  );
}
