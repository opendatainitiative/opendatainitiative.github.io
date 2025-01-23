import React from 'react';
import { legislationData } from '../data/legislation';

const DetailedLegislationPage = () => {
  return (
    <div>
      <h1>Open Data Legislation</h1>
      <h2>Detailed Existing Open Data Legislation</h2>
      <p>
        Go back to the <a href="/legislation">Summary of Existing Open Data Legislation</a>, <a href="/scored-legislation">Scored Existing Open Data Legislation</a>, and <a href="/scoring">ODI Scoring methodology.</a>
      </p>
      
      <table cellPadding={10} border={1}>
        <thead>
          <tr>
            <th>Session</th>
            <th>Bill Number</th>
            <th>Title</th>
            <th>Organization</th>
            <th>ODI Review</th>
            <th>Bill Text</th>
            <th>Source</th>
            <th>Sponsors</th>
            <th>Past Legislation</th>
            <th>Related Legislation</th>
            <th>Introduced</th>
            <th>Last Activity</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {legislationData.map((item, index) => (
            <tr key={index}>
              <td align="center">{item.session}</td>
              <td align="center">{item.billNumber}</td>
              <td align="center" className="largetablecolumn">{item.title}</td>
              <td align="center">{item.organization}</td>
              <td align="center" className="largetablecolumn">
                {item.review && <a href={item.review} target="_blank">{item.review}</a>}
              </td>
              <td align="center">
                <a href={item.billText} target="_blank">{`${item.organization}-${item.session}-${item.billNumber}`}</a>
              </td>
              <td align="center">
                <a href={item.source} target="_blank">{`${item.organization}-${item.session}-${item.billNumber}`}</a>
              </td>
              <td align="center">{item.sponsors}</td>
              <td align="center">{item.pastLegislation}</td>
              <td align="center">{item.relatedLegislation}</td>
              <td align="center" className="largetablecolumn">{item.introduced}</td>
              <td align="center" className="largetablecolumn">{item.lastActivity}</td>
              <td align="center" className="largetablecolumn">{item.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailedLegislationPage; 