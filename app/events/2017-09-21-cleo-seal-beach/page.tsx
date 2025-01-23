import React from 'react';
import Image from 'next/image';

export default function CLEOSealBeachPage() {
  return (
    <div className="container mx-auto px-4 pt-32">
      <h1 className="text-4xl font-bold mb-8">September 2017 California Local Elected Officials (CLEO) Seal Beach Meeting</h1>
      
      <div className="mb-12">
        <a href="https://calocalelectedofficials.org/events/" target="_blank">
          <Image
            src="/cleo_home_small.png"
            alt="September 2017 CPC CLEO"
            width={800}
            height={400}
            className="rounded-lg"
          />
        </a>
      </div>

      <section className="prose lg:prose-xl">
        <p className="mb-8 font-bold">
          Join Sean Roberts from ODI and CPC at the Orange County CLEO meeting.
        </p>

        <p className="mb-8">
          Talks include policy experts for panel discussions on Financial Management, Government Transparency, and Learning the Game. Sean Roberts Project Leader from ODI will present on Government Financial Transparency and the ODI projects focused on government open finance data implementation.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Event Details</h2>
          <p className="mb-2"><strong>Keynote speaker:</strong> State Senator John Moorlach</p>
          <p className="mt-4">
            <a 
              href="https://calocalelectedofficials.org/events/" 
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Visit CLEO Events Page
            </a>
          </p>
        </div>
      </section>
    </div>
  );
} 