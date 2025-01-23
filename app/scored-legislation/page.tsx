import React from 'react';
import { legislationData } from '../data/legislation';

const ScoredLegislationPage = () => {
  return (
    <div>
      <h1>Open Data Legislation</h1>
      <h2>Scored Existing Open Data Legislation</h2>
      <p>
        Go back to the <a href="/legislation">Summary of Existing Open Data Legislation</a>, <a href="/detailed-legislation">Detailed Existing Open Data Legislation</a>, and <a href="/scoring">ODI Scoring methodology.</a>
      </p>
      
      <table cellPadding={10} border={1}>
        <thead>
          <tr>
            <th>Session</th>
            <th>Bill Number</th>
            <th>Title</th>
            <th>Organization</th>
            <th>Total Score [100]</th>
            <th>Score Public Default</th>
            <th>Score Tech Standards</th>
            <th>Score Accounting Standards</th>
            <th>Score Metadata Standards</th>
            <th>Score Annual Report</th>
            <th>Score Bi-Annual Report</th>
            <th>Score Incentives</th>
            <th>Score Passed House</th>
            <th>Score Passed Senate</th>
            <th>Score Signed Law</th>
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
                <td align="center" className="largetablecolumn">{item.title}</td>
                <td align="center">{item.organization}</td>
                <td align="center">{score}</td>
                <td align="center">{item.publicDefault}</td>
                <td align="center">{item.techStandards}</td>
                <td align="center">{item.accountingStandards}</td>
                <td align="center">{item.metadataStandards}</td>
                <td align="center">{item.annualReport}</td>
                <td align="center">{item.biAnnualMeetings}</td>
                <td align="center">{item.incentives}</td>
                <td align="center">{item.passedHouse}</td>
                <td align="center">{item.passedSenate}</td>
                <td align="center">{item.signedLaw}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ScoredLegislationPage; 