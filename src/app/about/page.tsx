import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Palmtree, Github, Linkedin } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Palmtree className="h-8 w-8 text-blue-500 dark:text-blue-400 mr-2" />
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">TravelMate</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <Link href="/about" className="text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</Link>
            <Link href="/contact" className="text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">About TravelMate</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                TravelMate is dedicated to helping travelers discover the beauty of Uttarakhand. 
                We aim to provide personalized travel recommendations based on your preferences, 
                making your journey through the Land of Gods an unforgettable experience.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Why Choose Us</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Personalized recommendations</li>
                <li>Comprehensive database of Uttarakhand destinations</li>
                <li>User-friendly interface</li>
                <li>Up-to-date information on attractions and activities</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-12 mb-6">Developed By</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Kairvee Vaswani</CardTitle>
              <CardDescription>Full Stack Developer</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
          
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/kairveeehh" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://linkedin.com/in/kairveee" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Nainish Kothari</CardTitle>
              <CardDescription>Ideation and managerr</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
            
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/johnsmith" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://linkedin.com/in/johnsmith" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold flex items-center">
                <Palmtree className="h-6 w-6 mr-2 text-blue-400" />
                TravelMate
              </h2>
              <p className="mt-2 text-gray-400">Your perfect Uttarakhand trip is just a few clicks away</p>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <Link href="/" className="hover:text-blue-400">Home</Link>
              <Link href="/about" className="hover:text-blue-400">About</Link>
              <Link href="/contact" className="hover:text-blue-400">Contact</Link>
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