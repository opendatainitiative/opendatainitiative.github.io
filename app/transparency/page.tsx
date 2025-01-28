import React from 'react';
import { transparencyData } from '../data/transparency';

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
            const score = (item.pirgScore2018 * 0.80) + item.accessibility + item.downloadability;

            return (
              <tr key={index}>
                <td className="tablecolumn">
                  <a href={item.source} target="_blank">{item.name}</a>
                </td>
                <td className="tablecolumn">{score.toFixed(1)}</td>
                <td className="tablecolumn">{item.pirgScore2018}</td>
                <td className="tablecolumn">{item.accessibility}</td>
                <td className="tablecolumn">{item.downloadability}</td>
                <td className="tablecolumn largetablecolumn" style={{ maxWidth: '200px' }}>
                  {item.comments}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <p className="mt-4">
        <strong>
          <a href="https://github.com/opendatainitiative/transparency/tree/master" target="_blank">
            latest revision
          </a>
        </strong>
      </p>
    </div>
  );
};

export default TransparencyPage; 