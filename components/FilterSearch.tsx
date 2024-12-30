'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function FilterSearch() {
  const [search, setSearch] = useState('')

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
      <Input
        type="text"
        placeholder="Search by name or specialty"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-64"
      />
      <Select>
        <SelectTrigger className="w-full md:w-48">
          <SelectValue placeholder="Specialization" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Specializations</SelectItem>
          <SelectItem value="clinical-psychologist">Clinical Psychologist</SelectItem>
          <SelectItem value="psychiatrist">Psychiatrist</SelectItem>
          <SelectItem value="therapist">Therapist</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-full md:w-48">
          <SelectValue placeholder="Expertise" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Areas</SelectItem>
          <SelectItem value="anxiety">Anxiety</SelectItem>
          <SelectItem value="depression">Depression</SelectItem>
          <SelectItem value="ptsd">PTSD</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-full md:w-48">
          <SelectValue placeholder="Availability" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Any Availability</SelectItem>
          <SelectItem value="this-week">This Week</SelectItem>
          <SelectItem value="next-week">Next Week</SelectItem>
          <SelectItem value="this-month">This Month</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-full md:w-48">
          <SelectValue placeholder="Location" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Locations</SelectItem>
          <SelectItem value="new-york">New York</SelectItem>
          <SelectItem value="los-angeles">Los Angeles</SelectItem>
          <SelectItem value="chicago">Chicago</SelectItem>
        </SelectContent>
      </Select>
      <Button className="w-full md:w-auto">Apply Filters</Button>
    </div>
  )
}

