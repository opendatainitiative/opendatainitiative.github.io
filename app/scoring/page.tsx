import React from 'react';

const ScoringPage = () => {
  return (
    <div>
      <h1>Scoring</h1>

      <h2>Transparency</h2>
      <h3>Alpha (published July 2017)</h3>
      <p>We reviewed a subset of the states.</p>

      <p>Calculation: 0.80[100..0]+1.0[10..0]+1.0[10..0]</p>
      <ol>
        <li>Weight 80% [100..0] <a href="https://uspirgedfund.org/reports/usp/following-money-2016-0" target="_blank">2016 PIRG score</a></li>
        <li>Weight 100% [10..0] Accessibility: How easy was access to the data in a report format?</li>
        <li>Weight 100% [10..0] Downloadability: Was the data easily downloadable?</li>
        <li>Comments</li>
      </ol>

      <h3>Beta (To be published Spring 2017)</h3>
      <p>There may be some overlap with the metrics and 2016 PIRG</p>

      <h2>Legislation</h2>
      <h3>Alpha (published February 2017)</h3>
      <p>Related legislation is reviewed as a whole and combines the scoring.</p>
      <ol>
        <li>Weight 100% [10..0] Public Default: Categories of records are public records by default</li>
        <li>Weight 100% [10..0] Technology standards: Recommend technology standards. These will be minimum requirements so extra work is not generated. Ability to export records in TXT format with recommended metadata headers. Open data system able to support exporting data through API using shared key. Commercial vendor product and open source project options with some high level recommendation of staffing requirements.</li>
        <li>Weight 100% [10..0] Accounting standards: Recommend accounting standards. Utilizing the state accounting system is recommended. Otherwise there must be a minimum set of common terms and fields that the state and municipalities can agree on. These accounting standards set the baseline for reporting and publishing.</li>
        <li>Weight 100% [10..0] Metadata standards: Recommend metadata standards. The metadata at a minimum define the field headers for the accounting standard fields. Collaboration and participation with open government open data organizations such as data.gov (Federal GSA), Open Data Initiative, What Works Cities (Sunlight Foundation), and Data Coalition. Encourage representatives to hold board seats, participate in strategy discussions, and help to keep on top of evolving new options.</li>
        <li>Weight 100% [10..0] Annual Report: Make annual recommendations with updates</li>
        <li>Weight 100% [10..0] Bi-annual meetings: Bi-annual public meetings with published agendas and meeting results. Following Robert's rules.</li>
        <li>Weight 100% [10..0] Incentives: Incentive programs, either grant annual funds for annual participation with state open data system or create a certification system that allows publishing for annual compliance.</li>
        <li>Weight 100% [10..0] Passed House</li>
        <li>Weight 100% [10..0] Passed Senate</li>
        <li>Weight 100% [10..0] Signed into law</li>
      </ol>
    </div>
  );
};

export default ScoringPage; 