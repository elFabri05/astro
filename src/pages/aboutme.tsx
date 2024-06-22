import styles from "@/styles/Aboutme.module.css";
import Image from "next/image";
import Head from "next/head";
import { useTranslation } from "react-i18next";

const AboutMe: React.FC = () => {
  const { t } = useTranslation('aboutme');

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
        <link rel="icon" href="/navBar-icon.png" />
      </Head>

      <main>
        <div className={styles.aboutMe}>
          <Image 
            src="/assets/profile-pic.jpg"
            alt={t('title')}
            width={300}
            height={300}
            className={styles.profilePic}
          />
          <div className={styles.aboutMeContent}>
            <h2>{t('name')}</h2>
            <p>{t('profile').split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default AboutMe;
