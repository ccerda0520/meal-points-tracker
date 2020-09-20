import Head from 'next/head';
import React from 'react';
import { useFetchUser, UserProvider } from '../../utils/user';
const Layout = ({ children }: any) => {
  const { user, loading } = useFetchUser();
  return (
    <UserProvider value={{ user, loading }}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </UserProvider>
  );
};

export default Layout;
