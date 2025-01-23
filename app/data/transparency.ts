export interface TransparencyItem {
  name: string;
  pirgScore2016: number;
  pirgScore2018: number;
  accessibility: number;
  downloadability: number;
  comments?: string;
  publishedPolicy?: string;
  source: string;
  review?: string;
}

export const transparencyData: TransparencyItem[] = [
  {
    name: "Alabama",
    pirgScore2016: 60,
    pirgScore2018: 56,
    accessibility: 2,
    downloadability: 2,
    comments: "Not comprehensive and available for download only in PDF format",
    publishedPolicy: "http://alisondb.legislature.state.al.us/alison/Splash_Bills.aspx",
    source: "http://open.alabama.gov/"
  },
  {
    name: "Connecticut",
    pirgScore2016: 99,
    pirgScore2018: 93,
    accessibility: 10,
    downloadability: 10,
    source: "http://transparency.ct.gov/html/main.asp",
    review: "Policy by State Legislature. Site was created in accordance with Public Act 10-155, An Act Requiring the Establishment of a Searchable Database for State Expenditures. This Public Act requires the Office of Fiscal Analysis to establish and maintain a website for the purpose of posting state agency expenditures, including contracts and grants. The Office of Fiscal Analysis (OFA) is a nonpartisan office that supports the Connecticut General Assembly. To read more about us, please visit our website at http://www.cga.ct.gov/ofa."
  },
  {
    name: "Delaware",
    pirgScore2016: 77,
    pirgScore2018: 80,
    accessibility: 5,
    downloadability: 5,
    comments: "Relatively easy to navigate. interactive. Socrata powered website. Data available for download in .CSV format.",
    source: "https://accounting.delaware.gov/checkbook/"
  },
  {
    name: "Kansas",
    pirgScore2016: 92,
    pirgScore2018: 85,
    accessibility: 7,
    downloadability: 7,
    source: "http://www.kansas.gov/KanView/faq",
    review: "Policy by State Legislature. In 1976, the General Assembly enacted the Open Records Act, KRS 61.870 to KRS 61.884, which establishes a right of access to public records. The General Assembly recognized that free and open examination of public records is in the public interest. All public records, whether they are stored in a computer or on paper, must be open for inspection unless the records are exempted by one or more of the fourteen exemptions found in the Act. You may inspect any nonexempt public record regardless of your identity, and you may seek enforcement of the Act if you are denied this right."
  },
  {
    name: "Kentucky",
    pirgScore2016: 88,
    pirgScore2018: 85,
    accessibility: 5,
    downloadability: 6,
    comments: "Other website for transparency; https://transparency.ky.gov/search/Pages/spendingsearch.aspx#/spending",
    source: "http://transparency.ky.gov/transparency/Pages/default.aspx"
  },
  {
    name: "Louisiana",
    pirgScore2016: 96,
    pirgScore2018: 90,
    accessibility: 7,
    downloadability: 7,
    source: "https://wwwcfprd.doa.louisiana.gov/latrac/portal.cfm"
  },
  {
    name: "Minnesota",
    pirgScore2016: 86,
    pirgScore2018: 85,
    accessibility: 5,
    downloadability: 5,
    source: "https://mn.gov/mmb/transparency-mn/",
    review: "Policy by State Legislature. H.B. 2611 STATUS March 3, 2014; To House Committee on State Government Finance & Veterans Affairs. Relates to state government; appropriates money for a grant for open government, civic technology, and open data."
  },
  {
    name: "Mississippi",
    pirgScore2016: 79,
    pirgScore2018: 63,
    accessibility: 5,
    downloadability: 4,
    comments: "HTML data download facility. difficult to use and manipulate",
    source: "http://www.transparency.mississippi.gov/"
  },
  {
    name: "Missouri",
    pirgScore2016: 77,
    pirgScore2018: 62,
    accessibility: 4,
    downloadability: 2,
    comments: "Socrata powered open data website. data not available easily. access to datasets limited",
    source: "https://mapyourtaxes.mo.gov/MAP/Portal/Default.aspx"
  },
  {
    name: "Montana",
    pirgScore2016: 92,
    pirgScore2018: 69,
    accessibility: 10,
    downloadability: 10,
    source: "https://transparency.mt.gov/"
  },
  {
    name: "Nebraska",
    pirgScore2016: 90,
    pirgScore2018: 80,
    accessibility: 6,
    downloadability: 5,
    comments: "More data available through; http://www.nebraska.gov/government/open-data/",
    source: "http://www.statespending.nebraska.gov/"
  },
  {
    name: "Nevada",
    pirgScore2016: 83,
    pirgScore2018: 85,
    accessibility: 5,
    downloadability: 5,
    comments: "Difficult to use layout. open data website under consideration. review website at a later stage",
    source: "http://open.nv.gov/"
  },
  {
    name: "New Hampshire",
    pirgScore2016: 78,
    pirgScore2018: 73,
    accessibility: 4,
    downloadability: 4,
    comments: "Difficult to navigate layout. data available for bulk download",
    source: "https://www.nh.gov/transparentnh/",
    review: "Policy by State Legislature. Chapter 65 - Laws of 2010, an act to promote transparency in the state budget process by providing the public with on-line access to budget, expenditure and revenue information and reports which are not confidential and which are vital to good government. The site is being developed and maintained by the New Hampshire Department of Administrative Services and the Department of Information Technology, in consultation with the legislative oversight committee established by Chapter 65 - Laws of 2010"
  },
  {
    name: "New Jersey",
    pirgScore2016: 83,
    pirgScore2018: 67,
    accessibility: 7,
    downloadability: 7,
    comments: "Easy to access. interactive. bulk downloads",
    source: "http://www.yourmoney.nj.gov/"
  },
  {
    name: "New Mexico",
    pirgScore2016: 77,
    pirgScore2018: 75,
    accessibility: 5,
    downloadability: 4,
    comments: "Difficult to navigate but relatively comprehensive database. data available in both .csv and PDF format.",
    source: "http://www.sunshineportalnm.com/"
  },
  {
    name: "Ohio",
    pirgScore2016: 100,
    pirgScore2018: 98,
    accessibility: 10,
    downloadability: 10,
    source: "http://ohiotreasurer.gov/Transparency/Ohios-Online-Checkbook"
  },
  {
    name: "Oklahoma",
    pirgScore2016: 90.5,
    pirgScore2018: 60,
    accessibility: 10,
    downloadability: 10,
    source: "https://data.ok.gov/",
    review: "Policy by State Legislature. H.B. 1888 STATUS Feb. 11, 2013; From House Committee on Government Modernization.Relates to public finance. Establishes the Oklahoma State Government Open Records One-Stop Initiative. Imposes duties on the chief information officer. Provides for delivery of certain documents. Requires electronic delivery. Requires certain documents be made available to the public. Provides for statutory construction. Provides for codification. Provides an effective date."
  },
  {
    name: "Oregon",
    pirgScore2016: 100,
    pirgScore2018: 81,
    accessibility: 10,
    downloadability: 10,
    publishedPolicy: "http://www.oregon.gov/Pages/datamoderation.aspx",
    source: "http://www.oregon.gov/transparency/Pages/index.aspx"
  },
  {
    name: "Pennsylvania",
    pirgScore2016: 83,
    pirgScore2018: 73,
    accessibility: 7,
    downloadability: 7,
    comments: "User friendly data catalogs. easy navigation and bulk data downloadability",
    source: "http://pennwatch.pa.gov/Pages/default.aspx",
    review: "Policy by Governor. April 19, 2016, Governor Wolf signed an executive order to release agency data to the public in an open, accessible format, and on August 22, 2016, his administration launched OpenDataPA, Pennsylvania's first open data portal."
  },
  {
    name: "Rhode Island",
    pirgScore2016: 81.5,
    pirgScore2018: 55,
    accessibility: 5,
    downloadability: 4,
    source: "http://www.transparency.ri.gov/"
  },
  {
    name: "South Carolina",
    pirgScore2016: 78,
    pirgScore2018: 87,
    accessibility: 4,
    downloadability: 4,
    comments: "Data available for bulk download in .csv format. but not interactive or easy to use.",
    source: "http://www.cg.sc.gov/fiscaltransparency/Pages/default.aspx",
    review: "Master Agreement with the State of South Carolina establishes an eGovernment Oversight Committee that helps to set policies and overall priorities, approve projects and services, authorize access fees and ensure that the portal utilizes funds in the best interests of the State."
  },
  {
    name: "South Dakota",
    pirgScore2016: 90,
    pirgScore2018: 72,
    accessibility: 5,
    downloadability: 5,
    source: "http://open.sd.gov/",
    review: "Data is available online forms, but not easily available to get access to in a reporting format. Some areas allow for downloading all data in CSV, where others have no ability to download data. Unknown policy that required the Comprehensive Annual Financial Report  http://open.sd.gov/Info_fr.aspx"
  },
  {
    name: "Tennessee",
    pirgScore2016: 85.5,
    pirgScore2018: 54,
    accessibility: 7,
    downloadability: 7,
    source: "https://www.tn.gov/transparenttn"
  },
  {
    name: "Wisconsin",
    pirgScore2016: 97,
    pirgScore2018: 94,
    accessibility: 7,
    downloadability: 10,
    source: "http://openbook.wi.gov/",
    review: "Limited ability to generate reports, while many data sources available to review. Downloadable as XML, XLS, and CSV."
  },
  {
    name: "Wyoming",
    pirgScore2016: 73,
    pirgScore2018: 35,
    accessibility: 4,
    downloadability: 4,
    comments: "Data available in PDF format. not available in a single website. but links to others are provided",
    source: "http://ai.wyo.gov/home/transparency"
  }
]; 