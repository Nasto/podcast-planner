import React, { useCallback, useState } from 'react';
import {
  ActionButton,
  DatePicker,
  Label,
  PrimaryButton,
  TextField,
} from '@fluentui/react';
import { useConst } from '@fluentui/react-hooks';

import './AddSession.scss';

const AddSession = () => {
  const today = useConst(new Date(Date.now()));

  const [topic, setTopic] = useState('');
  const [date, setDate] = useState(new Date());

  const handleTopicChange = useCallback(
    (
      _event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
      value?: string
    ) => {
      setTopic(value || '');
    },
    []
  );

  const handleDateChange = useCallback(
    (changedDate: Date | null | undefined) => {
      if (!changedDate) {
        // fallback to today
        changedDate = today;
      }
      setDate(changedDate);
    },
    []
  );

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    alert('add');
  };

  return (
    <div className="add-event">
      <h2>Schedule a new recording session</h2>
      <form onSubmit={handleSubmit}>
        <div className="session-form">
          <Label htmlFor="topic">Topic:</Label>
          <TextField
            required
            name="topic"
            type="text"
            value={topic}
            onChange={handleTopicChange}
          />
          <Label htmlFor="date">Date:</Label>
          <DatePicker
            isRequired
            id="date"
            value={date}
            minDate={today}
            onSelectDate={handleDateChange}
          />
          <ActionButton iconProps={{ iconName: 'AddFriend' }}>
            Add Guest
          </ActionButton>
        </div>
        <PrimaryButton type="submit">Add Session</PrimaryButton>
      </form>
    </div>
  );
};

export default AddSession;
