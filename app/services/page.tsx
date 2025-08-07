'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  DollarSign, TrendingUp, Shield, Package, CheckCircle, 
  Laptop, Users, Award, BarChart3, Clock, Phone, 
  Mail, MapPin, ChevronRight, Menu, X, ArrowRight,
  Zap, Target, BookOpen, Calculator, FileText, Handshake
} from 'lucide-react'

export default function ServicesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const services = [
    {
      icon: DollarSign,
      title: "SBA 7(a) Small Business Expertise",
      description: "Specialized in efficient small business lending with streamlined processing that reduces approval time by 40%",
      features: [
        "Expert SBA 7(a) loan structuring",
        "Small business focus (under $5M)",
        "40% faster processing times",
        "98% compliance accuracy"
      ],
      highlight: true
    },
    {
      icon: Laptop,
      title: "Technology-Driven Platform",
      description: "Advanced loan tracking portal with real-time updates, document management, and direct team communication",
      features: [
        "Real-time loan status tracking",
        "Secure document upload & management",
        "Direct messaging with BOD team",
        "Performance analytics dashboard"
      ],
      highlight: true
    },
    {
      icon: Package,
      title: "Modular Service Packages",
      description: "Choose only what you need: underwriting, processing, closing, servicing, or complete end-to-end solutions",
      features: [
        "Underwriting support only",
        "Processing and documentation",
        "Closing coordination",
        "Full end-to-end service"
      ]
    },
    {
      icon: CheckCircle,
      title: "Rapid Eligibility Assessment",
      description: "Quick qualification process that saves time and ensures compliance with SBA requirements",
      features: [
        "15-minute initial assessment",
        "SBA eligibility verification",
        "Risk evaluation",
        "Loan structure recommendations"
      ]
    },
    {
      icon: TrendingUp,
      title: "Secondary Market Maximization",
      description: "Expert structuring to maximize premium income when selling guaranteed portions",
      features: [
        "Premium optimization strategies",
        "Market timing analysis",
        "Investor relationship management",
        "Portfolio performance tracking"
      ]
    },
    {
      icon: Shield,
      title: "Compliance & Risk Management",
      description: "Proactive compliance monitoring using SBA audit guidelines to prevent costly exceptions",
      features: [
        "Real-time compliance monitoring",
        "SBA audit preparation",
        "Exception prevention protocols",
        "Regulatory update notifications"
      ]
    }
  ]

  const servicePackages = [
    {
      name: "Essential",
      price: "$89",
      period: "per loan",
      description: "Perfect for getting started with SBA lending",
      features: [
        "SBA eligibility assessment",
        "Basic loan structuring",
        "Compliance checking",
        "Email support",
        "Standard processing time"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "per loan", 
      description: "Most popular choice for active lenders",
      features: [
        "Everything in Essential",
        "Real-time loan tracking",
        "Document management portal",
        "Direct team communication",
        "Priority processing",
        "Secondary market optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$249",
      period: "per loan",
      description: "Complete white-glove service",
      features: [
        "Everything in Professional",
        "Dedicated relationship manager",
        "Custom reporting dashboards",
        "API integrations",
        "24/7 phone support",
        "Quarterly strategy sessions"
      ],
      popular: false
    }
  ]

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
              <Link href="/services" className="text-bod-blue font-semibold">Services</Link>
              <Link href="/technology" className="text-primary hover:text-bod-blue transition">Technology</Link>
              <Link href="/success" className="text-primary hover:text-bod-blue transition">Success Stories</Link>
              <Link href="/resources" className="text-primary hover:text-bod-blue transition">Resources</Link>
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
            <Link href="/services" className="text-bod-blue text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="/technology" className="text-primary text-lg" onClick={() => setIsMenuOpen(false)}>Technology</Link>
            <Link href="/success" className="text-primary text-lg" onClick={() => setIsMenuOpen(false)}>Success Stories</Link>
            <Link href="/resources" className="text-primary text-lg" onClick={() => setIsMenuOpen(false)}>Resources</Link>
            <Link href="/#contact" className="btn-primary text-center" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
          </div>
        </div>
      )}

      {/* Hero */}
      <section 
        className="py-20 bg-gradient-to-br from-bod-dark via-primary to-bod-dark text-white relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(26, 37, 47, 0.9), rgba(0, 51, 102, 0.85), rgba(26, 37, 47, 0.9)), url('/images/hero-bg-services-hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img src="/images/bod_logo_8.24-(1).png" alt="BOD Financial Group" className="h-32 mx-auto mb-6 drop-shadow-2xl" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Complete SBA Lending Solutions</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Choose from our modular service packages or leverage our complete end-to-end solution 
              for seamless SBA 7(a) small business lending.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Our <span className="text-bod-blue font-bold">Core Services</span>
            </h2>
            <p className="text-xl text-primary max-w-3xl mx-auto">
              Comprehensive SBA lending expertise backed by cutting-edge technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`card ${service.highlight ? 'border-2 border-bod-blue' : ''}`}
              >
                {service.highlight && (
                  <div className="inline-flex items-center space-x-1 bg-accent/10 text-accent rounded-full px-3 py-1 text-sm font-semibold mb-4">
                    <Target size={14} />
                    <span>Specialized Focus</span>
                  </div>
                )}
                <service.icon className="w-12 h-12 text-bod-blue mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-primary mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-primary">
                      <CheckCircle className="w-4 h-4 text-bod-blue mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-gray-50">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Service <span className="text-bod-blue font-bold">Packages</span>
            </h2>
            <p className="text-xl text-primary max-w-3xl mx-auto">
              Choose the level of service that fits your lending volume and needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <div 
                key={index} 
                className={`card text-center relative ${
                  pkg.popular ? 'border-2 border-bod-blue transform scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-bod-blue text-white px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-bod-blue">{pkg.price}</span>
                  <span className="text-primary ml-2">{pkg.period}</span>
                </div>
                <p className="text-primary mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-primary">
                      <CheckCircle className="w-4 h-4 text-bod-blue mr-2 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/#contact" className={`btn-primary w-full inline-block text-center ${
                  pkg.popular ? 'bg-bod-blue hover:bg-bod-blue/90' : ''
                }`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-bod-blue to-primary text-white">
        <div className="section-padding text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Streamline Your SBA Lending?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss which service package best fits your lending goals and volume.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="bg-white text-bod-blue hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center">
              Schedule Consultation
              <Phone className="ml-2" size={20} />
            </Link>
            <Link href="/resources" className="border-2 border-white hover:bg-white hover:text-bod-blue font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center">
              <BookOpen className="mr-2" size={20} />
              View Resources
            </Link>
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