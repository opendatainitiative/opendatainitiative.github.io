import Regulations from '@/app/components/Regulations'

export const metadata = {
  title: 'Regulatory Impact Analysis | Open Data Initiative',
  description: 'Analysis of regulatory impact on workers at federal and state levels, including detailed statistics and economic burden calculations.',
}

export default function RegulationsPage() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-24">
      <Regulations />
    </main>
  )
} 