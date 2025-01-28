import React from 'react';

export default function Regulations() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Regulatory Cost Impact</h1>
      
      <section className="mb-12">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
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
            <p className="text-sm text-gray-600 mt-2">*State-level costs based on 2009 data; current burden likely higher</p>
          </div>
        </div>
      </section>
      <section className="mt-16 border-t pt-8">
        <h2 className="text-xl font-semibold mb-4">Sources</h2>
        <div className="space-y-2 text-sm text-gray-600">
          <p>[1] Ten Thousand Commandments Report 2023 - <a href="https://cei.org/wp-content/uploads/2023/11/10K_Commandments.pdf" className="text-blue-600 hover:underline">CEI Report</a></p>
          <p>[2] NAM Study 2023 - <a href="https://nam.org/wp-content/uploads/2023/11/NAM-3731-Crains-Study-R3-V2-FIN.pdf" className="text-blue-600 hover:underline">NAM Report</a></p>
          <p>[3] Cost of Regulation Study - <a href="https://cleanwatersocal.org/media/acfupload/reference/Cost_of_Regulation_Study___Final.pdf" className="text-blue-600 hover:underline">Clean Water SoCal</a></p>
          <p>[4] California Labor Force Data - <a href="https://ycharts.com/indicators/california_labor_force" className="text-blue-600 hover:underline">YCharts</a></p>
          <p>[5] Mercatus Center California Regulatory Snapshot - <a href="https://www.mercatus.org/regsnapshots24/california" className="text-blue-600 hover:underline">Mercatus</a></p>
        </div>
      </section>
    </>
  );
} 