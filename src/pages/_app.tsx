import { AppShell, MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { IconBuilding, IconCoin, IconSettings, IconUser } from '@tabler/icons';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import '../styles/globals.css';

import AppHeader from '../components/app-header/AppHeader';
import AppNav from '../components/app-nav/AppNav';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  const navItemsList = [
    { icon: <IconUser />, text: 'User', link: '/people' },
    { icon: <IconBuilding />, text: 'Company', link: '/organizations' },
    { icon: <IconCoin />, text: 'Budget', link: '/fees' },
    { icon: <IconSettings />, text: 'Settings', link: '/settings' },
  ];

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Dashboard</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <NotificationsProvider position="top-center">
          <AppShell
            header={<AppHeader />}
            navbar={<AppNav navItems={navItemsList} />}
            styles={(theme) => ({
              main: {
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
              },
            })}
          >
            <Component {...pageProps} />
          </AppShell>
        </NotificationsProvider>
      </MantineProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
