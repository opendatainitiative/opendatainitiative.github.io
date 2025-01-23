import React from 'react';

// This would typically come from an API or data file
const legislationData = [
  // Sample data structure - replace with actual data
  {
    session: '',
    billNumber: '',
    title: '',
    organization: '',
    review: '',
    billText: '',
    source: '',
    sponsors: '',
    pastLegislation: '',
    relatedLegislation: '',
    introduced: '',
    lastActivity: '',
    comments: ''
  }
];

const DetailedLegislationPage = () => {
  return (
    <div>
      <h1>Open Data Legislation</h1>
      <h2>Detailed Existing Open Data Legislation</h2>
      <p>
        Go back to the{' '}
        <a href="/legislation" target="_blank">
          Summary of Existing Open Data Legislation
        </a>
        ,{' '}
        <a href="/scored-legislation" target="_blank">
          Scored Existing Open Data Legislation
        </a>
        , and{' '}
        <a href="/scoring" target="_blank">
          ODI Scoring methodology.
        </a>
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Session</th>
              <th className="border border-gray-300 p-2">Bill Number</th>
              <th className="border border-gray-300 p-2">Title</th>
              <th className="border border-gray-300 p-2">Organization</th>
              <th className="border border-gray-300 p-2">ODI Review</th>
              <th className="border border-gray-300 p-2">Bill Text</th>
              <th className="border border-gray-300 p-2">Source</th>
              <th className="border border-gray-300 p-2">Sponsors</th>
              <th className="border border-gray-300 p-2">Past Legislation</th>
              <th className="border border-gray-300 p-2">Related Legislation</th>
              <th className="border border-gray-300 p-2">Introduced</th>
              <th className="border border-gray-300 p-2">Last Activity</th>
              <th className="border border-gray-300 p-2">Comments</th>
            </tr>
          </thead>
          <tbody>
            {legislationData.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2 text-center">{item.session}</td>
                <td className="border border-gray-300 p-2 text-center">{item.billNumber}</td>
                <td className="border border-gray-300 p-2 text-center">{item.title}</td>
                <td className="border border-gray-300 p-2 text-center">{item.organization}</td>
                <td className="border border-gray-300 p-2 text-center">
                  <a href={item.review} target="_blank" rel="noopener noreferrer">
                    {item.review}
                  </a>
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  <a href={item.billText} target="_blank" rel="noopener noreferrer">
                    {`${item.organization}-${item.session}-${item.billNumber}`}
                  </a>
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  <a href={item.source} target="_blank" rel="noopener noreferrer">
                    {`${item.organization}-${item.session}-${item.billNumber}`}
                  </a>
                </td>
                <td className="border border-gray-300 p-2 text-center">{item.sponsors}</td>
                <td className="border border-gray-300 p-2 text-center">{item.pastLegislation}</td>
                <td className="border border-gray-300 p-2 text-center">{item.relatedLegislation}</td>
                <td className="border border-gray-300 p-2 text-center">{item.introduced}</td>
                <td className="border border-gray-300 p-2 text-center">{item.lastActivity}</td>
                <td className="border border-gray-300 p-2 text-center">{item.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4">
        <strong>
          <a
            href="https://github.com/opendatainitiative/opendatalegislation/tree/0.9.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            revision 0.9.0
          </a>
        </strong>
      </p>
    </div>
  );
};

export default DetailedLegislationPage; 