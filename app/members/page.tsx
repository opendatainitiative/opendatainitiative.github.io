import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MembersPage() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Members</h1>
      
      <div className="prose max-w-none">
        <p className="mb-4">
          ODI uses membership to support its <Link href="/about#mission" className="text-blue-600 hover:underline">mission</Link>. 
          Our objectives include:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Expand and Improve the Quality of the States' Open Data Portals</li>
          <li>Share the Last Four Years of Ohio Treasury Open Data Knowledge to the States and Cities</li>
          <li>Improve Government Poor Reporting Quality</li>
          <li>Partner with Experienced Policy Organizations</li>
        </ul>

        <p className="mb-6">
          By joining ODI, you will be helping to make government financial transparency a reality for all government organizations.
        </p>

        <p className="mb-8">
          To join as a member, reach out to Sean Roberts, <a href="mailto:sean@opendatainitiative.io?subject=Join as a member" className="text-blue-600 hover:underline">sean@opendatainitiative.io</a>.
        </p>

        <h2 className="text-2xl font-bold mb-4">Platinum Members</h2>
        <div className="grid grid-cols-2 gap-8 mb-8">
          <a href="http://joinlincoln.org/" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/lincoln-network-logo-hat-teal-small.png"
              alt="Lincoln Network"
              width={200}
              height={100}
              className="hover:opacity-80"
            />
          </a>
        </div>

        <h2 className="text-2xl font-bold mb-4">Partner Members</h2>
        <div className="grid grid-cols-2 gap-8 mb-8">
          <a href="http://joinlincoln.org/" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/lincoln-network-logo-hat-teal-small.png"
              alt="Lincoln Network"
              width={200}
              height={100}
              className="hover:opacity-80"
            />
          </a>
          <a href="https://www.datacoalition.org/" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/DataCoalition2016Logo.png"
              alt="Data Coalition"
              width={200}
              height={100}
              className="hover:opacity-80"
            />
          </a>
          <a href="http://www.tos.ohio.gov/" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/tos-logo.png"
              alt="tos.ohio.gov"
              width={200}
              height={100}
              className="hover:opacity-80"
            />
          </a>
          <a href="http://datrm.in/" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/datrmin-logo-small.png"
              alt="Datrm.in"
              width={200}
              height={100}
              className="hover:opacity-80"
            />
          </a>
          <a href="https://uspirg.org/home" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/PIRG-logo.png"
              alt="USPIRG"
              width={200}
              height={100}
              className="hover:opacity-80"
            />
          </a>
        </div>

        <h2 className="text-2xl font-bold mb-4">Annual Membership Details</h2>
        <p className="mb-6 italic">
          NOTE that ODI Partner Member, Lincoln Network is a 501(c)(3) non-profit organization. 
          Lincoln Network is running ODI administration until such time ODI becomes a non-profit. 
          Your donation will be tax deductible and will go towards the ODI administration and event costs.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Platinum: $50,000</h3>
            <ul className="list-disc pl-6">
              <li>Plan customized event with ODI team</li>
              <li>One on one brainstorm with Director</li>
              <li>Non-voting Advisory Council appointment</li>
              <li>First pick & 70% event sponsorship discount</li>
              <li>Prominent logo and listing on website</li>
              <li>Participation consideration in ODI projects and events</li>
              <li>Complimentary exhibition space and tickets at all major events</li>
              <li>Plan workshop series with ODI</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Partner: Annual significant contribution</h3>
            <ul className="list-disc pl-6">
              <li>Annual significant contribution:
                <ul className="list-disc pl-6">
                  <li>Participate in least one major event</li>
                  <li>Participate in discussions over the email mailing list(s) and/or projects</li>
                  <li>Partner Member is expected to provide sympathetic contributions like ODI administration, shared event organization, blog posts, articles, and/or project contributions.</li>
                </ul>
              </li>
              <li>Non-voting Advisory Council appointment</li>
              <li>Priority event sponsorship</li>
              <li>Logo and listing on ODI website member section</li>
              <li>Participation consideration in ODI projects and events</li>
              <li>Complimentary exhibition space and tickets at all major events</li>
              <li>Plan workshop with ODI</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Gold: $25,000</h3>
            <ul className="list-disc pl-6">
              <li>Priority event sponsorship with 50% discount</li>
              <li>Logo and listing on ODI website member section</li>
              <li>Participation consideration in ODI projects and events</li>
              <li>Complimentary exhibition space and tickets at all major events</li>
              <li>Plan workshop with ODI</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Silver: $10,000</h3>
            <ul className="list-disc pl-6">
              <li>Priority event sponsorship with 30% discount</li>
              <li>Logo and listing on ODI website member section</li>
              <li>Participation consideration in ODI projects and events</li>
              <li>Complimentary exhibition space and tickets at all major events</li>
              <li>Plan workshop with ODI</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Start-up: $5,000</h3>
            <ul className="list-disc pl-6">
              <li>Priority event sponsorship with 30% discount</li>
              <li>Logo and listing on ODI website member section</li>
              <li>Participation consideration in ODI projects and events</li>
              <li>Complimentary exhibition space and tickets at all major events</li>
              <li>Plan workshop with ODI</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Individual: Joins the email mailing list</h3>
            <ul className="list-disc pl-6">
              <li>Free access to ODI events</li>
              <li>Full access to ODI mailing list archives</li>
              <li>Full access to ODI mailing lists and projects (ODI will not sell or permit access to the mailing list membership for marketing purposes)</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Platinum</th>
                <th className="border border-gray-300 p-2">Partner</th>
                <th className="border border-gray-300 p-2">Gold</th>
                <th className="border border-gray-300 p-2">Silver</th>
                <th className="border border-gray-300 p-2">Startup</th>
                <th className="border border-gray-300 p-2">Individual</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">$50,000</td>
                <td className="border border-gray-300 p-2">Annual significant contribution</td>
                <td className="border border-gray-300 p-2">$25,000</td>
                <td className="border border-gray-300 p-2">$10,000</td>
                <td className="border border-gray-300 p-2">$5,000</td>
                <td className="border border-gray-300 p-2">Joins the email mailing list</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 