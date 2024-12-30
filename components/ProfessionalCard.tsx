import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Professional {
  id: number
  name: string
  credentials: string
  specialization: string
  bio: string
  expertise: string[]
  email: string
  location: string
  imageUrl: string
}

export default function ProfessionalCard({ professional }: { professional: Professional }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={professional.imageUrl}
            alt={professional.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-blue-800">{professional.name}</h2>
          <p className="text-green-700 font-medium">{professional.credentials}</p>
          <p className="text-gray-600 mt-2">{professional.specialization}</p>
          <p className="text-gray-700 mt-2 line-clamp-3">{professional.bio}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {professional.expertise.map((area) => (
              <Badge key={area} variant="secondary" className="bg-green-100 text-green-800">
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 p-4 flex flex-col items-start">
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Email:</span> {professional.email}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-medium">Location:</span> {professional.location}
        </p>
        <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
          Schedule Consultation
        </Button>
      </CardFooter>
    </Card>
  )
}

