"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Pie } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary components
Chart.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const data = {
    labels: ['Depression', 'Anxiety', 'Happiness'],
    datasets: [
      {
        data: [5, 25, 70],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

  return (
    <div className="bg-white">
      <div className="p-4 max-w-5xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold ml-6 mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="col-span-1 md:col-span-2 lg:col-span-3 w-full bg-white">
            <CardHeader>
              <CardTitle>Your mental today</CardTitle>
              <CardDescription>Visual representation of your mood levels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center px-4">
                <div className="w-full max-w-xs">
                  <Pie data={data} options={options} />
                </div>
                <div className="w-full md:w-1/2 pl-0 md:pl-4 ml-0 md:ml-16 mt-4 md:mt-0">
                  <p className="text-sm text-gray-500">Today&apos;s Date: {today}</p>
                  <h2 className="text-xl font-semibold">You are feeling happy but a bit anxious!</h2>
                  <p>Your current mood is positive! Keep up the good work.</p>
                  <h3 className="mt-4 font-medium">Tips to be Happier:</h3>
                  <ul className="list-disc pl-5">
                    <li>Practice gratitude daily.</li>
                    <li>Engage in physical activity.</li>
                    <li>Connect with friends and family.</li>
                    <li>Try mindfulness or meditation.</li>
                    <li>Connect with our professionals.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Journal</CardTitle>
              <CardDescription>Express your thoughts</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/journal">Write Entry</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Assessments</CardTitle>
              <CardDescription>Take self-assessments</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/assessments">Start Assessment</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Professionals</CardTitle>
              <CardDescription>connect with our professionals</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/professionals">Contact</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

