import React from 'react';
import Image from 'next/image';

const TransparencyScorecardPage = () => {
  return (
    <div>
      <h1>Transparency Scorecard</h1>
      <p>
        Late summer 2017, we began investigating government financial transparency status quo by reviewing the US state open financial data and policies. From this research, we created our own transparency scorecard regarding the implementation of open data practices at the state level.
      </p>

      <p>
        As reference, we reviewed the <a href="https://uspirg.org/reports/usp/following-money-2016-0" target="_blank">2016 PIRG Following the Money report;</a> in which Oregon, Michigan, Indiana, and Ohio, each scored a perfect 100. PIRG is looking for the availability of online spending data and scoring states based on four attributes: is the data available in one place, is all the data available that should be online, is the metadata searchable, and can the data be downloaded.
      </p>

      <div className="w-full">
        <Image 
          src="/transparency-scorecard-pie.png" 
          alt="Scorecard Pie" 
          width={800}
          height={400}
          className="w-full h-auto"
        />
      </div>

      <h3>As we reviewed all the states, we found these key problems</h3>
      <ul>
        <li>data is difficult to access</li>
        <li>tax and checkbook data is not available</li>
        <li>no single pane of glass to view all data is in one online place</li>
        <li>formatting is inconsistent and not well documented</li>
      </ul>

      <div className="w-full mt-8">
        <Image 
          src="/transparency-policy-pie.png" 
          alt="Policy Pie" 
          width={800}
          height={400}
          className="w-full h-auto"
        />
      </div>

      <p>
        We also wanted to understand what is driving the financial transparency policy at the state level. Is there a policy by law, by edict of an elected official, or is there no policy at all?
      </p>

      <ul>
        <li>There are 34 states without a known or published finance open data policy. With more investigation, a policy may or may not be found. 9 of the 34, appear to have outsourced their finance open data policy to a technology contractor</li>
        <li>16 states have a some form of a published finance open data policy. The policy is either by Executive Order by the Governor (3) or by law enacted by the State Legislature (13)</li>
        <li>With more investigation working with policy experts, more state finance open data policy may be found. The information found so far was published by the state in some form online</li>
      </ul>
    </div>
  );
};

export default TransparencyScorecardPage; 