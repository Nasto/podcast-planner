import React from "react";

import './Planner.scss';

const Planner: React.FunctionComponent = () => {
    // start mock data
  const now = new Date();
  const past = new Date();
  past.setMonth(now.getMonth() + 1);
  const events = [
    {
      date: now.toLocaleDateString(),
      topic: "Sample recording",
      guests: [],
    },
    {
      date: past.toLocaleDateString(),
      topic: "Sample interview",
      guests: [
        {
          name: "Jane Doe",
          company: "Contoso",
          title: "Queen of Chaos",
        },
        {
          name: "John Doe",
          company: "Tailwind Traders",
          title: "Master of desaster",
        },
      ],
    },
  ];
  // end mock data
  return (
    <div className="upcoming-events">
      <ul>
        {events.map((event) =>
          <li>
            {`${event.date}: ${event.topic}`}
            {event.guests.length != 0 ? (
              <ul>
                {event.guests.map((guest: any) => (
                  <li>
                    {guest.name} ({guest.title} at {guest.company})
                  </li>
                ))}
              </ul>
            ) : (
              <></>
            )}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Planner;
