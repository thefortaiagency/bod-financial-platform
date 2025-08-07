'use client'

import { useState, useEffect } from 'react'
import { 
  DollarSign, TrendingUp, Shield, Package, CheckCircle, 
  Laptop, Users, Award, BarChart3, Clock, Phone, 
  Mail, MapPin, ChevronRight, Menu, X, ArrowRight,
  Zap, Target, BookOpen, Calculator
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      icon: DollarSign,
      title: "SBA 7(a) Small Dollar Expertise",
      description: "Specialized in loans under $350,000 with streamlined processing that reduces approval time by 40%",
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

  const stats = [
    { value: "40%", label: "Faster Processing" },
    { value: "$350K", label: "Small Dollar Focus" },
    { value: "30+", label: "States Served" },
    { value: "98%", label: "Approval Rate" }
  ]

  const techFeatures = [
    "Real-time loan status tracking",
    "Secure document upload & management",
    "Direct messaging with BOD team",
    "Automated compliance alerts",
    "Performance analytics dashboard",
    "Integration with bank systems"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="section-padding py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="font-bold text-xl text-primary">BOD Financial</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-primary hover:text-secondary transition">Services</a>
              <a href="#technology" className="text-primary hover:text-secondary transition">Technology</a>
              <a href="#about" className="text-primary hover:text-secondary transition">About</a>
              <a href="#resources" className="text-primary hover:text-secondary transition">Resources</a>
              <a href="#contact" className="btn-primary">Get Started</a>
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
            <a href="#services" className="text-primary text-lg">Services</a>
            <a href="#technology" className="text-primary text-lg">Technology</a>
            <a href="#about" className="text-primary text-lg">About</a>
            <a href="#resources" className="text-primary text-lg">Resources</a>
            <a href="#contact" className="btn-primary text-center">Get Started</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-bod-dark via-primary to-bod-dark text-white">
        <div className="section-padding py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-secondary/20 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold">Specializing in SBA 7(a) Small Dollar Loans</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Your Technology-First Partner in{' '}
              <span className="gradient-text">SBA Lending</span>
            </h1>
            
            <p className="text-xl mb-8 text-gray-200 animate-slide-up">
              Empowering community banks and credit unions with cutting-edge technology 
              and personalized service for small dollar loan production under $350,000
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <a href="#contact" className="btn-primary inline-flex items-center justify-center">
                Start Your Partnership
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a href="#calculator" className="btn-secondary inline-flex items-center justify-center">
                <Calculator className="mr-2" size={20} />
                Calculate Your ROI
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Comprehensive <span className="gradient-text">SBA Lending Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <service.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-primary text-white">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Industry-Leading <span className="text-secondary">Technology Stack</span>
              </h2>
              <p className="text-xl mb-8 text-gray-200">
                Our advanced platform streamlines every aspect of SBA lending, 
                giving you real-time visibility and control over your loan portfolio.
              </p>
              
              <div className="space-y-4">
                {techFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
              
              <a href="#demo" className="btn-primary mt-8 inline-flex items-center">
                Request Platform Demo
                <ChevronRight className="ml-2" size={20} />
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-300">Loan Processing Speed</span>
                    <span className="text-secondary font-bold">+40%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-300">Compliance Accuracy</span>
                    <span className="text-secondary font-bold">98%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{width: '98%'}}></div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-300">Client Satisfaction</span>
                    <span className="text-secondary font-bold">4.9/5</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-bod-green text-white">
        <div className="section-padding text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your SBA Lending?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join leading community banks and credit unions who trust BOD Financial 
            for their small dollar SBA lending needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-white text-secondary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center">
              Schedule Consultation
              <Phone className="ml-2" size={20} />
            </a>
            <a href="#resources" className="border-2 border-white hover:bg-white hover:text-secondary font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center">
              <BookOpen className="mr-2" size={20} />
              Access Resources
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600">
                Let's discuss how BOD Financial can accelerate your SBA lending success
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
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
                <a href="mailto:noah.smith@bodfinancialgroup.com" className="text-secondary hover:underline">
                  noah.smith@bodfinancialgroup.com
                </a>
              </div>
              
              <div className="text-center">
                <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Visit Us</h3>
                <p className="text-gray-600">
                  8107 Tranquilla Place<br />
                  Fort Wayne, IN 46815
                </p>
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
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="font-bold text-xl">BOD Financial Group</span>
            </div>
            
            <p className="text-gray-400">
              © 2024 BOD Financial Group LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}