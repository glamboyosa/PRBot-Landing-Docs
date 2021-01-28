import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
const Redirect = ({ client_id, client_secret }) => {
  const [response, setResponse] = useState();
  useEffect(() => {
    if (window.location.search.split('=')[1]) {
      fetch('https://slack.com/api/oauth.v2.access', {
        body: new URLSearchParams({
          client_id,
          client_secret,
          code: window.location.search.split('=')[1].split('&')[0],
        }),
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        .then((resp) => resp.json())
        .then((resp) => {
          setResponse(resp.ok);
        })
        .catch((err) => console.log(err.message));
    }
  }, []);
  if (response) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Succesful redirection</title>
        </Head>
        <h1>Integration added to slack</h1>
      </div>
    );
  }
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
