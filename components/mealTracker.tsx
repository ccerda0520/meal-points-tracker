import React from 'react';
import DatePicker from 'react-datepicker';
import { useQuery } from 'react-query';
import { useFetchUser } from '../utils/user';

const MealTracker: React.FC = () => {
  let currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  const [selectedDate, setSelectedDate] = React.useState<Date>(currentDate);

  const { user, loading } = useFetchUser();
  const { isLoading, isError, data, error } = useQuery(
    ['meals', selectedDate],
    () => fetch('/api/meals/1?mealdate=' + selectedDate.toISOString()).then((res) => res.json()),
    {
      refetchOnReconnect: false,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
    },
  );

  if (!user) {
    return null;
  }

  console.log(data);

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          let newDate = date == null || Array.isArray(date) ? selectedDate : date;
          newDate.setHours(0, 0, 0, 0);
          setSelectedDate(newDate);
        }}
      />
      {isLoading ? <div>loading...</div> : <div>data</div>}
    </div>
  );
};

export default MealTracker;
