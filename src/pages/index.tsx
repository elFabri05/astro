import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/home.module.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PaletteColorOptions } from '@mui/material/styles/createPalette';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

declare module '@mui/material/styles' {
  interface Palette {
    customColor: PaletteColorOptions;
  }
  interface PaletteOptions {
    customColor: PaletteColorOptions;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    customColor: true;
  }
}

const theme = createTheme({
  palette: {
    customColor: {
      main: 'rgb(19, 101, 121)',
      contrastText: 'rgb(19, 101, 121)',
    },
  },
});

const Home: React.FC = () => {
  const { t, lang } = useTranslation('home');
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.homeContainer}>
        <div className={styles.imgHomePContainer}>
          <Image
            src="/assets/home-background-img.jpg"
            alt="The cosmos"
            width={320}
            height={320}
            className={styles.homeImg}
            priority
          />
          <div className={styles.homeTextContainer}>
            <h1 className={styles.homeH1}>{t('title')}</h1>
            <p className={styles.homeP}>{t('homeP')}</p>
          </div>
        </div>
        <div className={styles.sessionsHomeDivContainer}>
          {['natal chart', 'synastry charts', 'transits'].map((section) => (
            <div key={section} className={styles.sessionsHomeDiv}>
              <h3>{t(section)}</h3>
              <p className={styles.sessionsHomeP}>{t(`${section} opening`)}</p>
              <ThemeProvider theme={theme}>
                <Stack spacing={2} direction="row">
                  <Link href={`/sessions#${section.split(' ')[0]}`}>
                    <Button variant="outlined" color="customColor">
                      {t('read more')}
                    </Button>
                  </Link>
                </Stack>
              </ThemeProvider>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
