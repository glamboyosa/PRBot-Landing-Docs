import { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
const Redirect = ({ client_id, client_secret }) => {
  useEffect(() => {
    if (window.location.search.split('=')[1]) {
      fetch('https://slack.com/api/oauth.access', {
        body: new URLSearchParams({
          client_id,
          client_secret,
          code: window.location.search.split('=')[1],
        }),
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        .then((resp) => resp.json())
        .then((resp) => console.log(resp))
        .catch((err) => console.log(err.message));
    }
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Redirect</title>
      </Head>
      <h1>Page for redirection</h1>
    </div>
  );
};
export function getStaticProps() {
  return {
    props: {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
    },
  };
}
export default Redirect;
