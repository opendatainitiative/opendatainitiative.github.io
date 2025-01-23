export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 pt-32">
      <h1 className="text-3xl font-bold mb-4">Resources</h1>
      <p className="mb-4">Government, technology, and policy resources organized</p>

      <section id="cities" className="mb-2">
        <h3 className="text-2xl font-semibold mb-1">CITIES</h3>
        <p className="mb-1">
          Our partner, the Sunlight Foundation, has been working on city open data for years, so there are many references to their resources here. This is a scaled down, stepwise version of the open data resources available from many sources. Find the full Sunlight Foundation <a href="https://sunlightfoundation.com/opendataguidelines/" target="_blank" className="text-blue-600 hover:underline">Open Data Policy Guidelines here</a> and <a href="http://whatworkscities.sunlightfoundation.com/" target="_blank" className="text-blue-600 hover:underline">Public Policy for Public Data Checklist here.</a>
        </p>
        <ul className="list-decimal pl-6">
          <li><a href="http://whatworkscities.sunlightfoundation.com/#section-h2-02" target="_blank" className="text-blue-600 hover:underline">Why do you need policy for government open data</a></li>
          <li><a href="http://whatworkscities.sunlightfoundation.com/#section-h2-05" target="_blank" className="text-blue-600 hover:underline">What is an open data policy for a city?</a></li>
          <li><a href="http://whatworkscities.sunlightfoundation.com/#section-h2-07" target="_blank" className="text-blue-600 hover:underline">How to make an open data policy into a city resolution?</a></li>
          <li><a href="https://sunlightfoundation.com/policy/open-cities/tactical-data-engagement/" target="_blank" className="text-blue-600 hover:underline">Implementing an open data policy in a city</a></li>
          <li><a href="http://www.opendatapolicies.org/browse/by-date/" target="_blank" className="text-blue-600 hover:underline">Index of existing city resolutions</a></li>
          <li><a href="/assets/doc/ODI_Recommended_Tools.pdf" className="text-blue-600 hover:underline">Government financial transparency tools</a></li>
          <li><a href="/assets/doc/ODI-Best-Practices.pdf" className="text-blue-600 hover:underline">Best practices for operating government financial transparency tools</a></li>
        </ul>
      </section>

      <hr className="my-2 border-gray-300" />

      <section id="states" className="mb-2">
        <h3 className="text-2xl font-semibold mb-1">STATES</h3>
        <p className="mb-1">
          State support of government financial transparency is critical for the success of the cities' open data implementations. Every city has financial reporting responsibilities to their state and likely to the <a href="http://gasb.org/" target="_blank" className="text-blue-600 hover:underline">Governmental Accounting Standards Board</a>. This makes working with these critical oversight organizations an important part of every city's responsibilities.
        </p>
        <ul className="list-decimal pl-6">
          <li><a href="http://whatworkscities.sunlightfoundation.com/#section-h2-02" target="_blank" className="text-blue-600 hover:underline">Why do you need policy for government open data</a></li>
          <li>What is an open data policy for a state? (First revision to be published in early March 2018)</li>
          <li>How to make an open data policy into state legislation? (First revision to be published in March 2018)</li>
          <li>Implementing an open data policy in a state (First revision to be published in March 2018)</li>
          <li><a href="/legislation" className="text-blue-600 hover:underline">Scored Index of existing state legislation</a></li>
          <li><a href="/transparency" className="text-blue-600 hover:underline">Report and Scored index of existing state open data portals</a></li>
          <li><a href="/assets/doc/ODI_Recommended_Tools.pdf" className="text-blue-600 hover:underline">Government financial transparency tools</a></li>
          <li><a href="/assets/doc/ODI-Best-Practices.pdf" className="text-blue-600 hover:underline">Best practices for operating government financial transparency tools</a></li>
        </ul>
      </section>

      <hr className="my-2 border-gray-300" />

      <section id="us-federal" className="mb-2">
        <h3 className="text-2xl font-semibold mb-1">US FEDERAL</h3>
        <p className="mb-1">
          Our partner, the Data Coalition, has been working to implement open data at the Federal level for years, so there are many references to their resources here. The people of the Data Coalition helped to pass the <a href="http://www.datacoalition.org/issues/data-act/" target="_blank" className="text-blue-600 hover:underline">The Digital Accountability and Transparency Act of 2014</a> (DATA Act) <a href="https://www.gpo.gov/fdsys/pkg/PLAW-113publ101/pdf/PLAW-113publ101.pdf" target="_blank" className="text-blue-600 hover:underline">(PL 113-101)</a> which provided an example to the nation of how government transparency could work on a large scale.
        </p>
        <ul className="list-decimal pl-6">
          <li><a href="http://whatworkscities.sunlightfoundation.com/#section-h2-02" target="_blank" className="text-blue-600 hover:underline">Why do you need policy for government open data</a></li>
          <li><a href="https://www.datacoalition.org/issues/policy-agenda/#management" target="_blank" className="text-blue-600 hover:underline">What is an open data policy for the US Federal government?</a></li>
          <li>How to make an open data policy into federal legislation? <a href="https://oversight.house.gov/issa-introduces-sweeping-open-government-spending-transparency-reforms/" target="_blank" className="text-blue-600 hover:underline">It takes an open government advocate Chairman of the House Committee on Oversight and Government Reform.</a></li>
          <li><a href="https://www.datacoalition.org/issues/data-act/" target="_blank" className="text-blue-600 hover:underline">Implementing an open data policy at the federal level</a></li>
          <li>Index of existing federal legislation. There are a few new federal open data laws in the works, but the <a href="/blog/legislation-review/2018-03-09-united-states-legislation-review" className="text-blue-600 hover:underline">DATA Act is it right now.</a></li>
          <li><a href="/assets/doc/ODI_Recommended_Tools.pdf" className="text-blue-600 hover:underline">Government financial transparency tools</a></li>
          <li><a href="/assets/doc/ODI-Best-Practices.pdf" className="text-blue-600 hover:underline">Best practices for operating government financial transparency tools</a></li>
        </ul>
      </section>

      <hr className="my-2 border-gray-300" />

      <section id="open-data-platforms" className="mb-2">
        <h3 className="text-2xl font-semibold mb-1">OPEN DATA PLATFORMS</h3>
        <p className="mb-1">
          This is a first generation list of open data sources and tools. As this list gets refined, it will become a checklist for the average constituent to utilize open data sources to publish reports and charts that explain problems and/or solutions.
        </p>
        <ul className="list-decimal pl-6">
          <li><a href="http://data.world" target="_blank" className="text-blue-600 hover:underline">Data.World</a></li>
          <li><a href="http://kaggle.com" target="_blank" className="text-blue-600 hover:underline">Kaggle</a></li>
          <li><a href="https://www.data.gov/" target="_blank" className="text-blue-600 hover:underline">Federal Data.gov</a></li>
          <li><a href="https://www.gapminder.org/data/" target="_blank" className="text-blue-600 hover:underline">Gapminder</a></li>
          <li><a href="https://www.census.gov/programs-surveys/state.html" target="_blank" className="text-blue-600 hover:underline">US Census</a></li>
          <li><a href="https://www.usaspending.gov/" target="_blank" className="text-blue-600 hover:underline">US Federal agency's spending online</a></li>
          <li><a href="http://www.hsr.ca.gov/Board/monthly_fa_committee_meeting.html" target="_blank" className="text-blue-600 hover:underline">California High Speed Rail project</a></li>
          <li><a href="http://www.socrata.com/discover/" target="_blank" className="text-blue-600 hover:underline">Socrata</a></li>
          <li><a href="https://index.okfn.org/dataset/" target="_blank" className="text-blue-600 hover:underline">Global Open Data Index</a></li>
          <li><a href="https://goodtables.io/" target="_blank" className="text-blue-600 hover:underline">GoodTables</a></li>
          <li><a href="https://openspending.org/" target="_blank" className="text-blue-600 hover:underline">Open Spending</a></li>
          <li><a href="https://github.com/KSP-CKAN/CKAN/releases" target="_blank" className="text-blue-600 hover:underline">The Comprehensive Knowledge Archive Network (CKAN)</a></li>
        </ul>
      </section>

      <hr className="my-2 border-gray-300" />

      <section id="policy-organizations" className="mb-2">
        <h3 className="text-2xl font-semibold mb-1">POLICY ORGANIZATIONS</h3>
        <p className="mb-1">
          Supporting open data and government financial transparency. We want to advance their policy and project goals.
        </p>
        <ul className="list-decimal pl-6">
          <li><a href="https://sunlightfoundation.com/policy/open-cities/" target="_blank" className="text-blue-600 hover:underline">Sunlight Foundation, Open Cities project</a></li>
          <li><a href="http://www.uspirg.org/reports/usp/following-money-2016-0" target="_blank" className="text-blue-600 hover:underline">US Public Interest Research Groups' Annual Government Spending Data report</a></li>
          <li><a href="https://www.buckeyeinstitute.org/data/" target="_blank" className="text-blue-600 hover:underline">Buckeye Institute Ohio Government Salary site</a></li>
          <li><a href="http://civicprofiles.californiapolicycenter.org/" target="_blank" className="text-blue-600 hover:underline">California Policy Center California Civic Performance Profiles site</a></li>
          <li><a href="http://govwiki.info/pdfs/" target="_blank" className="text-blue-600 hover:underline">GovWiki US Government CAFRs and Audits</a></li>
          <li><a href="https://okfn.org/" target="_blank" className="text-blue-600 hover:underline">Open Knowledge International</a></li>
          <li><a href="https://frictionlessdata.io/specs/fiscal-data-package/" target="_blank" className="text-blue-600 hover:underline">The Frictionless Data Package</a></li>
        </ul>
      </section>

      <hr className="my-2 border-gray-300" />

      <section id="universities" className="mb-2">
        <h3 className="text-2xl font-semibold mb-1">UNIVERSITIES</h3>
        <p className="mb-1">
          Active university sponsored projects and available work for university students.
        </p>
        <ul className="list-decimal pl-6">
          <li><a href="/work#help-wanted" className="text-blue-600 hover:underline">Open Data Initiative's projects with help wanted</a></li>
          <li><a href="https://usaspending-help.zendesk.com/hc/en-us/community/topics" target="_blank" className="text-blue-600 hover:underline">US Federal agency's reporting community pages</a></li>
          <li><a href="https://govex.jhu.edu/" target="_blank" className="text-blue-600 hover:underline">GovEx at Johns Hopkins University</a></li>
          <li><a href="http://civictechusc.org/" target="_blank" className="text-blue-600 hover:underline">USC Civic Tech, LA Open Data project</a></li>
        </ul>
      </section>

      <hr className="my-2 border-gray-300" />

      <section id="commercial-companies" className="mb-2">
        <h3 className="text-2xl font-semibold mb-1">COMMERCIAL COMPANIES</h3>
        <p className="mb-1">
          Government focused open data commercial companies. We want to support and better understand their software, implementation, and operations.
        </p>
        <ul className="list-decimal pl-6">
          <li><a href="https://opengov.com/" target="_blank" className="text-blue-600 hover:underline">OpenGov</a></li>
          <li><a href="https://socrata.com/" target="_blank" className="text-blue-600 hover:underline">Socrata</a></li>
          <li><a href="http://www.junar.com/" target="_blank" className="text-blue-600 hover:underline">Junar</a></li>
          <li><a href="https://www.viderum.com/" target="_blank" className="text-blue-600 hover:underline">Viderum</a></li>
          <li><a href="https://www.cleargov.com/" target="_blank" className="text-blue-600 hover:underline">ClearGov</a></li>
        </ul>
      </section>
    </div>
  )
}