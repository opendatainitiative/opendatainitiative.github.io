import React from 'react';
import Image from 'next/image';

export default function CPCSanRamonPage() {
  return (
    <div className="container mx-auto px-4 pt-32">
      <h1 className="text-4xl font-bold mb-8">December 2017 California Local Elected Officials (CLEO) Bay Area Meeting</h1>
      
      <div className="mb-12">
        <a href="https://calocalelectedofficials.org/events/" target="_blank">
          <Image
            src="/cleo_home_small.png"
            alt="December 2017 CPC CLEO"
            width={800}
            height={400}
            className="rounded-lg"
          />
        </a>
      </div>

      <section className="prose lg:prose-xl">
        <p className="mb-8 font-bold">
          Join Sean Roberts from ODI and CPC at the Bay Area CLEO meeting.
        </p>

        <p className="mb-8">
          Talks include local elected officials for discussions on Financial Management, Government Transparency and Learning the Game. Chuck Reed With Keynote Speaker and Special Guest Steve Greenhut.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <p className="mb-2">Saturday, December 2, 2017 10 AM - 3 PM</p>
          <p className="mb-2">Roundhouse Conference Center</p>
          <p>2600 Camino Ramon, San Ramon, CA 94583</p>
        </div>

        <p>
          <a 
            href="http://californiapolicycenter.org/" 
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            CLEO is a project of the California Policy Center
          </a>
        </p>
      </section>
    </div>
  );
} 