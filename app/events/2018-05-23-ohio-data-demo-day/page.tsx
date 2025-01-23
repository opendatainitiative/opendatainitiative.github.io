import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function OhioDataDemoDayPage() {
  return (
    <div className="container mx-auto px-4 pt-32">
      <h1 className="text-4xl font-bold mb-8">May 2018 Ohio Data Demo Day</h1>
      
      <div className="mb-12">
        <Image
          src="/ohiostatehouse-ascii-small.png"
          alt="Ohio Statehouse"
          width={800}
          height={400}
          className="rounded-lg"
        />
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Morning Schedule</h2>
        <p className="mb-4">
          The U.S. Public Research Interest Group (PIRG) is a federation of state Public Interest Research Groups (PIRGs) that annually publishes a report rating all 50 US states on providing online access to government spending data. This report is widely used as the best assessment available on state financial transparency. In 2013, PIRG ranked Ohio 46th in the nation for government financial data transparency. Ohio's Treasurer Josh Mandel took Ohio's poor ranking as a challenge and set forth to make a change. To accomplish this, Treasurer Mandel built OhioCheckbook.com which for the first time in state history put every dollar spent online in a searchable database.
        </p>
        <p className="mb-4">
          As a result of OhioCheckbook.com, U.S. PIRG announced in March 2015 that Treasurer Mandel and the Ohio Office of the Treasurer had earned Ohio the number one transparency ranking in the country for providing online access to government spending data. Ohio climbed from 46th to 1st in the country, and OhioCheckbook.com received a perfect score of 100 points – the highest score in the history of the U.S. PIRG transparency rankings. However, this was only the beginning of the important work that needed to be accomplished, the hard work of onboarding Ohio municipalities remained. Since then, the Ohio Office of the Treasurer has tackled this problem in partnership with the Ohio local governments and schools, onboarding 1,200 organizations.
        </p>
        <p className="mb-4">
          Despite the success, significant hurdles remain. Thousands of Ohio government organizations are not participating with OhioCheckbook.com, accounting standards have yet to be broadly standardized and accepted, and the current Ohio Treasury leadership is leaving office.
        </p>
        <p className="mb-8">
          Join us for a morning of talks and panels from 8am to 1:30pm, 23 May 2018, explaining the history and benefits of Ohio government financial transparency and an optimistic view of Ohio government's open data future.
        </p>
        <a 
          href="https://www.eventbrite.com/e/ohio-data-demo-day-tickets-45220757503" 
          target="_blank"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          REGISTER FOR MORNING EVENT
        </a>
      </section>

      <div className="mb-12">
        <Image
          src="/ohio-riffe-center-theater.png"
          alt="Ohio Riffe Center Theater"
          width={800}
          height={400}
          className="rounded-lg"
        />
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Afternoon Schedule</h2>
        <p className="mb-4">
          To continue the open data progress of the past four years, Ohio Bill GA132-HB3 establishes an open data board to put into law the Office of the Ohio Treasurer's open data policies of the past 4 years. <Link href="/blog/legislation-review/2018-01-25-ohio-hb3-legislation-review" className="text-blue-600 hover:underline">Read the Open Data Initiative review of GA132-HB3 for more details</Link>.
        </p>
        <p className="mb-4">
          In the afternoon from 1:30pm to 3:30pm, 23 May 2018, join us as we hold the first unofficial DataOhio Board meeting. This meeting is meant to not only bring attention to the need to pass GA132-HB3, but also outline how the DataOhio board would set standards and function. There is a long list of newspaper, township, city, and policy organizations that are invited to this afternoon event. A partial list: Ohio Municipal League, Ohio Township Association, Ohio Association of School Business Officials, Buckeye Association of School Administrators, County Commissioner Association of Ohio, County Auditor Association of Ohio, Ohio Newspaper Association, Ohio Society of CPAs, and Common Cause Ohio.
        </p>
        <p className="mb-8">
          This afternoon event has limited availability, so it is invite only. If you were not invited and should have been, email the ODI Director, Sean Roberts at <a href="mailto:sean@opendatainitiative.io" className="text-blue-600 hover:underline">sean@opendatainitiative.io</a>
        </p>
        <a 
          href="https://www.eventbrite.com/e/ohio-dataohio-board-meeting-tickets-44963746777" 
          target="_blank"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          REGISTER FOR AFTERNOON EVENT
        </a>
      </section>

      <div className="mb-12">
        <Image
          src="/ohio-state-library.png"
          alt="Ohio State Library"
          width={800}
          height={400}
          className="rounded-lg"
        />
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6" id="morning-event-sponsors">Morning Event Sponsors</h2>
        <p className="mb-4">
          Sponsor a morning of talks and panels on 23 May 2018, dedicated to the Ohio open data success story at the Office of the Ohio Treasurer in partnership with local governments and schools. The secret to the open data success of Office of the Ohio Treasurer has been their dedication to relentless customer service. Expect notable government and policy speakers discussing how this focus on the customer has worked to set off a national race for greater transparency. The morning event will be held at the Riffe Center Theater which is a short walking distance from the State House.
        </p>
        <p className="mb-4">
          Open Data Initiative, Data Coalition, Ohio Treasury, US Public Interest Research Group, Buckeye Institute, and Sunlight Foundation are co-organizing this event.
        </p>
        <p className="mb-4">
          <a href="/assets/doc/Ohio-Data-Demo-Day-Sponsorship-Agreement-v2.pdf" target="_blank" className="text-blue-600 hover:underline">Find the sponsorship agreement here with the details and costs.</a> To sponsor this event, email the ODI Director, Sean Roberts at <a href="mailto:sean@opendatainitiative.io" className="text-blue-600 hover:underline">sean@opendatainitiative.io</a>
        </p>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Currently Available:</h3>
          
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-2">Levels:</h4>
            <ul className="list-disc pl-6">
              <li>(1) Headline</li>
              <li>Premier</li>
              <li>Spotlight</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-2">Additional Options:</h4>
            <ul className="list-disc pl-6">
              <li>(1) Lanyard</li>
              <li>(1) Coffee Break</li>
              <li>(1) Water Sponsor</li>
              <li>(1) Half-page Advertisement in Agenda</li>
              <li>(Limited number) Private meeting room</li>
              <li>(6-8) Exhibition Tables</li>
              <li className="line-through">Travel Assistance</li>
              <li>(1) Breakfast</li>
            </ul>
          </div>
        </div>

        <p className="mt-8">
          Any questions or comments, send to the ODI Director, Sean Roberts at <a href="mailto:sean@opendatainitiative.io" className="text-blue-600 hover:underline">sean@opendatainitiative.io</a>
        </p>
      </section>
    </div>
  );
} 