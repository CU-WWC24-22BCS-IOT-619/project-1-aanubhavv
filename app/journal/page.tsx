'use client'

import React, { useState } from 'react'
import { Heart, Save } from 'lucide-react'
import { toast } from "@/hooks/use-toast"

const emojis = ['😢', '😕', '😐', '🙂', '😄']

export default function JournalPage() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null)
  const [journalEntry, setJournalEntry] = useState('')
  const [gratitude, setGratitude] = useState('')

  const handleSave = () => {
    console.log('Saving journal entry:', { selectedMood, journalEntry, gratitude })
    toast({ title: "Journal Saved", description: "Your journal entry for today has been saved." })
    setSelectedMood(null)
    setJournalEntry('')
    setGratitude('')
  }

  return (
    <div className="bg-blue-50 min-h-screen flex items-center justify-center m-0">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full space-y-6 transition-all duration-300 ease-in-out hover:shadow-xl">
        <header className="text-center">
          <p className="text-gray-500 mb-2">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <h1 className="text-3xl font-semibold text-blue-600">Today&apos;s Journal</h1>
        </header>

        <div className="space-y-2">
          <h2 className="text-lg font-medium text-gray-700">How are you feeling today?</h2>
          <div className="flex justify-between">
            {emojis.map((emoji, index) => (
              <button
                key={index}
                className={`text-4xl transition-transform duration-200 ease-in-out ${
                  selectedMood === index ? 'transform scale-125' : 'opacity-50 hover:opacity-100 hover:scale-110'
                }`}
                onClick={() => setSelectedMood(index)}
                aria-label={`Select mood ${index + 1}`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-medium text-gray-700">Journal Entry</h2>
          <textarea
            className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent resize-none transition-all duration-200 ease-in-out"
            placeholder="Write about your day, thoughts, or feelings..."
            value={journalEntry}
            onChange={(e) => setJournalEntry(e.target.value)}
          ></textarea>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-medium text-gray-700 flex items-center">
            <Heart className="w-5 h-5 text-red-500 mr-2" />
            What are you grateful for today?
          </h2>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-200 ease-in-out"
            placeholder="I'm grateful for..."
            value={gratitude}
            onChange={(e) => setGratitude(e.target.value)}
          />
        </div>

        <button
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium transition-all duration-200 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 flex items-center justify-center"
          onClick={handleSave}
        >
          <Save className="w-5 h-5 mr-2" />
          Save Journal Entry
        </button>
      </div>
    </div>
  )
}

