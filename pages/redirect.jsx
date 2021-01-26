import Head from 'next/head';
import styles from '../styles/Home.module.css';
const Redirect = () => (
  <div className={styles.container}>
    <Head>
      <title>Redirect</title>
    </Head>
    <h1>Page for redirection</h1>
  </div>
);
export default Redirect;
