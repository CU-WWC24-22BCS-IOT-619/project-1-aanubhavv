import AssessmentClient from './AssessmentClient';

export async function generateStaticParams() {
  const assessmentIds = [1, 2, 3]; // Example IDs
  return assessmentIds.map(id => ({ id: id.toString() }));
}

export default function AssessmentPage({ params }: { params: { id: string } }) {
  const assessmentId = parseInt(params.id)

  return (
    <AssessmentClient assessmentId={assessmentId} />
  )
}


