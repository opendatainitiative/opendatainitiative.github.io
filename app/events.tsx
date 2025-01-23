import React from 'react';

// This would typically come from an API or data file
const eventsData = [
  // Sample data structure - replace with actual data
  {
    date: 'January 1, 2024',
    excerpt: 'Sample event description',
    url: '/events/sample-event'
  }
];

const EventsPage = () => {
  return (
    <div>
      <h1>Events</h1>
      <p>Online webinars, in person discussions, and conferences</p>

      <table className="w-full">
        <tbody>
          {eventsData.map((event, index) => (
            <React.Fragment key={index}>
              <tr>
                <td className="py-2">{event.date}</td>
                <td className="py-2">{event.excerpt}</td>
              </tr>
              <tr>
                <td colSpan={2} className="py-2">
                  <a href={event.url} className="text-blue-600 hover:text-blue-800">
                    go to details
                  </a>
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="py-2">
                  <hr className="border-gray-300" />
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventsPage; 