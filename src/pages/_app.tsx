import '../styles/styles.scss';
import {
  ReactElement, ReactNode
} from 'react';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import {SessionProvider} from 'next-auth/react';
import { RepositoryIocProvider } from '@/services/configuration/context';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App(props:AppPropsWithLayout) {
  const {
    pageProps: {session}, Component
  } = props;

  const getLayout = Component.getLayout ?? (page => page);

  return (
    <RepositoryIocProvider>
      <SessionProvider session={session}>
        {getLayout(<Component {...props.pageProps} />)}
      </SessionProvider>
    </RepositoryIocProvider>
  );
}
export default App;
