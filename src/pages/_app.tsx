import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import Layout from '@/components/Layout';
import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import i18n from '../../i18n.mjs';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    i18n.init().then(() => setLoading(false));
  }, []);

  if (loading) return <div style={{fontSize: "2rem", margin: '3rem'}}>Loading...</div>;

  

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(MyApp);
