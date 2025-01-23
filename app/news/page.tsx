import React from 'react';
import Image from 'next/image';

export default function NewsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">News</h1>
      <div className="prose max-w-none">
        <div className="grid gap-8">
          <article className="border-b pb-8">
            <h2 className="text-2xl font-semibold mb-4">2023 Open Data Day</h2>
            <Image
              src="/2018-open-data-day.png"
              alt="Open Data Day"
              width={600}
              height={300}
              className="mb-4"
            />
            <p className="mb-4">
              Join us for International Open Data Day! We'll be discussing the latest developments in government financial transparency and open data initiatives.
            </p>
          </article>

          <article className="border-b pb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Coalition Demo Day</h2>
            <Image
              src="/19oct2017-data-coalition-demo-day.png"
              alt="Data Coalition Demo Day"
              width={600}
              height={300}
              className="mb-4"
            />
            <p className="mb-4">
              The Open Data Initiative participated in the Data Coalition's Demo Day, showcasing tools and best practices for government financial transparency.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
} 