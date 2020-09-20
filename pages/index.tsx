import Link from 'next/link';
import React from 'react';
import Layout from '../components/layout/layout';
import MealForm from '../components/mealForm';
import MealTracker from '../components/mealTracker';
import UnauthenticatedApp from '../components/unauthenticatedApp';
import { useFetchUser } from '../utils/user';

// export const getServerSideProps = async ({ req, res }: { req: NextApiRequest; res: NextApiResponse }) => {
//   const prisma = new PrismaClient();
//   const meals = await prisma.meal.findMany();

//   return { props: { meals } };
// };

export default function Home() {
  const { user, loading } = useFetchUser();
  if (loading) {
    return <div>loading...</div>;
  }
  return !user ? (
    <UnauthenticatedApp />
  ) : (
    <Layout>
      <h1>Meal Tracker</h1>
      <MealForm />
      <Link href="/api/logout">Logout</Link>
      <MealTracker />
    </Layout>
  );
}
