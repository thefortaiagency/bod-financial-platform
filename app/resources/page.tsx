'use client'

import { useState } from 'react'
import { BookOpen, Video, FileText, Users, Download, PlayCircle, Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function ResourcesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const resources = {
    guides: [
      {
        title: "SBA 7(a) Complete Guide",
        description: "Everything you need to know about SBA 7(a) lending",
        icon: FileText,
        link: "#"
      },
      {
        title: "Compliance Best Practices",
        description: "Stay compliant with the latest SBA regulations",
        icon: FileText,
        link: "#"
      },
      {
        title: "ROI Calculator",
        description: "Calculate your potential returns from SBA lending",
        icon: FileText,
        link: "#"
      }
    ],
    webinars: [
      {
        title: "Weekly SBA Updates",
        description: "Every Tuesday at 2 PM EST",
        icon: Video,
        link: "#"
      },
      {
        title: "Technology Training",
        description: "Learn our platform features",
        icon: Video,
        link: "#"
      }
    ],
    videos: [
      {
        title: "Getting Started with BOD Financial",
        duration: "12 min",
        icon: PlayCircle,
        link: "#"
      },
      {
        title: "Understanding SBA Express Loans",
        duration: "18 min",
        icon: PlayCircle,
        link: "#"
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white shadow-lg">
        <div className="section-padding py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/images/bod_logo_8.24-(1).png" alt="BOD Financial Group" className="h-12" />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-primary hover:text-secondary transition">Services</Link>
              <Link href="/technology" className="text-primary hover:text-secondary transition">Technology</Link>
              <Link href="/success" className="text-primary hover:text-secondary transition">Success Stories</Link>
              <Link href="/resources" className="text-secondary font-semibold">Resources</Link>
              <Link href="/#contact" className="btn-primary">Get Started</Link>
            </div>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20">
          <div className="flex flex-col space-y-4 p-6">
            <Link href="/services" className="text-primary text-lg" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="/technology" className="text-primary text-lg" onClick={() => setIsMenuOpen(false)}>Technology</Link>
            <Link href="/success" className="text-primary text-lg" onClick={() => setIsMenuOpen(false)}>Success Stories</Link>
            <Link href="/resources" className="text-secondary text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>Resources</Link>
            <Link href="/#contact" className="btn-primary text-center" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
          </div>
        </div>
      )}

      {/* Hero */}
      <section 
        className="py-20 bg-gradient-to-br from-primary to-bod-navy text-white relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(26, 37, 47, 0.9), rgba(0, 51, 102, 0.85), rgba(26, 37, 47, 0.9)), url('/images/hero-bg-resources-hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="section-padding">
          <h1 className="text-5xl font-bold mb-6">Knowledge Hub</h1>
          <p className="text-xl text-white max-w-3xl">
            Your comprehensive resource center for SBA lending best practices, 
            compliance updates, and industry insights.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="section-padding">
          {/* Guides Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-primary">
              <BookOpen className="inline-block mr-3 text-secondary" />
              Guides & Tools
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {resources.guides.map((guide, index) => (
                <div key={index} className="card hover:shadow-xl transition-shadow">
                  <guide.icon className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-primary">{guide.title}</h3>
                  <p className="text-primary mb-4">{guide.description}</p>
                  <a href={guide.link} className="text-secondary hover:text-accent font-semibold">
                    Download Guide →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Webinars Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-primary">
              <Video className="inline-block mr-3 text-secondary" />
              Live Webinars
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {resources.webinars.map((webinar, index) => (
                <div key={index} className="card bg-bod-light hover:shadow-xl transition-shadow">
                  <webinar.icon className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-primary">{webinar.title}</h3>
                  <p className="text-primary mb-4">{webinar.description}</p>
                  <a href={webinar.link} className="btn-primary inline-block">
                    Register Now
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Video Library */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-primary">
              <PlayCircle className="inline-block mr-3 text-secondary" />
              Video Training Library
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {resources.videos.map((video, index) => (
                <div key={index} className="card hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <video.icon className="w-12 h-12 text-secondary" />
                    <span className="text-sm text-primary opacity-75">{video.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary">{video.title}</h3>
                  <a href={video.link} className="text-secondary hover:text-accent font-semibold">
                    Watch Now →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Ask an Expert Section */}
          <div className="mt-20 bg-gradient-to-r from-secondary to-bod-gold rounded-2xl p-12 text-center">
            <Users className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Ask an Expert</h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Get real-time answers to your SBA lending questions from our team of experts
            </p>
            <Link href="/#contact" className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition inline-block">
              Submit Your Question
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}