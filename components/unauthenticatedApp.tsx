import Link from 'next/link';
import React from 'react';
import Layout from './layout/layout';

const UnauthenticatedApp: React.FC = () => {
  return (
    <Layout>
      <Link href="/api/login">Login</Link>
    </Layout>
  );
};

export default UnauthenticatedApp;
