import Head from 'next/head';
import EmailForm from '@/components/EmailForm';
import styles from "@/styles/contact.module.css";
import useTranslation from 'next-translate/useTranslation';

const Contact: React.FC = () => {
  const { t } = useTranslation('contact');

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
        <link rel="icon" href="/navBar-icon.png" />
      </Head>

      <main className={styles.contactContainer}>
        <div className={styles.contactP}>
          <h1>{t('heading')}</h1>
          <p>
            {t('paragraph').split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div className={styles.emailForm}>
          <EmailForm />
        </div>
      </main>
    </>
  );
}

export default Contact;
