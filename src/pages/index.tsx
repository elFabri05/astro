import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PaletteColorOptions } from '@mui/material/styles/createPalette';
import { useTranslation } from 'react-i18next';

declare module '@mui/material/styles' {
  interface Palette {
    customColor: PaletteColorOptions;
  }
  interface PaletteOptions {
    customColor: PaletteColorOptions;
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

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    customColor: true;
  }
}

const Home: React.FC = () => {
  const { t } = useTranslation('home');

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
            />
            <div className={styles.homeTextContainer}>
              <h1 className={styles.homeH1}>{t('title')}</h1>
              <p className={styles.homeP}>{t('homeP')}</p>
            </div>
          </div>
          <div className={styles.sessionsHomeDivContainer}>
            <div className={styles.sessionsHomeDiv}>
              <h3>{t('natal chart')}</h3>
              <p className={styles.sessionsHomeP}>{t('natal chart opening')}</p>
              <ThemeProvider theme={theme}>
                <Stack spacing={2} direction="row">
                  <Link href="/sessions#carta">
                    <Button variant="outlined" color="customColor">
                        {t('read more')}
                    </Button>
                  </Link>
                </Stack>
              </ThemeProvider>
            </div>
            <div className={styles.sessionsHomeDiv}>
              <h3>{t('synastry charts')}</h3>
              <p className={styles.sessionsHomeP}>{t('synastry charts opening')}</p>
              <ThemeProvider theme={theme}>
                <Stack spacing={2} direction="row">
                  <Link href="/sessions#syntastry">
                    <Button variant="outlined" color="customColor">
                      {t('read more')}
                    </Button>
                  </Link>
                </Stack>
              </ThemeProvider>
            </div>
            <div className={styles.sessionsHomeDiv}>
              <h3>{t('transits')}</h3>
              <p className={styles.sessionsHomeP}>{t('transits opening')}</p>
              <ThemeProvider theme={theme}>
                <Stack spacing={2} direction="row">
                  <Link href="/sessions#transits">
                    <Button variant="outlined" color="customColor">
                      {t('read more')}
                    </Button>
                  </Link>
                </Stack>
              </ThemeProvider>
            </div>
          </div>
      </main>
    </>
  );
}

export default Home;
