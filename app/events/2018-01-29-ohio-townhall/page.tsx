import React from 'react';
import Image from 'next/image';

export default function OhioTownhallPage() {
  return (
    <div className="container mx-auto px-4 pt-32">
      <h1 className="text-4xl font-bold mb-8">January 2018 Ohio Townhall</h1>
      
      <div className="mb-12">
        <Image
          src="/ohio-state-capital.png"
          alt="January 2018 Ohio Townhall"
          width={800}
          height={400}
          className="rounded-lg"
        />
      </div>

      <section className="prose lg:prose-xl">
        <p className="mb-8">
          Transparency is a core principle of modern government. On 29 Jan 2018, Open Data Initiative (ODI) Director Sean Roberts and the Ohio panel of open data leaders to discussed how they've made Ohio's state financial checkbook data more transparent, accessible, and consistent. {' '}
          <a 
            href="https://m.facebook.com/opendatainitiative/#!/opendatainitiative/videos/?ref=page_internal&mt_nav=1" 
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Watch the video here
          </a>
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">You'll discover:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>What started the drive to publish government data in Ohio</li>
            <li>The difference between open data policy and law</li>
            <li>How open data drives down the cost of local government</li>
            <li>The one critical message for government open data implementation</li>
            <li>How to get involved with government financial transparency</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">About the event</h2>
          <p>
            Join ODI as we sit down with the innovators behind Ohio's nation-leading efforts to publish government financial data. ODI Director Sean Roberts will be live at the capitol in Columbus to discuss the legacy of Ohio's open data implementation along with lessons learned and what's next. Follow along on Facebook Live as we stream Sean's discussion with Ohio House Representative Mike Duffey, Buckeye Institute Research Fellow Greg Lawson, and Deputy of Public Affairs for the Ohio State Treasurer Frank Kohstall.
          </p>
        </div>
      </section>
    </div>
  );
} 