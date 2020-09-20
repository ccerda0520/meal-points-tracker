import React from 'react';

const MealForm = () => {
  const [fields, setFields] = React.useState({ user_id: '1', consumption_date: new Date().toISOString(), points: 4, name: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch('http://localhost:3000/api/meals', {
      method: 'POST',
      body: JSON.stringify({ ...fields }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input type="text" value={fields.name} onChange={(e) => setFields({ ...fields, name: e.target.value })} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MealForm;
