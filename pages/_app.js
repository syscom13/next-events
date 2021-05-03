import '@/styles/nprogress.css';
import NProgress from 'nprogress';
import Router from 'next/router';
import { AuthProvider } from '@/context/AuthContext';
import '@/styles/globals.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
