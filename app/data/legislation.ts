export interface LegislationItem {
  title: string;
  organization: string;
  session: string;
  billNumber: string;
  billText: string;
  source: string;
  sponsors?: string;
  pastLegislation?: string;
  relatedLegislation?: string;
  introduced?: string;
  lastActivity: string;
  comments?: string;
  review?: string;
  publicDefault?: number;
  techStandards?: number;
  accountingStandards?: number;
  metadataStandards?: number;
  annualReport?: number;
  biAnnualMeetings?: number;
  incentives?: number;
  passedHouse?: number;
  passedSenate?: number;
  signedLaw?: number;
}

export const legislationData: LegislationItem[] = [
  {
    title: "Relating To Open Data",
    organization: "Hawaii",
    session: "2013",
    billNumber: "HB632",
    billText: "/doc/2013-07-09-hawaii-HB632.pdf",
    source: "https://openstates.org/hi/bills/2013%20Regular%20Session/HB632/",
    sponsors: "Rep. Clift Tsuji, Rep. Ken Ito, Rep. Marcus R. Oshiro, Rep. Calvin K.Y. Say, Gregg Takayama",
    lastActivity: "9-Jul-2013",
    comments: "signed into law"
  },
  {
    title: "Open Operating Standards Act",
    organization: "Illinois",
    session: "98th",
    billNumber: "HB1040",
    billText: "http://ilga.gov/legislation/fulltext.asp?DocName=09800HB1040enr&GA=98&SessionId=85&DocTypeId=HB&LegID=71487&DocNum=1040&GAID=12&Session=&print=true",
    source: "https://openstates.org/il/bills/98th/HB1040/",
    sponsors: "Rep. Michaell W. Tryon, Rep. Pamela J. Althoff",
    lastActivity: "7-Mar-2014",
    comments: "signed into law"
  },
  {
    title: "State Government - Open Data Policy - Council on Open Data",
    organization: "Maryland",
    session: "2014",
    billNumber: "SB644",
    billText: "/doc/2014-04-08-maryland-sb0644.pdf",
    source: "https://www.congress.gov/bill/113th-congress/senate-bill/994",
    sponsors: "Rep. William C Ferguson IV",
    lastActivity: "8-Apr-2014",
    comments: "signed into law"
  },
  {
    title: "Relative to the use of open source software and open data formats by state agencies and relative to the adoption of a statewide information policy regarding open government data standards",
    organization: "New Hampshire",
    session: "2012",
    billNumber: "HB418",
    billText: "http://www.gencourt.state.nh.us/legislation/2012/HB0418.html",
    source: "https://openstates.org/nh/bills/2012/HB418/",
    sponsors: "Rep. Calvin D. Pratt, Rep. George A Lambert",
    lastActivity: "12-Mar-2012",
    comments: "signed into law"
  },
  {
    title: "Improve transparency of public data",
    organization: "Ohio",
    session: "GA132",
    billNumber: "HB3",
    billText: "/doc/2017-02-01-ohio-ga132-hr3.pdf",
    source: "https://openstates.org/oh/bills/132/HB3/",
    sponsors: "Rep. Mike Duffey, Rep. Christina Hagan",
    pastLegislation: "GA130-HB321, GA130-HB323, GA130-HB175, GA131-HB46",
    relatedLegislation: "GA132-HB40",
    introduced: "1-Feb-2017",
    lastActivity: "13-Dec-2017",
    comments: "Passed House Finance Committee Vote. Good outline of DataOhio board responsibilities, but missing details on the definition, e.g. Ability to export records in TXT format with recommended metadata headers, recommend accounting standards such as  utilizing the state accounting system and base common fields, and metadata at a minimum define the field headers for the accounting standard fields.",
    review: "/blog/legislation-review/2018-01-25-ohio-hb3-legislation-review",
    publicDefault: 10,
    techStandards: 5,
    accountingStandards: 7,
    metadataStandards: 5,
    annualReport: 10,
    biAnnualMeetings: 10,
    incentives: 10,
    passedHouse: 0,
    passedSenate: 0,
    signedLaw: 0
  },
  {
    title: "Establish State Government Expenditure Database",
    organization: "Ohio",
    session: "GA132",
    billNumber: "HB40",
    billText: "/doc/2017-02-06-ohio-ga132-hb40.pdf",
    source: "https://openstates.org/oh/bills/132/HB40/",
    pastLegislation: "GA130-HB321, GA130-HB323, GA130-HB175, GA131-HB46",
    relatedLegislation: "GA132-HB3",
    introduced: "6-Feb-2017",
    lastActivity: "6-Feb-2017",
    comments: "Introduced to the Finance Committee",
    review: "/blog/legislation-review/2018-03-13-ohio-hb40-legislation-review",
    publicDefault: 10,
    techStandards: 5,
    accountingStandards: 7,
    metadataStandards: 5,
    annualReport: 10,
    biAnnualMeetings: 10,
    incentives: 10,
    passedHouse: 0,
    passedSenate: 0,
    signedLaw: 0
  },
  {
    title: "Digital Accountability and Transparency Act of 2014 or the DATA Act",
    organization: "United States",
    session: "113th Congress",
    billNumber: "S.994",
    billText: "https://www.congress.gov/bill/113th-congress/senate-bill/994",
    source: "https://www.congress.gov/bill/113th-congress/senate-bill/994",
    sponsors: "Sen. Mark Warner",
    introduced: "21-May-2013",
    lastActivity: "9-May-2014",
    comments: "signed into law",
    review: "/blog/legislation-review/2018-03-09-united-states-legislation-review",
    publicDefault: 3,
    techStandards: 3,
    accountingStandards: 3,
    metadataStandards: 0,
    annualReport: 5,
    biAnnualMeetings: 0,
    incentives: 0,
    passedHouse: 10,
    passedSenate: 10,
    signedLaw: 10
  },
  {
    title: "Availability of Public Information Amendments",
    organization: "Utah",
    session: "2013",
    billNumber: "SB283",
    billText: "/doc/2013-03-22-utah-sb0283.pdf",
    source: "https://openstates.org/ut/bills/2013/SB283/",
    lastActivity: "22-Mar-2013",
    comments: "signed into law"
  },
  {
    title: "State Data Portal Amendments",
    organization: "Utah",
    session: "2014",
    billNumber: "SB70",
    billText: "/doc/2014-03-27-utah-sb0070.pdf",
    source: "https://openstates.org/ut/bills/2014/SB70/",
    sponsors: "Rep. Deidre M. Henderson",
    lastActivity: "27-Mar-2014",
    comments: "signed into law"
  }
]; 