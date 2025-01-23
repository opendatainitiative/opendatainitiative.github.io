export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Open Data Initiative. All rights reserved.
          </p>
          <p className="text-center text-xs text-gray-500">
            Making government financial data consistent, transparent, and easily available
          </p>
        </div>
      </div>
    </footer>
  )
} 