import React from 'react';
import { transparencyData } from './data/transparency';

const TransparencyPage = () => {
  return (
    <div>
      <h1>Government Open Data Portals</h1>
      <h3>State Transparency Report 2017</h3>
      <p>
        In late 2017, we evaluated the status of open data policies in the states using sources, policies, and implementations in detail.
        <br />
        <a href="/transparency-scorecard">go to details</a>
      </p>
      <h3>State Open Data Portals with their Transparency Scored 2018</h3>
      <p>
        Also <a href="https://uspirgedfund.org/reports/usf/following-money-2018" target="_blank">review the 2018 PIRG Government Spending Data report</a> and <a href="/scoring">the ODI Scoring methodology.</a>
      </p>
      <table cellPadding={10} border={1}>
        <thead>
          <tr>
            <th>Government Organization</th>
            <th>ODI Transparency Score</th>
            <th>2018 PIRG Score</th>
            <th>Accessibility</th>
            <th>Downloadability</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {transparencyData.map((item, index) => {
            const score = (item.pirgScore2018 || 0) * 0.8 + item.accessibility + item.downloadability;
            return (
              <tr key={index}>
                <td><a href={item.source} target="_blank">{item.name}</a></td>
                <td>{score.toFixed(1)}</td>
                <td>{item.pirgScore2018}</td>
                <td>{item.accessibility}</td>
                <td>{item.downloadability}</td>
                <td style={{ maxWidth: '200px' }}>{item.comments}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>
        <a href="https://github.com/opendatainitiative/transparency/tree/0.7.1" target="_blank">revision 0.7.1</a>
      </p>
    </div>
  );
};

export default TransparencyPage; 