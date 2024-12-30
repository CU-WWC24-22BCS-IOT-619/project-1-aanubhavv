import { Suspense } from 'react'
import FilterSearch from '@/components/FilterSearch'
import ProfessionalCard from '@/components/ProfessionalCard'
import { professionals } from './data'

export default function MentalHealthDirectory() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto p-10">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Mental Health Professionals Directory</h1>
          <p className="text-xl text-green-700 mb-8">
            Connect with qualified mental health experts who can provide the support you need
          </p>
          <Suspense fallback={<div>Loading...</div>}>
            <FilterSearch />
          </Suspense>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionals.map((professional) => (
            <Suspense key={professional.id} fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>}>
              <ProfessionalCard professional={professional} />
            </Suspense>
          ))}
        </section>
      </main>
    </div>
  )
}

