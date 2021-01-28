import Head from 'next/head';
import styles from '../styles/Docs.module.css';
const Docs = () => (
  <div className={styles.container}>
    <Head>
      <title>Docs</title>
    </Head>
    <main className={styles.marginutility}>
      <h1 className={styles.title}>Getting Started 🔥</h1>
      <p className={[styles.description, styles.marginutility].join(' ')}>
        Get started in two simple steps:
      </p>
      <ul className={styles.description}>
        <li>
          <a
            style={{ color: 'black' }}
            href='https://slack.com/oauth/v2/authorize?client_id=1249778687317.1677318801844&scope=app_mentions:read,im:history,incoming-webhook,chat:write&user_scope='
            target='_blank'
          >
            Share with your workspace
          </a>
        </li>
        <li>
          Mention the bot with the repo you want updates on e.g @PRBot
          https://github.com/glamboyosa/mey
        </li>
      </ul>
      <p className={[styles.description, styles.marginutility].join(' ')}>
        That's it! Interested in how it's built? Check out the repo{' '}
        <a
          href='https://github.com/glamboyosa/prbot'
          target='_blank'
          style={{ color: 'black' }}
        >
          PR Bot Repo
        </a>
      </p>
    </main>
  </div>
);
export default Docs;
