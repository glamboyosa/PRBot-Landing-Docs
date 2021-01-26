import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
export default function Home() {
  const { push } = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>PR Bot</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          The Slack bot for open source maintainers and public teams.
        </h1>
        <p className={[styles.description, styles.marginutility].join(' ')}>
          PR Bot is a Slack bot that curates daily open, pending PRs on your
          repos.
        </p>
        <p className={[styles.description, styles.marginutility].join(' ')}>
          Simply mention it with the repo and get daily alerts.
        </p>
        <div className={styles.grid}>
          <button className={styles.button} onClick={() => push('/')}>
            Get Started
          </button>
          <a
            href='https://slack.com/oauth/v2/authorize?scope=incoming-webhook&client_id=1249778687317.1677318801844'
            target='_blank'
          >
            <img
              alt='Add to Slack'
              height='40'
              width='139'
              src='https://platform.slack-edge.com/img/add_to_slack.png'
              srcset='https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x'
            />
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p className={styles.fontutility}>
          Made with ❤ by{' '}
          <a href='https://github.com/glamboyosa' target='_blank'>
            Timothy Ogbemudia
          </a>{' '}
        </p>
      </footer>
    </div>
  );
}