import styles from '@/components/button.module.scss';

export default function AddEditButton() {
  return (
    <div className={styles.circle}>
      <div className={styles['circle__bar']}>
        <span className={styles['circle__bar--v']}></span>
        <span className={styles['circle__bar--h']}></span>
      </div>
    </div>
  );
}
