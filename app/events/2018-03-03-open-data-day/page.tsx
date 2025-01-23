import React from 'react';
import Image from 'next/image';

export default function OpenDataDayPage() {
  return (
    <div className="container mx-auto px-4 pt-32">
      <h1 className="text-4xl font-bold mb-8">March 2018 Contra Costa Civic Hackathon</h1>
      
      <div className="mb-12">
        <Image
          src="/2018-open-data-day.png"
          alt="2018 Open Data Day"
          width={800}
          height={400}
          className="rounded-lg"
        />
      </div>

      <section className="prose lg:prose-xl">
        <p className="mb-6">
          The Contra Costa Civic Hackathon representing the International Open Data Day 2018 was held in the Walnut Creek, CA Victory Workspace on 03 March 2018. "Open Data Day is an annual celebration of open data all over the world. For the seventh time in history, groups from around the world will create local events on the day where they will use open data in their communities. It is an opportunity to show the benefits of open data and encourage the adoption of open data policies in government, business and civil society."
        </p>

        <p className="mb-6">
          This is Marc Joffe's home turf and co-op office space. Sean Roberts joined Marc and 40 other open data enthusiasts, to participate in the Walnut Creek, CA, US open data event on 03 March. Data.world, Github, D3, and Tableau were all used heavily. Find Sean's resulting insights published {' '}
          <a 
            href="https://sarob.github.io/california-pensions/" 
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            into the state of California Pensions
          </a>
          {' '} and our open data day Walnut Creak team source {' '}
          <a 
            href="https://github.com/ContraCostaCivic/FiscalData" 
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            published on github through the City of Walnut Creek, CA innovation supported organization
          </a>.
        </p>
      </section>
    </div>
  );
} 