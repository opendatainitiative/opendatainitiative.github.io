export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 pt-32">
      <h1 className="text-3xl font-bold mb-6">Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Government Checklists</h2>
          <ul className="space-y-2">
            <li><a href="#cities" className="text-blue-600 hover:underline">Cities</a></li>
            <li><a href="#states" className="text-blue-600 hover:underline">States</a></li>
            <li><a href="#us-federal" className="text-blue-600 hover:underline">US Federal</a></li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Open Data Resources</h2>
          <ul className="space-y-2">
            <li><a href="/legislation" className="text-blue-600 hover:underline">Open Data Legislation</a></li>
            <li><a href="/transparency" className="text-blue-600 hover:underline">Government Open Data Portals</a></li>
            <li><a href="#open-data-platforms" className="text-blue-600 hover:underline">Open Data Platforms</a></li>
          </ul>
        </section>
      </div>
    </div>
  )
} 