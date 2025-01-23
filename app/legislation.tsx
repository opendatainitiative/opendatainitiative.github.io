import React from 'react';
import { legislationData } from './data/legislation';

const LegislationPage = () => {
  return (
    <div>
      <h1>Open Data Legislation</h1>
      <p>
        Many open data implementations are the result of good management and their policies. But any good policy can be modified by a change in management. To make good policy permanent, the policy must be made into a law. The law must cover just enough detail to establish a framework that the open data implementation can be built upon. We highlight and review open data legislation.
      </p>

      <h2>Summary of Existing Open Data Legislation</h2>
      <p>
        Review the <a href="/detailed-legislation">Detailed Existing Open Data Legislation</a>, <a href="/scored-legislation">Scored Existing Open Data Legislation</a>, and <a href="/scoring">ODI Scoring methodology.</a>
      </p>
      
      <table cellPadding={10} border={1}>
        <thead>
          <tr>
            <th>Session</th>
            <th>Bill Number</th>
            <th>Organization</th>
            <th>ODI Review</th>
            <th>Bill Text</th>
            <th>Last Activity</th>
            <th>Score [100]</th>
          </tr>
        </thead>
        <tbody>
          {legislationData.map((item, index) => {
            const score = (
              (item.publicDefault || 0) +
              (item.techStandards || 0) +
              (item.accountingStandards || 0) +
              (item.metadataStandards || 0) +
              (item.annualReport || 0) +
              (item.biAnnualMeetings || 0) +
              (item.incentives || 0) +
              (item.passedHouse || 0) +
              (item.passedSenate || 0) +
              (item.signedLaw || 0)
            );

            return (
              <tr key={index}>
                <td align="center">{item.session}</td>
                <td align="center">{item.billNumber}</td>
                <td align="center">{item.organization}</td>
                <td align="center">
                  {item.review && <a href={item.review} target="_blank">{item.review}</a>}
                </td>
                <td align="center">
                  <a href={item.billText} target="_blank">{`${item.organization}-${item.session}-${item.billNumber}`}</a>
                </td>
                <td align="center">{item.lastActivity}</td>
                <td align="center">{score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <p>
        <a href="https://github.com/opendatainitiative/opendatalegislation/tree/0.9.0" target="_blank">revision 0.9.0</a>
      </p>
    </div>
  );
};

export default LegislationPage; 