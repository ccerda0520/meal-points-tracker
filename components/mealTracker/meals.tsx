import { Meal } from '@prisma/client';
import React from 'react';
import { useQuery } from 'react-query';

interface Props {
  date: Date;
}

const Meals: React.FC<Props> = ({ date }) => {
  const { isLoading, isError, data, error }: { isLoading: boolean; isError: boolean; data: Meal[]; error: string | null } = useQuery(
    ['meals', date],
    () => fetch('/api/getmeals/?mealdate=' + date.toISOString()).then((res) => res.json()),
    {
      refetchOnReconnect: false,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
    },
  );

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error || data.length === 0) {
    return <div>No meals added.</div>;
  }

  return (
    <ul>
      {data.map((meal: Meal) => (
        <li key={meal.id}>
          <div>{meal.name}</div>
          <div>{meal.points}</div>
        </li>
      ))}
    </ul>
  );
};

export default Meals;
