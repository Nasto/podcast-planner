import React, { useState } from 'react';

import './AddSession.scss';

const AddSession = () => {
  const [topic, setTopic] = useState('');
  const [date, setDate] = useState(new Date());

  const handleTopicChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    event.preventDefault();
    setTopic(event.target.value);
  };

  const handleDateChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    event.preventDefault();
    setDate(event.target.value);
  };

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="add-event">
      <h2>Create a new recording session</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="topic">Topic:</label>
        <input name="topic" type="text" value={topic} onChange={handleTopicChange}></input>
        <label htmlFor="date">Date:</label>
        <input name="date" type="date" value={date.toLocaleString()} onChange={handleDateChange}></input>
      </form>
    </div>
  );
};

export default AddSession;
