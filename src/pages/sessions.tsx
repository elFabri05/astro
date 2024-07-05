import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/sessions.module.css";
import useTranslation from "next-translate/useTranslation";

const Sessions: React.FC = () => {
  const { t } = useTranslation('sessions');

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
        <link rel="icon" href="/navBar-icon.png" />
      </Head>

      <main>
        <div className={styles.sessions} id="carta">
          <Image
            src="/assets/natal-chart-img.png"
            alt={t('natal chart title')}
            width={320}
            height={320}
            className={styles.sessionsImg}
          />
          <div className={styles.sessionsDescription}>
            <h3 className={styles.sessionsH3}>{t('natal chart title')}</h3>
            <p className={styles.sessionsP}>{t('natal chart description')}</p>
          </div>
        </div>
        <div className={styles.sessions}>
          <Image
            src="/assets/synastry.png"
            alt={t('synastry charts title')}
            width={320}
            height={320}
            className={styles.sessionsImg}
          />
          <div className={styles.sessionsDescription} id="syntastry">
            <h3 className={styles.sessionsH3}>{t('synastry charts title')}</h3>
            <p className={styles.sessionsP}>{t('synastry charts description')}</p>
          </div>
        </div>
        <div className={styles.sessions} id="transits">
          <Image
            src="/assets/whisperer.png"
            alt={t('transits title')}
            width={320}
            height={320}
            className={styles.sessionsImg}
          />
          <div className={styles.sessionsDescription}>
            <h3 className={styles.sessionsH3}>{t('transits title')}</h3>
            <p className={styles.sessionsP}>{t('transits description')}</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Sessions;
