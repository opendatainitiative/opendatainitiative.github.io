import React from 'react';
import Image from 'next/image';

const WorkPage = () => {
  return (
    <div>
      <h1>Work</h1>
      <table>
        <tbody>
          <tr>
            <td colSpan={6}>
              We are a group of government, technology, and policy advocates working together. Each of these projects is filling a need to make government financial transparency work. All of our ODI work is open source, so you can find all of the source code, documentation, and outstanding work to be completed online, transparent, and available for contribution.
            </td>
          </tr>
          <tr>
            <td width="33%">
              <h3>OPEN DATA LEGISLATION</h3>
              <a href="/legislation">
                <Image src="/assets/img/legislation-icon.png" alt="Open Data Legislation" width={200} height={200} />
              </a>
            </td>
            <td width="33%">
              <h3>GOVERNMENT OPEN DATA PORTALS</h3>
              <a href="/transparency">
                <Image src="/assets/img/ohiocheckbook-small.png" alt="Transparency" width={200} height={200} />
              </a>
            </td>
            <td width="33%">
              <h3>ODI WEBSITE</h3>
              <a href="/">
                <Image src="/assets/img/odi-site.png" alt="ODI Website" width={200} height={200} />
              </a>
            </td>
          </tr>
          <tr>
            <td width="33%">
              <a href="https://github.com/opendatainitiative/opendatalegislation/">Source</a><br />
              <a href="https://github.com/opendatainitiative/opendatalegislation/wiki">Wiki</a><br />
              <a href="https://github.com/opendatainitiative/opendatalegislation/issues">Work TBD</a>
            </td>
            <td width="33%">
              <a href="https://github.com/opendatainitiative/transparency/">Source</a><br />
              <a href="https://github.com/opendatainitiative/transparency/wiki">Wiki</a><br />
              <a href="https://github.com/opendatainitiative/transparency/issues">Work TBD</a>
            </td>
            <td width="33%">
              <a href="https://github.com/opendatainitiative/opendatainitiative.github.io">Source</a><br />
              <a href="/about">About</a><br />
              <a href="https://github.com/opendatainitiative/opendatainitiative.github.io/issues">Work TBD</a><br />
              CI software pipeline <a href="https://gitlab.com/sarob/opendatainitiative.github.io/commits/master">
                <Image 
                  alt="pipeline status" 
                  src="https://gitlab.com/sarob/opendatainitiative.github.io/badges/master/pipeline.svg"
                  width={100}
                  height={20}
                />
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={3}><hr />
              <h3><a>HELP-WANTED</a></h3>
              These are the larger issues that need to get completed to move government financial transparency forward. Take a close look and state your interest directly on the issue below. All our work is open source, so we welcome public contributions. A project team member will respond, so we can start working together.
            </td>
          </tr>
          <tr>
            <td colSpan={1}>Active Projects: 3</td>
            <td colSpan={2}>Available Projects: 3</td>
          </tr>
          <tr>
            <td colSpan={3}>
              <ol>
                <li><a target="_blank" href="https://github.com/opendatainitiative/opendatainitiative.github.io/issues/26">Import mass PDFs (long term project)</a></li>
                <li><a target="_blank" href="https://github.com/opendatainitiative/opendatainitiative.github.io/issues/27">Manipulate imported PDFs as data through policy (long term project)</a></li>
                <li><a target="_blank" href="https://github.com/opendatainitiative/opendatainitiative.github.io/issues/28">Visualization tools for imported PDF data (long term project)</a></li>
              </ol>
            </td>
          </tr>
          <tr>
            <td colSpan={3}><hr />
              <h3>OPEN DATA INITIATIVE PUBLIC MAILING LIST</h3>
              Find all our conversations online and available to be read. Don't be shy, join the mailing list and lets work together.
              <iframe 
                frameBorder="no"
                marginWidth={0} 
                marginHeight={0} 
                width={560} 
                height={420} 
                src="https://lists.opendatainitiative.io/pipermail/opendatainitiative/"
              />
            </td>
          </tr>
          <tr>
            <td colSpan={3}><hr />
              <h3>Open Hub Analysis of the Open Data Initiative Project</h3>
            </td>
          </tr>
          <tr>
            <td>
              <script 
                type='text/javascript' 
                src='https://www.openhub.net/p/opendatainitiative/widgets/project_factoids_stats?format=js'
                async
              />
            </td>
            <td colSpan={2}><a href="https://www.openhub.net/p/_compare?project_1=OpenGovFoundation-Madison&project_2=CKAN&project_0=Open+Data+Initiative">Compare ODI work with other government open data, open source organizations</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WorkPage; 