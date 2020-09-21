import { IClaims } from '@auth0/nextjs-auth0/dist/session/session';
import { NextApiRequest, NextApiResponse } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/layout/layout';
import MealTracker from '../components/mealTracker';
import UnauthenticatedApp from '../components/unauthenticatedApp';
import auth0 from '../utils/auth';

export default function Home({ user }: { user: IClaims | null }) {
  return !user ? (
    <UnauthenticatedApp />
  ) : (
    <Layout>
      <h1>Meal Tracker</h1>
      <Link href="/api/logout">Logout</Link>
      <MealTracker />
    </Layout>
  );
}

Home.getInitialProps = async ({ req, res }: { req: NextApiRequest; res: NextApiResponse }) => {
  if (typeof window === 'undefined') {
    const session = await auth0.getSession(req);

    return { user: !session || !session.user ? null : session.user };
  }
};
