"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"


const questionsMap: { [key: number]: string[] } = {
  1: [
    "Little interest or pleasure in doing things?",
    "Feeling down, depressed, or hopeless?",
    "Trouble falling or staying asleep, or sleeping too much?",
    "Feeling tired or having little energy?",
    "Poor appetite or overeating?",
  ],
  2: [
    "Feeling nervous, anxious, or on edge?",
    "Not being able to stop or control worrying?",
    "Worrying too much about different things?",
    "Trouble relaxing?",
    "Being so restless that it is hard to sit still?",
  ],
  3: [
    "Feeling overwhelmed by stress?",
    "Having trouble relaxing?",
    "Feeling irritable or angry?",
    "Experiencing physical symptoms like headaches or stomach issues?",
    "Finding it hard to concentrate?",
  ],
}

const getScoreCategory = (score: number, assessmentId: number): string => {
  if (assessmentId === 1) { // Depression
    if (score <= 3) return "Not Depressed";
    if (score <= 5) return "Mildly Depressed";
    if (score <= 10) return "Moderately Depressed";
    return "Severely Depressed";
  } else if (assessmentId === 2) { // Anxiety
    if (score <= 3) return "Not Anxious";
    if (score <= 5) return "Mildly Anxious";
    if (score <= 10) return "Moderately Anxious";
    return "Severely Anxious";
  } else if (assessmentId === 3) { // Stress
    if (score <= 3) return "Not Stressed";
    if (score <= 5) return "Mildly Stressed";
    if (score <= 10) return "Moderately Stressed";
    return "Severely Stressed";
  }
  return "Unknown Assessment";
}

interface AssessmentClientProps {
  assessmentId: number;
}

export default function AssessmentClient({ assessmentId }: AssessmentClientProps) {
  const questions = questionsMap[assessmentId] || []; // Get questions based on assessmentId
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(0))
  const [score, setScore] = useState<number | null>(null)
  const [recommendation, setRecommendation] = useState<string>("")
  const [showScrollMessage, setShowScrollMessage] = useState<boolean>(false)

  const handleAnswer = (questionIndex: number, value: number) => {
    const newAnswers = [...answers]
    newAnswers[questionIndex] = value
    setAnswers(newAnswers)
  }

  const handleSubmit = async () => {
    console.log("Answers:", answers)
    
    const totalScore = answers.reduce((acc, curr) => acc + curr, 0)
    setScore(totalScore)
    setShowScrollMessage(true)

    let recommendation = ""
    if (assessmentId === 1) { // Depression Screening
        if (totalScore <= 5) {
            recommendation = "Great job! Keep it up! You're showing no signs of depression."
        } else if (totalScore <= 10) {
            recommendation = "Consider talking to a friend or a professional about your feelings regarding depression.";
        } else {
            recommendation = "We recommend seeking help from a mental health professional for depression.";
        }
    } else if (assessmentId === 2) { // Anxiety Screening
        if (totalScore <= 5) {
            recommendation = "Great job! Keep it up! You're showing no signs of anxiety.";
        } else if (totalScore <= 10) {
            recommendation = "Consider practicing relaxation techniques to manage your anxiety.";
        } else {
            recommendation = "We recommend seeking help from a mental health professional for anxiety.";
        }
    } else if (assessmentId === 3) { // Stress Assessment
        if (totalScore <= 5) {
            recommendation = "Great job! Keep it up! You're managing stress well.";
        } else if (totalScore <= 10) {
            recommendation = "Consider engaging in stress-relief activities to help manage your stress.";
        } else {
            recommendation = "We recommend seeking help from a mental health professional for stress management.";
        }
    }

    setRecommendation(recommendation)
  }

  return (
    <div className="p-4 mx-64 space-y-6">
      <h1 className="text-3xl font-bold">Assessment</h1>
      <p className="text-muted-foreground">Over the last 2 weeks, how often have you been bothered by any of the following problems?</p>
      {questions.map((question, index) => (
        <div key={index} className="space-y-2">
          <p className="font-medium">{question}</p>
          <RadioGroup onValueChange={(value) => handleAnswer(index, parseInt(value))}>
            {["Not at all", "Several days", "More than half the days", "Nearly every day"].map((option, optionIndex) => (
              <div key={optionIndex} className="flex items-center space-x-2">
                <RadioGroupItem value={optionIndex.toString()} id={`q${index}-${optionIndex}`} />
                <Label htmlFor={`q${index}-${optionIndex}`}>{option}</Label>
              </div>
            ))} 
          </RadioGroup>
        </div>
      ))}
      <div className="flex items-center space-x-2">
        <Button onClick={handleSubmit}>Submit Assessment</Button>
        {showScrollMessage && (
          <p className="text-sm text-muted-foreground">Scroll down to view results</p>
        )}
      </div>

      {score !== null && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Your Score: {score}</CardTitle>
            <CardDescription>{getScoreCategory(score, assessmentId)}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{recommendation}</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
} 