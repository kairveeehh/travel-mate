'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Palmtree, Menu, Loader2, MapPin, Users, Activity, Heart, Coffee, Sun, Mountain, Moon, SunMedium, Info, X } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
const uttarakhandData = [
  {
    id: 1,
    name: "Rishikesh",
    description: "Yoga capital of the world, known for adventure sports and spiritual experiences.",
    image: "https://images.unsplash.com/photo-1591018653367-1a37b5239e55?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmlzaGlrZXNofGVufDB8fDB8fHww",
    tags: ["adventure", "spiritual", "nature", "family", "summer"]
  },
  {
    id: 2,
    name: "Nainital",
    description: "A picturesque hill station famous for its lake and surrounding mountains.",
    image: "https://images.unsplash.com/photo-1626621341517-bbebf2da71df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpbml0YWx8ZW58MHx8MHx8fDA%3D",
    tags: ["hill station", "lake", "nature", "couple", "spring"]
  },
  {
    id: 3,
    name: "Mussoorie",
    description: "Queen of the Hills, offering panoramic views of the Himalayas.",
    image: "https://images.unsplash.com/photo-1577287664096-6a3f3ade1568?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c3Nvb3JpZXxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["hill station", "scenic", "photography", "friends", "autumn"]
  },
  {
    id: 4,
    name: "Auli",
    description: "Popular ski resort and hill station with breathtaking views of the Himalayas.",
    image: "https://images.unsplash.com/photo-1582555599578-92e0d181c627?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVsaXxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["skiing", "adventure", "winter", "group", "nature"]
  },
  {
    id: 5,
    name: "Jim Corbett National Park",
    description: "Famous wildlife sanctuary known for its Bengal tiger reserve.",
    image: "https://images.unsplash.com/photo-1598457005804-62e4d5417449?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amltJTIwY29yYmV0dCUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D",
    tags: ["wildlife", "safari", "family", "nature", "spring"]
  },
  {
    id: 6,
    name: "Haridwar",
    description: "Ancient holy city known for its ghats and the Kumbh Mela festival.",
    image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
    tags: ["spiritual", "historical", "pilgrimage", "culture", "family"]
  },
  {
    id: 7,
    name: "Valley of Flowers",
    description: "UNESCO World Heritage site known for its meadows of endemic alpine flowers.",
    image: "https://images.unsplash.com/photo-1566837497312-7be4a63765c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFsbGV5JTIwb2YlMjBmbG93ZXJzfGVufDB8fDB8fHww",
    tags: ["nature", "trekking", "UNESCO", "photography", "summer"]
  },
  {
    id: 8,
    name: "Kedarnath",
    description: "One of the holiest Hindu temples dedicated to Lord Shiva, located in the Himalayas.",
    image: "https://images.unsplash.com/photo-1627724813829-00b99ab7a5d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2VkYXJuYXRofGVufDB8fDB8fHww",
    tags: ["spiritual", "pilgrimage", "trekking", "culture", "winter"]
  },
  {
    id: 9,
    name: "Badrinath",
    description: "A significant Hindu pilgrimage site dedicated to Lord Vishnu.",
    image: "https://images.unsplash.com/photo-1556040902-0417c2e43c4f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFkcmluYXRoJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D",
    tags: ["spiritual", "pilgrimage", "culture", "group", "autumn"]
  },
  {
    id: 10,
    name: "Chopta",
    description: "Often called 'Mini Switzerland', known for its stunning landscapes.",
    image: "https://images.unsplash.com/photo-1505769780785-083537dbf3d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNob3B0YXxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["trekking", "nature", "adventure", "friends", "summer"]
  },
  {
    id: 11,
    name: "Dehradun",
    description: "The capital of Uttarakhand, known for its scenic beauty and educational institutions.",
    image: "https://images.unsplash.com/photo-1512586739310-170c3f1c8d44?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGRlYXJkdW58ZW58MHx8MHx8fDA%3D",
    tags: ["city", "culture", "family", "sightseeing", "autumn"]
  },
  {
    id: 12,
    name: "Kausani",
    description: "Known for its stunning views of the Himalayan peaks, especially Nanda Devi.",
    image: "https://images.unsplash.com/photo-1578395730372-2026c8ee7065?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2F1c2FuaXxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["hill station", "nature", "photography", "couple", "summer"]
  },
  {
    id: 13,
    name: "Lansdowne",
    description: "A quiet hill station ideal for nature walks and relaxation.",
    image: "https://images.unsplash.com/photo-1542659901-b3c064d91d82?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhbnNkb3duZXxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["hill station", "relaxation", "nature", "family", "spring"]
  },
  {
    id: 14,
    name: "Pauri Garhwal",
    description: "Known for its natural beauty and trekking routes.",
    image: "https://images.unsplash.com/photo-1544508685-ef3055452d89?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGF1cml8ZW58MHx8MHx8fDA%3D",
    tags: ["trekking", "nature", "adventure", "friends", "summer"]
  },
  {
    id: 15,
    name: "Tehri Lake",
    description: "A beautiful artificial lake, perfect for water sports and relaxation.",
    image: "https://images.unsplash.com/photo-1535713703252-6e041c7e8ca6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHRlaHJpJTIwbGFrZXxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["water sports", "nature", "family", "adventure", "summer"]
  },
  {
    id: 16,
    name: "Nainital Lake",
    description: "A beautiful, eye-shaped lake surrounded by hills.",
    image: "https://images.unsplash.com/photo-1580717691665-9c2e9f75d145?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG5haW5pdGFsfGVufDB8fDB8fHww",
    tags: ["lake", "couple", "family", "photography", "summer"]
  },
  {
    id: 17,
    name: "Rudraprayag",
    description: "Confluence of rivers Alaknanda and Mandakini, rich in spiritual significance.",
    image: "https://images.unsplash.com/photo-1565092462588-cd04bbcadbb2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHJ1ZHJhcHJheWFnfGVufDB8fDB8fHww",
    tags: ["spiritual", "historical", "pilgrimage", "culture", "family"]
  },
  {
    id: 18,
    name: "Dharchula",
    description: "A small town surrounded by beautiful mountain views.",
    image: "https://images.unsplash.com/photo-1580296571971-5caef76e5f65?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGRoYXJjdWxhJTIwcGFyYXMlMjBhbmQpJTIwbmF0dXJlJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww",
    tags: ["nature", "adventure", "photography", "friends", "summer"]
  },
  {
    id: 19,
    name: "Joshimath",
    description: "Gateway to some of the most famous Himalayan treks.",
    image: "https://images.unsplash.com/photo-1620386577436-1d7b83bb1a12?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGpvc2hpbWF0aHxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["trekking", "adventure", "nature", "friends", "summer"]
  },
  {
    id: 20,
    name: "Gauchar",
    description: "Known for its beautiful landscapes and lush greenery.",
    image: "https://images.unsplash.com/photo-1596571535514-7d4656dba98c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D",
    tags: ["nature", "family", "relaxation", "group", "spring"]
  },
  {
    id: 21,
    name: "Kedarnath Wildlife Sanctuary",
    description: "Home to a variety of flora and fauna, offering trekking routes.",
    image: "https://images.unsplash.com/photo-1591579608539-e5c20996368f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGtlZGFybmF0aCUyMHR3ZW5hdGluZyUyMG1hcnRlbGF8ZW58MHx8MHx8fDA%3D",
    tags: ["wildlife", "nature", "trekking", "adventure", "summer"]
  },
  {
    id: 22,
    name: "Bhimtal",
    description: "A serene lake town known for its peaceful environment.",
    image: "https://images.unsplash.com/photo-1611141031819-32f739a9c1f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJoaW10YWx8ZW58MHx8MHx8fDA%3D",
    tags: ["lake", "nature", "couple", "family", "spring"]
  },
  {
    id: 23,
    name: "Pithoragarh",
    description: "Known as the 'Little Kashmir' for its stunning landscapes.",
    image: "https://images.unsplash.com/photo-1592173055768-64d1b5797e80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHBpdGhvcmFnYXolMjBhbmQlMjBzcGVydHxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["nature", "adventure", "photography", "friends", "summer"]
  },
  {
    id: 24,
    name: "Karnaprayag",
    description: "A picturesque town at the confluence of rivers.",
    image: "https://images.unsplash.com/photo-1571562845577-e48e02c2db8a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FybmF8ZW58MHx8MHx8fDA%3D",
    tags: ["nature", "spiritual", "culture", "family", "summer"]
  },
  {
    id: 25,
    name: "Champawat",
    description: "A historical town known for its temples and natural beauty.",
    image: "https://images.unsplash.com/photo-1577224054820-9538c5cbf018?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhbXBhJTIwbGFuZHNob3JlJTIwYW5kJTIwdGVtcGxlc3xlbnwwfHwwfHx8MA%3D%3D",
    tags: ["historical", "spiritual", "culture", "family", "spring"]
  },
  {
    id: 26,
    name: "Sattal",
    description: "A cluster of seven interconnected lakes, ideal for birdwatching.",
    image: "https://images.unsplash.com/photo-1551377902-0ca69d9678e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHNhdHRhbCUyMGxha2V8ZW58MHx8MHx8fDA%3D",
    tags: ["lake", "nature", "photography", "couple", "summer"]
  },
  {
    id: 27,
    name: "Kotdwar",
    description: "A town surrounded by lush green forests and rivers.",
    image: "https://images.unsplash.com/photo-1585706589162-236e930a8bb9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGtvdGR3YXIlMjB0b3duJTIwYXJlYXxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["nature", "adventure", "family", "group", "spring"]
  },
  {
    id: 28,
    name: "Almora",
    description: "Known for its rich cultural heritage and scenic views.",
    image: "https://images.unsplash.com/photo-1611169443228-d86f71db51f0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGFsbW9yYXxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["hill station", "culture", "family", "nature", "autumn"]
  },
  {
    id: 29,
    name: "Pangot",
    description: "A small hamlet known for birdwatching and nature walks.",
    image: "https://images.unsplash.com/photo-1609710788672-69c4be3a4909?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBhbmdvdCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["nature", "photography", "couple", "family", "spring"]
  },
  {
    id: 30,
    name: "Dhanaulti",
    description: "A quiet hill station perfect for a peaceful retreat.",
    image: "https://images.unsplash.com/photo-1612821551116-cd0246c5176c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRoYW5hdWx0aXxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["hill station", "relaxation", "nature", "family", "spring"]
  },
];

