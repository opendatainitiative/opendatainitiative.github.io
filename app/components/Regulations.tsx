import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Regulation() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>California Regulations per Worker</CardTitle>
          <CardDescription>Based on data from December 2023</CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold mb-2">Key Numbers:</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Total California regulations: 156,266 sections</li>
            <li>Full-time workers in California: 15,126,000</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Calculation</h3>
          <p className="mb-2">
            <strong>Ratio of Regulations to Workers:</strong>
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>156,266 ÷ 15,126,000 = 0.0103 regulations per worker</li>
            <li>Or approximately 1 regulation for every 97 full-time workers</li>
          </ul>

          <p className="text-sm text-gray-600">
            This calculation represents the regulatory density across California's workforce, with regulations spanning
            29 California Codes covering areas from Business and Professions to Welfare and Institutions.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Sources</h3>
          <ol className="list-decimal pl-5 text-sm text-gray-600">
            <li>
              How Many Sections Are in California's Codes (Statutes)?
              https://californiaglobe.com/fr/how-many-sections-are-in-californias-codes-statutes/
            </li>
            <li>
              California Demographic Labor Force
              https://labormarketinfo.edd.ca.gov/specialreports/CA_Employment_Summary_Table.pdf
            </li>
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Federal Regulations per Worker</CardTitle>
          <CardDescription>Based on data from December 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold mb-2">Key Numbers:</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Full-time workers: 133,510,000</li>
            <li>Total CFR sections: Over 700,000 regulatory entries</li>
            <li>Annual new regulations: 4,000</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Calculations</h3>
          <p className="mb-2">
            <strong>Current Ratio:</strong>
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Total regulations per worker: 700,000 ÷ 133,510,000 = 0.00524 regulations per worker</li>
            <li>Or approximately 1 regulation for every 191 full-time workers</li>
          </ul>

          <p className="mb-2">
            <strong>Annual Addition Rate:</strong>
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>New regulations per worker annually: 4,000 ÷ 133,510,000 = 0.00003 new regulations per worker</li>
            <li>Or approximately 1 new regulation for every 33,378 workers</li>
          </ul>

          <p className="text-sm text-gray-600">
            These calculations represent the regulatory burden across the 50 titles of the Code of Federal Regulations
            that cover all areas of federal regulation.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Sources</h3>
          <ol className="list-decimal pl-5 text-sm text-gray-600">
            <li>
              United States Full Time Employment - Trading Economics
              https://tradingeconomics.com/united-states/full-time-employment
            </li>
            <li>Code of Federal Regulations - Wikipedia https://en.wikipedia.org/wiki/Code_of_Federal_Regulations</li>
            <li>
              West's Code of Federal Regulations General Index, 2024 ed.
              https://store.legal.thomsonreuters.com/law-products/Regulations/Wests-Code-of-Federal-Regulations-General-Index-2024-ed/p/107009430
            </li>
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Regulatory Cost Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-semibold mb-4">California Regulatory Burden Per Worker</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="space-y-2">
              <p className="font-semibold">Federal Costs</p>
              <p className="text-3xl font-bold text-blue-600">$99,948</p>
              <p className="text-sm text-gray-600">Based on $1.939 trillion total federal costs</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">State Costs</p>
              <p className="text-3xl font-bold text-blue-600">$25,412</p>
              <p className="text-sm text-gray-600">Based on $492.994 billion total state costs</p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-800">Total Economic Impact Per Worker: $125,360</p>
            <p className="text-sm text-gray-600 mt-2">
              *State-level costs based on 2009 data; current burden likely higher
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4">Sources</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>
              [1] Ten Thousand Commandments Report 2023 -{" "}
              <a
                href="https://cei.org/wp-content/uploads/2023/11/10K_Commandments.pdf"
                className="text-blue-600 hover:underline"
              >
                CEI Report
              </a>
            </p>
            <p>
              [2] NAM Study 2023 -{" "}
              <a
                href="https://nam.org/wp-content/uploads/2023/11/NAM-3731-Crains-Study-R3-V2-FIN.pdf"
                className="text-blue-600 hover:underline"
              >
                NAM Report
              </a>
            </p>
            <p>
              [3] Cost of Regulation Study -{" "}
              <a
                href="https://cleanwatersocal.org/media/acfupload/reference/Cost_of_Regulation_Study___Final.pdf"
                className="text-blue-600 hover:underline"
              >
                Clean Water SoCal
              </a>
            </p>
            <p>
              [4] California Labor Force Data -{" "}
              <a href="https://ycharts.com/indicators/california_labor_force" className="text-blue-600 hover:underline">
                YCharts
              </a>
            </p>
            <p>
              [5] Mercatus Center California Regulatory Snapshot -{" "}
              <a href="https://www.mercatus.org/regsnapshots24/california" className="text-blue-600 hover:underline">
                Mercatus
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
