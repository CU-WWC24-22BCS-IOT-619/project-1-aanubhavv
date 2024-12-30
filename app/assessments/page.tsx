import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const assessments = [
  { id: 1, title: "Depression Screening", description: "PHQ-9 questionnaire" },
  { id: 2, title: "Anxiety Screening", description: "GAD-7 questionnaire" },
  { id: 3, title: "Stress Assessment", description: "Perceived Stress Scale" },
]

export default function Assessments() {
  return (
    <div className="max-w-5xl mx-auto mt-10 space-y-6">
      <h1 className="ml-6 text-3xl font-bold">Self-Assessments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assessments.map((assessment) => (
          <Card key={assessment.id}>
            <CardHeader>
              <CardTitle>{assessment.title}</CardTitle>
              <CardDescription>{assessment.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href={`/assessments/${assessment.id}`}>Start Assessment</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

