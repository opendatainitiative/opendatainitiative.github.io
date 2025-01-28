'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
            <span>
              We post to the{' '}
              <a
                href="https://x.com/cali_doge"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                cali_doge
              </a>
              {' '}x account
            </span>
          </div>
          <div className="text-sm text-gray-600">
            For Contributors:{' '}
            <a
              href={`https://github.com/opendatainitiative/website`}
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              edit the page
            </a>
            , or{' '}
            <Link
              href="/contributing"
              className="text-blue-600 hover:underline"
            >
              get page editing help
            </Link>
          </div>
          <div className="text-sm text-gray-600">
            <Link href="/about" className="text-blue-600 hover:underline">
              About Open Data Initiative
            </Link>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <a
              rel="license"
              href="http://creativecommons.org/licenses/by/4.0/"
              target="_blank"
            >
              <Image
                alt="Creative Commons License"
                src="https://i.creativecommons.org/l/by/4.0/80x15.png"
                width={80}
                height={15}
                className="inline" />
            </a>
            <span>
              This work by the Open Data Initiative, unless otherwise noted, is licensed under a{' '}
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by/4.0/"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Creative Commons Attribution 4.0 International License
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
