import React from 'react';
import DatePicker from 'react-datepicker';
import MealForm from './mealTracker/mealForm';
import Meals from './mealTracker/meals';

const MealTracker: React.FC = () => {
  let currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  const [selectedDate, setSelectedDate] = React.useState<Date>(currentDate);
  const [showMealForm, setShowMealForm] = React.useState<boolean>(false);

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
      <Meals date={selectedDate} />
      {showMealForm ? (
        <div>
          <MealForm />
          <button onClick={() => setShowMealForm(false)}>Cancel</button>
        </div>
      ) : (
        <button onClick={() => setShowMealForm(true)}>Add New Meal</button>
      )}
    </div>
  );
};

export default MealTracker;
