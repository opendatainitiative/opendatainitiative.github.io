import React from 'react';
import Script from 'next/script';

const NewsPage = () => {
  return (
    <div>
      <h1>News</h1>
      <p>All the news about government financial transparency</p>

      <table>
        <thead>
          <tr>
            <th>Twitter</th>
            <th>Facebook</th>
            <th>LinkedIn</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a 
                className="twitter-timeline" 
                data-width="340" 
                data-height="1000" 
                href="https://twitter.com/OpenDataOrg?ref_src=twsrc%5Etfw"
              >
                Tweets by OpenDataOrg
              </a>
              <Script src="https://platform.twitter.com/widgets.js" strategy="lazyOnload" />
            </td>
            <td>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fopendatainitiative&tabs=timeline&width=340&height=1000&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width={340}
                height={1000}
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowTransparency={true}
                allow="encrypted-media"
              />
            </td>
            <td valign="top">
              <Script src="//platform.linkedin.com/in.js" strategy="lazyOnload" />
              <div 
                data-id="18216879" 
                data-format="inline" 
                data-related="false"
                className="IN-widget"
              />
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:activity:6410180791174860800"
                height={800}
                width={340}
                frameBorder="0"
                allowFullScreen
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NewsPage; 