import React from 'react';
import Image from 'next/image';

export default function DataCoalitionDemoDayPage() {
  return (
    <div className="container mx-auto px-4 pt-32">
      <h1 className="text-4xl font-bold mb-8">October 2017 Data Coalition Demo Day</h1>
      
      <div className="mb-12">
        <Image
          src="/19oct2017-data-coalition-demo-day.png"
          alt="Data Coalition"
          width={800}
          height={400}
          className="rounded-lg"
        />
      </div>

      <section className="prose lg:prose-xl">
        <p className="mb-8">
          Tomorrow, we will join the {' '}
          <a href="https://joinlincoln.us7.list-manage.com/track/click?u=37b038d35f4e6f93a44f0c907&id=c27157f846&e=9104beca3f" target="_blank" className="text-blue-600 hover:underline">Data Coalition</a>
          {' '} and {' '}
          <a href="https://joinlincoln.us7.list-manage.com/track/click?u=37b038d35f4e6f93a44f0c907&id=aedd8dd5ec&e=9104beca3f" target="_blank" className="text-blue-600 hover:underline">Grant Thornton</a>
          {' '} for the {' '}
          <a href="https://joinlincoln.us7.list-manage.com/track/click?u=37b038d35f4e6f93a44f0c907&id=7c99c4cf8b&e=9104beca3f" target="_blank" className="text-blue-600 hover:underline">California Data Demo Day</a>
          , in partnership with {' '}
          <a href="https://joinlincoln.us7.list-manage.com/track/click?u=37b038d35f4e6f93a44f0c907&id=6fca284a61&e=9104beca3f" target="_blank" className="text-blue-600 hover:underline">Xcential</a>
          , and {' '}
          <a href="https://joinlincoln.us7.list-manage.com/track/click?u=37b038d35f4e6f93a44f0c907&id=0e4207c963&e=9104beca3f" target="_blank" className="text-blue-600 hover:underline">EFF</a>
          , on Thursday, October 19th in Sacramento, CA.
        </p>

        <p className="mb-8">
          The Data Demo Day is free for all attendees! Reserve your seat here.
        </p>

        <p className="mb-8">
          The half day event will explore how California state agencies and local governments are modernizing the way they manage information. By collecting and sharing information as open data, governments can be transparent to the Californians they serve - and also become more efficient through internal analytics. Join us!
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Confirmed speakers include:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Senator Richard Pan (D-Sacramento)</li>
            <li>Jan Ross, Deputy Treasurer for Technology and Innovation, California State Treasurer's Office</li>
            <li>Hudson Hollister, Executive Director, Data Coalition</li>
            <li>Graeme Finley, Principal, Grant Thornton</li>
            <li>Ari Hershowitz, Director of Open Government, Xcential</li>
            <li>Robb Korinke, Grassroots Lab</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Event Details</h2>
          <p className="mb-2"><strong>What:</strong> California Data Demo Day</p>
          <p className="mb-2"><strong>When:</strong> Thursday, Oct. 19th, 2017, 8:30 am - 12:00 pm Pacific</p>
          <p className="mb-2"><strong>Where:</strong> Capitol Event Center, 1120 11th Street, Sacramento CA 95814</p>
          <p>
            <strong>Registration:</strong> {' '}
            <a 
              href="http://www.datacoalition.org/california-data-demo-day-2017" 
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              www.datacoalition.org/california-data-demo-day-2017
            </a>
          </p>
        </div>
      </section>
    </div>
  );
} 