import Head from 'next/head';
import styles from './PrimaryLayout.module.css';

export type TPrimaryLayout = {
  children: React.ReactNode;
};

const PrimaryLayout: React.FC<TPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default PrimaryLayout;