const preferencesData = [
  {
    category: "Travel Style",
    icon: Users,
    options: ["Solo", "Couple", "Family", "Friends", "Group"]
  },
  {
    category: "Activities",
    icon: Activity,
    options: ["Adventure", "Relaxation", "Sightseeing", "Spiritual", "Wildlife"]
  },
  {
    category: "Landscape",
    icon: Mountain,
    options: ["Mountains", "Lakes", "Rivers", "Forests", "Cities"]
  },
  {
    category: "Interests",
    icon: Heart,
    options: ["History", "Culture", "Nature", "Photography", "Food"]
  },
  {
    category: "Season",
    icon: Sun,
    options: ["Spring", "Summer", "Autumn", "Winter"]
  }
];

// Uttarakhand data and preferences data remain unchanged

export default function TravelPlanner() {
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([])
  const [recommendedLocations, setRecommendedLocations] = useState<typeof uttarakhandData>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState<(typeof uttarakhandData)[0] | null>(null)

  useEffect(() => {
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDarkMode(isDark)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  const handlePreferenceChange = (preference: string) => {
    setSelectedPreferences(prev => 
      prev.includes(preference) 
        ? prev.filter(p => p !== preference)
        : [...prev, preference]
    )
  }

  const findBestLocations = () => {
    setIsLoading(true)
    setRecommendedLocations([])
    // Simulate API call
    setTimeout(() => {
      const filteredLocations = uttarakhandData.filter(location =>
        selectedPreferences.some(pref => location.tags.includes(pref.toLowerCase()))
      )
      setRecommendedLocations(filteredLocations.length > 0 ? filteredLocations : uttarakhandData)
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Palmtree className="h-8 w-8 text-blue-500 dark:text-blue-400 mr-2" />
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">TravelMate</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/contact" className="text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <Link href="/about" className="text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</Link>
            <Link href="/contact" className="text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
          </nav>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="mr-2"
            >
              {isDarkMode ? <SunMedium className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    <nav className="flex flex-col space-y-4">
                      <Link href="#" className="text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
                      <Link href="#" className="text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</Link>
                      <Link href="#" className="text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
                    </nav>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-grow bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <section className="bg-blue-600 dark:bg-blue-800 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1?auto=format&fit=crop&q=80&w=2066&ixlib=rb-4.0.3"
              alt="Uttarakhand Landscape"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Discover Uttarakhand: The Land of Gods
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Tell us your preferences, and we'll find the ideal destinations for you in Uttarakhand.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" variant="secondary" asChild>
                <a href="#preferences">Start Planning</a>
              </Button>
            </motion.div>
          </div>
        </section>

        <section id="preferences" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-1/3">
              <Card className="dark:bg-gray-800 sticky top-24">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">Your Preferences</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">Select what matters most for your trip</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="multiple" className="w-full">
                    {preferencesData.map((category) => (
                      <AccordionItem value={category.category} key={category.category}>
                        <AccordionTrigger className="text-gray-700 dark:text-gray-200">
                          <div className="flex items-center">
                            <category.icon className="h-5 w-5 mr-2 text-blue-500 dark:text-blue-400" />
                            {category.category}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="grid grid-cols-2 gap-4">
                            {category.options.map((option) => (
                              <div className="flex items-center space-x-2" key={option}>
                                <Checkbox 
                                  id={option} 
                                  checked={selectedPreferences.includes(option)}
                                  onCheckedChange={() => handlePreferenceChange(option)}
                                />
                                <Label htmlFor={option} className="text-gray-600 dark:text-gray-300">{option}</Label>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                  <Button 
                    onClick={findBestLocations} 
                    className="w-full mt-4"
                    disabled={selectedPreferences.length === 0 || isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Finding your perfect destinations...
                      </>
                    ) : (
                      <>
                        <MapPin className="mr-2 h-4 w-4" />
                        Find My Perfect Destinations
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </aside>
            <div className="lg:w-2/3">
              <AnimatePresence>
                {recommendedLocations.length > 0 && !isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Your Recommended Destinations:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {recommendedLocations.map((location) => (
                        <Card key={location.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                          <Image
                            src={location.image}
                            alt={location.name}
                            width={400}
                            height={200}
                            className="w-full h-48 object-cover"
                          />
                          <CardHeader>
                            <CardTitle>{location.name}</CardTitle>
                            <CardDescription className="line-clamp-2">{location.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {location.tags.map(tag => (
                                <Badge key={tag} variant="secondary" className="capitalize">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" className="w-full">Learn More</Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                  <DialogTitle>{location.name}</DialogTitle>
                                  <DialogDescription>{location.description}</DialogDescription>
                                </DialogHeader>
                                <div className="mt-4">
                                  <Image
                                    src={location.image}
                                    alt={location.name}
                                    width={400}
                                    height={200}
                                    className="w-full h-48 object-cover rounded-md"
                                  />
                                  <h4 className="font-semibold mt-4 mb-2">Features:</h4>
                                  <ul className="list-disc pl-5">
                                    {location.tags.map(tag => (
                                      <li key={tag} className="capitalize">{tag}</li>
                                    ))}
                                  </ul>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {recommendedLocations.length === 0 && !isLoading && (
                <div className="text-center py-12">
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Select your preferences and click "Find My Perfect Destinations" to get started!
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold flex items-center">
                <Palmtree className="h-6 w-6 mr-2 text-blue-400" />
                TravelMate
              </h2>
              <p className="mt-2 text-gray-400">Your perfect Uttarakhand trip is just a few clicks away</p>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <Link href="#" className="hover:text-blue-400">About Us</Link>
              <Link href="#" className="hover:text-blue-400">Privacy Policy</Link>
              <Link href="#" className="hover:text-blue-400">Terms of Service</Link>
              <Link href="#" 
              className="hover:text-blue-400">Contact</Link>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} TravelMate. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}