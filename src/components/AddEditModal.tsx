'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import clsx from 'clsx';
import styles from '@/components/addEditModal.module.scss';

export default function AddEditModal() {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  // ↓DOMが完全に構築された後にターゲット要素を取得するようにする
  useEffect(() => {
    // クライアントサイドでDOM要素を取得
    setModalRoot(document.getElementById('add-edit-modal'));
  }, []);

  if (!modalRoot) {
    return null; // ターゲットがない場合は何も描画しない
  }

  return createPortal(
    <div className={styles.addEditModal}>
      <h3 className={styles['addEditModal__ttl']}>新規追加</h3>
      <form className={styles['addEditModal__form']} action="">
        <div className={styles['addEditModal__form--item']}>
          <label htmlFor="title">案件名（必須）</label>
          <input id="title" type="text" />
        </div>
        <div className={styles['addEditModal__form--item']}>
          <label htmlFor="detail">詳細</label>
          <textarea id="detail" />
        </div>
        <div className={styles['addEditModal__form--item']}>
          <label htmlFor="date">期日（必須）</label>
          <input id="date" type="text" />
        </div>
        <div className={styles['addEditModal__form--item']}>
          <label htmlFor="client">依頼元</label>
          <input id="client" type="text" />
        </div>
        <div className={styles['addEditModal__form--buttons']}>
          <button
            className={clsx(
              styles['addEditModal__form--button'],
              styles['addEditModal__form--button--save']
            )}
          >
            保存
          </button>
          <button
            className={clsx(
              styles['addEditModal__form--button'],
              styles['addEditModal__form--button--notsave']
            )}
          >
            戻る
          </button>
        </div>
      </form>
    </div>,
    modalRoot
  );
}

// Memo: Next.jsのApp Routerでは、デフォルトでコンポーネントがサーバーサイドでレンダリングされます。documentはクライアントサイドのDOM APIなので、サーバーサイドでアクセスするとエラーになる。
