import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Event data from Jekyll posts
const events = [
  {
    title: 'MAY 2018 OHIO DATA DEMO DAY',
    date: 'May 23, 2018',
    excerpt: "Join us for a demonstration of Ohio's open data portals and a discussion of best practices in government financial transparency.",
    image: '/ohio-state-capital.png',
    url: '/events/2018-05-23-ohio-data-demo-day'
  },
  {
    title: 'MARCH 2018 CONTRA COSTA CIVIC HACKATHON',
    date: 'March 03, 2018',
    excerpt: 'The Contra Costa Civic Hackathon representing the International Open Data Day 2018 was held in the Walnut Creek, CA Victory Workspace on 03 March 2018. Open Data Day is an annual celebration of open data all over the world.',
    image: '/2018-open-data-day.png',
    url: '/events/2018-03-03-open-data-day'
  },
  {
    title: 'OHIO TOWN HALL',
    date: 'January 29, 2018',
    excerpt: 'Join us for a town hall discussion on government financial transparency and open data in Ohio.',
    image: '/ohio-riffe-center-theater.png',
    url: '/events/2018-01-29-ohio-townhall'
  },
  {
    title: 'DECEMBER 2017 CPC CLEO',
    date: 'December 02, 2017',
    excerpt: 'Join Sean Roberts from ODI and CPC at the Bay Area CLEO meeting. Talks include local elected officials for discussions on Financial Management, Government Transparency and Learning the Game.',
    image: '/cleo_home_small.png',
    url: '/events/2017-11-30-cpc-san-ramon'
  },
  {
    title: 'NOVEMBER 2017 ODI WEBINAR',
    date: 'November 29, 2017',
    excerpt: 'Lincoln hosted a webinar with the Open Data Initiative Project Leader Sean Roberts. All about the Open Data Initiative, why it matters, and how you can get involved.',
    image: '/29nov17-webinar-screengrab.png',
    url: '/events/2017-11-19-odi-webinar'
  },
  {
    title: 'DATA COALITION DEMO DAY',
    date: 'October 19, 2017',
    excerpt: 'Join us for a demonstration of open data tools and best practices at the Data Coalition Demo Day.',
    image: '/19oct2017-data-coalition-demo-day.png',
    url: '/events/2017-10-19-data-coalition-demo-day'
  },
  {
    title: "DATA TRANSPARENCY 2017",
    date: 'September 26, 2017',
    excerpt: 'Data Transparency 2017 was the fifth annual flagship open data policy conference. The all-day event, presented by Workiva, took place in Washington, DC.',
    image: '/data-transparency-2017-event.png',
    url: '/events/2017-09-26-data-transparency-2017'
  },
  {
    title: 'CLEO SEAL BEACH',
    date: 'September 21, 2017',
    excerpt: 'California Local Elected Officials (CLEO) meeting in Seal Beach discussing government transparency and open data.',
    image: '/ohio-state-library.png',
    url: '/events/2017-09-21-cleo-seal-beach'
  }
];

export default function EventsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 pt-32">
      <h1 className="text-4xl font-bold mb-2">Events</h1>
      <p className="text-xl mb-12">Online webinars, in person discussions, and conferences</p>

      <div className="space-y-16">
        {events.map((event, index) => (
          <div key={index} className="pb-12">
            <div className="grid grid-cols-[120px_1fr] gap-8">
              <div className="text-gray-600">
                {event.date}
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">{event.title}</h2>
                <div className="mb-6">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={300}
                    height={200}
                    className="rounded bg-gray-100 object-cover"
                  />
                </div>
                <p className="text-lg mb-4">{event.excerpt}</p>
                <Link 
                  href={event.url}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  go to details
                </Link>
              </div>
            </div>
            <hr className="mt-8" />
          </div>
        ))}
      </div>
    </div>
  );
} 