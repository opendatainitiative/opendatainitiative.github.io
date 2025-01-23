import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">About</h1>

      <div className="space-y-8 mb-12">
        <div className="flex gap-8 items-start">
          <a href="https://www.linkedin.com/in/sarob/" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/sean-roberts-headshot.png"
              alt="Sean Roberts"
              width={200}
              height={200}
              className="rounded"
            />
          </a>
          <div>
            <h3 className="text-xl font-bold mb-2">Sean Roberts: ODI Director and Advisory Council Chair</h3>
            <p>Sean is a founding member of the OpenStack Foundation. This is in addition to his 20+ years of technology experience at places like Stanford, Yahoo, EDS, ADP, and Electronic Arts. Sean is passionate about donating his time mentoring engineers, participating in technical conferences, leading open source projects, and other public works. As part of volunteering, Sean enjoys public speaking, with more than fifty talks and events over the past few years.</p>
          </div>
        </div>

        <div className="flex gap-8 items-start">
          <a href="https://www.linkedin.com/in/garrettwjohnson/" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/garrett-johnson-headshot.png"
              alt="Garrett Johnson"
              width={200}
              height={200}
              className="rounded"
            />
          </a>
          <div>
            <h3 className="text-xl font-bold mb-2">Garrett Johnson: Lincoln Network Executive Director</h3>
            <p>Co-founder of Lincoln Network, which is focused on bringing civic organizations and government institutions into the 21st century. Previously Co-founded SendHub [acq. Cameo Global], a Y Combinator backed startup launched in 2011. Served as professional staff to the Ranking Member of the U.S. Senate Foreign Relations Committee. Originally from (Tampa) Florida, graduated in 2005 from Florida State University and was the 2006 NCAA Indoor and Outdoor Shot Put champion. Read for the degree of Master of Philosophy in Migration Studies at the University of Oxford, England as a Rhodes Scholar.</p>
          </div>
        </div>

        <div className="flex gap-8 items-start">
          <a href="https://www.linkedin.com/in/albert-suarez-iv-881955138/" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/albert-suarez-iv-headshot.png"
              alt="Albert Suarez"
              width={200}
              height={200}
              className="rounded"
            />
          </a>
          <div>
            <h3 className="text-xl font-bold mb-2">Albert Suarez: ODI Program Manager</h3>
            <p>Graduated with a Law degree from the University of Texas School of Law in 2015. He is currently balancing his time between Clerking for the US District Courts in the Northern District of Texas, Policy Council for the Lincoln Network, ODI Program Manager, and Advisory Council member.</p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-4">GOVERNANCE</h3>
      <p className="mb-4">ODI is only as strong as the people participating and backing up its mission. A few of us meet at least monthly as a group of shared responsibility to manage ODI strategic decisions.</p>
      <p className="mb-8">
        <a href="/governance" className="text-blue-600 hover:underline">go to details</a>
      </p>

      <h3 id="mission" className="text-2xl font-bold mb-4">MISSION</h3>
      <div className="space-y-4">
        <p>
          The Open Data Initiative exists to advance government data transparency. Through resources, partners, and events, we inform the public and the government on the best open data solutions available.
        </p>
        <p>
          Government open data is a broad field and we want to make progress. So to make progress, the Open Data Initiative has focused on government financial transparency and building a community around that cause. As the community expands, our focus can expand to other areas of government open data. We define government financial transparency as a four part solution: Open Data Legislation, Tools, Best Practices, and Portals. The legislation defines the open data policy, technology tools implement the policy, technologists use the best practices managing the tools implementation, and open data portal is the result. Each part of the solution relies on the others.
        </p>
        <p>
          Open Data Legislation must define the capabilities expected to be implemented reliability in the open data portal. Even more importantly, the legislation outlines the expectations that the government agencies and the public have of open data. Details like regular, public meetings to determine data standards can not be left to chance. As the legislation defines the policy, the open data technology used defines the integration of the open data portal with the government accounting systems. Government organizations need to develop relationships with both commercial vendors and public technology communities to help them manage the complexity and maximize the benefits of open data integrated accounting systems. These relationships provide both the best practice of initial implementation, but also how to manage and upgrade these complicated, integrated systems over time. The result must be the best quantity and quality government financial data, reliability presented to their constituents.
        </p>
        <p>
          There is much work to be done making our government more transparent. Open Data Initiative and its partners are consistently improving their technology skills, tools, and resources to meet the needs of government open data community. Find the impressive results of the government open data community at the Open Data Initiative, where government, policy, and commercial organizations work together. Participate in person at Open Data Initiative events to learn about real world examples of modern government solutions and what is coming next.
        </p>
        <p>
          ODI is administered through Lincoln Network, a 501(c)(3) nonprofit.
        </p>
      </div>
    </div>
  );
} 