import '../styles/styles.scss';
import {
  ReactElement, ReactNode
} from 'react';
import type { AppProps } from 'next/app';
import { createTheme } from '@/theme/index';
import { NextPage } from 'next';
import { RepositoryIocProvider } from '@/services/configuration/context';
import {SessionProvider} from 'next-auth/react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
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

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RepositoryIocProvider>
        <SessionProvider session={session}>
          {getLayout(<Component {...props.pageProps} />)}
        </SessionProvider>
      </RepositoryIocProvider>
    </ThemeProvider>
  );
}
export default App;
