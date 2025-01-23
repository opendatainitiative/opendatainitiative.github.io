import React from 'react';
import Image from 'next/image';

export default function DataTransparency2017Page() {
  return (
    <div className="container mx-auto px-4 pt-32">
      <h1 className="text-4xl font-bold mb-8">September 2017 Data Foundation's Data Transparency 2017</h1>
      
      <div className="mb-12">
        <a href="http://www.datafoundation.org/dt-2017" target="_blank">
          <Image
            src="/data-transparency-2017-event.png"
            alt="Data Transparency 2017"
            width={800}
            height={400}
            className="rounded-lg"
          />
        </a>
      </div>

      <section className="prose lg:prose-xl">
        <p className="mb-8 font-bold">
          Data Transparency 2017 was the fifth annual flagship open data policy conference. The all-day event, presented by Workiva, took place on September 26, 2017, in Washington, DC.
        </p>

        <p className="mb-8">
          ODI attended this event to listen and learn. The Data Foundation seeks to define an open future for our data, for a better government and a better society, through research, education, and programming. The Data Coalition pursues the full implementation of the DATA Act of 2014, the passage of the proposed Financial Transparency Act, and similar reforms to transform government information into open data. Meanwhile, the Data Foundation is working on a variety of open data research projects.
        </p>

        <p className="mb-8">
          DT2017 explored the benefits of adopting standardized and open data formats to transform government, compliance, and the private sector - creating new transparency, enabling analytics, and reducing costs.
        </p>

        <div className="mt-8">
          <a 
            href="http://www.datafoundation.org/dt-2017" 
            target="_blank"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Visit Event Website
          </a>
        </div>
      </section>
    </div>
  );
} 