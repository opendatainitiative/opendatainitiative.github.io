import React from 'react';
import Image from 'next/image'

const HomePage = () => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td rowSpan={3}>
              <div className="w-[300px]">
                <Image 
                  src="/ohiocheckbook-iphone6-spacegrey-portrait-small.png"
                  alt="ohioschool-iphone6"
                  width={300}
                  height={300}
                  className="h-auto w-full"
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <h3>What if everything was this transparent?</h3>
              <p>
                Government works better with well-informed constituents. In many cases, formal requests are required to get government spending details. We want to eliminate the need for these requests, by putting government finances online. <br />
                Today, many federal, state, and local governments are lacking quality public financial data. <a href="/blog/2017-12-16-transparency-scorecard">See our report</a>. Just in the US states, our governments are trillions in debt with little public awareness. <a target="_blank" href="https://www.truthinaccounting.org/news/detail/why-is-truthful-timely-and-transparent-financial-data-important-details">See the report</a>. To publish the complex web of interconnected financial systems, we need collaborative data standards for data-driven decision making. <a target="_blank" href="https://www.workiva.com/sites/workiva/files/pdfs/thought-leadership/unleashing-power-financial-data-state-local-government-whitepaper-20180314-j40506.pdf">See the report</a>. A modern government is transparent with online finances.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                We are a group of government, technology, and policy advocates working together. The Open Data Initiative exists to advance government financial transparency. Through resources, partners, and events, we inform the public and the government on the best open data solutions available.
              </p>
            </td>
          </tr>
          <tr>
            <td width="50%">
              <h3>GOVERNMENT CHECKLISTS</h3>
            </td>
            <td width="50%">
              <h3>OPEN DATA RESOURCES</h3>
            </td>
          </tr>
          <tr>
            <td width="50%">
              <a href="/resources#cities">Cities</a>
            </td>
            <td width="50%">
              <a href="/legislation">Open Data Legislation</a>
            </td>
          </tr>
          <tr>
            <td width="50%">
              <a href="/resources#states">States</a>
            </td>
            <td width="50%">
              <a href="/transparency">Government Open Data Portals</a>
            </td>
          </tr>
          <tr>
            <td width="50%">
              <a href="/resources#us-federal">US Federal</a>
            </td>
            <td width="50%">
              <a href="/resources#open-data-platforms">Open Data Platforms</a>
            </td>
          </tr>
          <tr>
            <td width="50%"></td>
            <td width="50%">
              <a href="/resources#policy-organizations">Policy Organizations</a>
            </td>
          </tr>
          <tr>
            <td width="50%"></td>
            <td width="50%">
              <a href="/resources#universities">Universities</a>
            </td>
          </tr>
          <tr>
            <td width="50%"></td>
            <td width="50%">
              <a href="/resources#commercial-companies">Commercial Companies</a>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <h3>Current ODI Status</h3>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <p>
                ODI does not have any new events planned at this time. If you want to work with ODI on a project or event, reach out through LinkedIn messaging <a href="https://www.linkedin.com/in/sarob/">https://www.linkedin.com/in/sarob/</a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HomePage; 