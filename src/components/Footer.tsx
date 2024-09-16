import styles from '@styles/components/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles['footer']}>
      <p className={styles['footer__text']}>
        <span>&lt;&#47;&gt;</span> with{' '}
        <span className={styles['footer__text-heart']}>&#9825;</span>
      </p>
    </footer>
  );
}
