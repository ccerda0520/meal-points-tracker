import Link from 'next/link';
import React from 'react';
import Layout from '../components/layout';

export default function Login() {
  return (
    <Layout>
      <Link href="/api/login">Login</Link>
    </Layout>
  );
}
