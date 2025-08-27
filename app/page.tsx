'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  DollarSign, TrendingUp, Shield, Package, CheckCircle, 
  Laptop, Users, Award, BarChart3, Clock, Phone, 
  Mail, MapPin, ChevronRight, Menu, X, ArrowRight,
  Zap, Target, BookOpen
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const services = [
    {
      icon: DollarSign,
      title: "SBA 7(a) Small Business Expertise",
      description: "Specialized in efficient small business lending with streamlined processing that reduces approval time by 40%",
      highlight: true
    },
    {
      icon: Laptop,
      title: "Technology-Driven Platform",
      description: "Advanced loan tracking portal with real-time updates, document management, and direct team communication",
      highlight: true
    },
    {
      icon: Package,
      title: "Modular Service Packages",
      description: "Choose only what you need: underwriting, processing, closing, servicing, or complete end-to-end solutions"
    },
    {
      icon: CheckCircle,
      title: "Rapid Eligibility Assessment",
      description: "Quick qualification process that saves time and ensures compliance with SBA requirements"
    },
    {
      icon: TrendingUp,
      title: "Secondary Market Maximization",
      description: "Expert structuring to maximize premium income when selling guaranteed portions"
    },
    {
      icon: Shield,
      title: "Compliance & Risk Management",
      description: "Proactive compliance monitoring using SBA audit guidelines to prevent costly exceptions"
    }
  ]

  // Stats section removed per request

  // Technology features removed per request

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="section-padding py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/images/bod_logo_8.24-(1).png" alt="BOD Financial Group" className="h-12" />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-primary hover:text-bod-blue transition">Services</Link>
              <Link href="/technology" className="text-primary hover:text-bod-blue transition">Technology</Link>
              <Link href="/success" className="text-primary hover:text-bod-blue transition">Success Stories</Link>
              <Link href="/resources" className="text-primary hover:text-bod-blue transition">Resources</Link>
              <Link href="/about" className="text-primary hover:text-bod-blue transition">About</Link>
              <Link href="/about" className="btn-primary">Get Started</Link>
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
            <Link href="/resources" className="text-primary text-lg" onClick={() => setIsMenuOpen(false)}>Resources</Link>
            <Link href="/about" className="text-primary text-lg" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/about" className="btn-primary text-center" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 bg-gradient-to-br from-bod-dark via-primary to-bod-dark text-white relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(26, 37, 47, 0.9), rgba(0, 51, 102, 0.85), rgba(26, 37, 47, 0.9)), url('/images/hero-bg-tech-finance-fusion.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="section-padding py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Extra Large Centered Logo */}
            <div className="mb-8">
              <img src="/images/bod_logo_8.24-(1).png" alt="BOD Financial Group" className="h-44 md:h-56 lg:h-64 mx-auto mb-6 drop-shadow-2xl animate-pulse-slow" />
            </div>
            
            <div className="inline-flex items-center space-x-2 bg-secondary/20 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold">Specializing in SBA 7(a) Small Business Lending</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-white">
              Your Tech-Forward Partner in{' '}
              <span className="text-bod-blue font-bold">Small Business SBA Lending</span>
            </h1>
            
            <p className="text-xl mb-8 text-gray-200 animate-slide-up">
              Empowering community banks and credit unions with cutting-edge technology 
              and personalized boutique service for efficient SBA loan production
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <a href="#contact" className="btn-primary inline-flex items-center justify-center">
                Start Your Partnership
                <ArrowRight className="ml-2" size={20} />
              </a>
              <Link href="/services" className="btn-secondary inline-flex items-center justify-center">
                <BookOpen className="mr-2" size={20} />
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section removed per request */}

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Comprehensive <span className="text-bod-blue font-bold">SBA Lending Solutions</span>
            </h2>
            <p className="text-xl text-primary max-w-3xl mx-auto">
              Choose the services you need with our modular approach, or leverage our complete end-to-end solution
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`card ${service.highlight ? 'border-2 border-secondary' : ''}`}
              >
                {service.highlight && (
                  <div className="inline-flex items-center space-x-1 bg-accent/10 text-accent rounded-full px-3 py-1 text-sm font-semibold mb-4">
                    <Target size={14} />
                    <span>Specialized Focus</span>
                  </div>
                )}
                <service.icon className="w-12 h-12 text-bod-blue mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-primary">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section removed per request */}

      {/* Technology Section removed per request */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-bod-green text-white">
        <div className="section-padding text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your SBA Lending?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join leading community banks and credit unions who trust BOD Financial 
            for their small business SBA lending needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-white text-secondary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center">
              Schedule Consultation
              <Phone className="ml-2" size={20} />
            </a>
            <Link href="/resources" className="border-2 border-white hover:bg-white hover:text-secondary font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center">
              <BookOpen className="mr-2" size={20} />
              Access Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-xl text-primary">
                Let's discuss how BOD Financial can accelerate your SBA lending success
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
              <div className="text-center">
                <Phone className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Call Us</h3>
                <a href="tel:260-414-9867" className="text-secondary hover:underline">
                  (260) 414-9867
                </a>
              </div>
              
              <div className="text-center">
                <Mail className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Email</h3>
                <a href="mailto:noreply@bodfinancialgroup.com" className="text-secondary hover:underline">
                  noreply@bodfinancialgroup.com
                </a>
              </div>
            </div>
            
            <div className="card">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                  />
                </div>
                
                <input
                  type="text"
                  placeholder="Institution Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                />
                
                <textarea
                  placeholder="Tell us about your SBA lending needs"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                />
                
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bod-dark text-white py-12">
        <div className="section-padding">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img src="/images/bod_logo_8.24-(1).png" alt="BOD Financial Group" className="h-10" />
              <span className="font-bold text-xl">BOD Financial Group LLC</span>
            </div>
            
            <p className="text-white opacity-80">
              © 2024 BOD Financial Group LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}