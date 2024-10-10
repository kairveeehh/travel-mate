import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Palmtree, Mail, Phone, MapPin } from "lucide-react"
import Link from 'next/link'

export default function ContactPage() {
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
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                  <Textarea id="message" placeholder="Your message" rows={4} />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-500" />
                <span className="text-gray-600 dark:text-gray-300">info@travelmate.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-500" />
                <span className="text-gray-600 dark:text-gray-300">+91 1234567890</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span className="text-gray-600 dark:text-gray-300">123 Travel Street, Dehradun, Uttarakhand, India</span>
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