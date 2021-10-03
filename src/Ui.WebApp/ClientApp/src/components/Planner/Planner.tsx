import React from 'react';
import { Session } from '../../store/events/session';

import './Planner.scss';

const Planner: React.FunctionComponent = () => {
  // start mock data
  const now = new Date();
  const future = new Date();
  future.setMonth(now.getMonth() + 1);
  const sessions: Session[] = [
    {
      date: now,
      topic: 'Sample recording',
      guests: [],
      season: 1,
      episode: 1,
      number: 1,
    },
    {
      date: future,
      topic: 'Sample interview',
      guests: [
        {
          name: 'Jane Doe',
          company: 'Contoso',
          title: 'Queen of chaos',
        },
        {
          name: 'Edward Dillinger',
          company: 'Tailwind Traders',
          title: 'Master of desaster',
        },
      ],
      season: 1,
      episode: 2,
      number: 2,
    },
  ];
  // end mock data
  const mapGuests = (session: Session) => {
    if (!session.guests || session.guests.length == 0) {
      return <></>;
    }
    return (
      <>
        Guests:
        <ul>
          {session.guests.map((guest: any, idx: number) => (
            <li key={`guest${session.number}-${idx}}`}>
              {guest.name} ({guest.title} at {guest.company})
            </li>
          ))}
        </ul>
      </>
    );
  };
  return (
    <div className="upcoming-events">
      <div className="today">Today is {new Date().toLocaleDateString()}</div>
      <ul>
        {sessions.map((session: Session) => (
          <li key={`session${session.number}`}>
            <div className="session-numbers">
              {session.number.toLocaleString(undefined, {
                minimumIntegerDigits: 3,
              })}
              : Sprint{' '}
              {session.season.toLocaleString(undefined, {
                minimumIntegerDigits: 2,
              })}{' '}
              - Feature{' '}
              {session.episode}
            </div>
            <div className="session-topic">
              {`${session.date.toLocaleDateString()}: ${session.topic}`}
            </div>
            {mapGuests(session)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Planner;
