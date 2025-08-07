'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  TrendingUp, DollarSign, Users, Award, BarChart3, 
  CheckCircle, Clock, Target, Building, Handshake,
  Phone, Mail, BookOpen, Star, MapPin, Menu, X
} from 'lucide-react'

export default function SuccessPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const successMetrics = [
    { value: "40%", label: "Average Processing Time Reduction", icon: Clock },
    { value: "25%", label: "Average Volume Increase", icon: TrendingUp },
    { value: "$2.3M", label: "Average Annual Income Boost", icon: DollarSign },
    { value: "98%", label: "Client Satisfaction Rate", icon: Star }
  ]

  const caseStudies = [
    {
      title: "Midwest Community Bank",
      type: "Community Bank",
      challenge: "Struggling to compete with larger institutions in SBA lending while maintaining profitability",
      solution: "Implemented BOD's Professional package with automated workflow and secondary market optimization",
      results: [
        { metric: "40%", description: "Reduction in loan processing time" },
        { metric: "25%", description: "Increase in SBA loan volume" },
        { metric: "$2.3M", description: "Additional annual non-interest income" },
        { metric: "Zero", description: "SBA compliance exceptions in 18 months" }
      ],
      testimonial: "BOD Financial transformed our SBA lending operations. Their technology platform and boutique service model helped us compete with larger institutions while maintaining our personal touch.",
      author: "Sarah Mitchell, Chief Lending Officer"
    },
    {
      title: "Regional Credit Union",
      type: "Credit Union",
      challenge: "New to SBA lending with limited expertise and no dedicated SBA staff",
      solution: "Started with BOD's Essential package, then scaled to Enterprise with dedicated relationship management",
      results: [
        { metric: "$8.5M", description: "SBA loan portfolio in first year" },
        { metric: "94%", description: "Member satisfaction with lending experience" },
        { metric: "15", description: "Small businesses served in year one" },
        { metric: "$125K", description: "Additional fee income generated" }
      ],
      testimonial: "The modular service approach allowed us to start with just underwriting support and expand as we grew. Perfect for our needs and member expectations.",
      author: "Michael Rodriguez, CEO"
    },
    {
      title: "Mountain State Bank", 
      type: "Community Bank",
      challenge: "High SBA exception rates and secondary market pricing issues impacting profitability",
      solution: "Comprehensive compliance overhaul and premium optimization strategies",
      results: [
        { metric: "95%", description: "Reduction in SBA exceptions" },
        { metric: "1.8%", description: "Improvement in secondary market premiums" },
        { metric: "$450K", description: "Annual savings from improved processes" },
        { metric: "6 months", description: "ROI payback period" }
      ],
      testimonial: "BOD's compliance expertise and secondary market knowledge turned our struggling SBA program into one of our most profitable product lines.",
      author: "James Thompson, President"
    }
  ]

  const testimonials = [
    {
      quote: "BOD Financial doesn't just provide services - they become part of your team. Their expertise in SBA lending is unmatched.",
      author: "Lisa Chen",
      title: "VP of Commercial Lending",
      company: "First National Bank"
    },
    {
      quote: "The technology platform is intuitive and powerful. Our loan officers love the real-time tracking and our customers appreciate the transparency.",
      author: "David Park",
      title: "Commercial Loan Manager", 
      company: "Heritage Credit Union"
    },
    {
      quote: "We've seen a 40% increase in our SBA lending efficiency since partnering with BOD. The ROI speaks for itself.",
      author: "Maria Gonzalez",
      title: "Chief Operating Officer",
      company: "Community Trust Bank"
    }
  ]

  const industryRecognition = [
    {
      award: "SBA Lender of Excellence",
      year: "2024",
      organization: "Small Business Administration",
      description: "Recognized for outstanding service to small businesses"
    },
    {
      award: "Technology Innovation Award",
      year: "2023", 
      organization: "Independent Community Bankers of America",
      description: "Leading platform innovation in SBA lending"
    },
    {
      award: "Client Satisfaction Leader",
      year: "2023",
      organization: "Financial Technology Review",
      description: "Highest client satisfaction in lending services"
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
              <Link href="/services" className="text-primary hover:text-bod-blue transition">Services</Link>
              <Link href="/technology" className="text-primary hover:text-bod-blue transition">Technology</Link>
              <Link href="/success" className="text-bod-blue font-semibold">Success Stories</Link>
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
            <Link href="/services" className="text-primary text-lg" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="/technology" className="text-primary text-lg" onClick={() => setIsMenuOpen(false)}>Technology</Link>
            <Link href="/success" className="text-bod-blue text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>Success Stories</Link>
            <Link href="/resources" className="text-primary text-lg" onClick={() => setIsMenuOpen(false)}>Resources</Link>
            <Link href="/#contact" className="btn-primary text-center" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
          </div>
        </div>
      )}

      {/* Hero */}
      <section 
        className="py-20 bg-gradient-to-br from-bod-dark via-primary to-bod-dark text-white relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(26, 37, 47, 0.9), rgba(0, 51, 102, 0.85), rgba(26, 37, 47, 0.9)), url('/images/hero-bg-success-hero.jpg')`,
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
            <h1 className="text-5xl font-bold mb-6">
              Proven <span className="text-bod-blue">Success Stories</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              See how community banks and credit unions have transformed their SBA lending operations 
              and dramatically improved their bottom line with BOD Financial.
            </p>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <metric.icon className="w-12 h-12 text-bod-blue mx-auto mb-4" />
                <div className="text-4xl font-bold text-bod-blue mb-2">{metric.value}</div>
                <div className="text-primary font-semibold text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Detailed <span className="text-bod-blue font-bold">Case Studies</span>
            </h2>
            <p className="text-xl text-primary max-w-3xl mx-auto">
              Real results from real clients - see exactly how BOD Financial transforms SBA lending operations
            </p>
          </div>
          
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="card">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <Building className="w-6 h-6 text-bod-blue" />
                      <span className="text-sm text-primary font-semibold">{study.type}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">{study.title}</h3>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-primary mb-2">Challenge:</h4>
                      <p className="text-primary">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-primary mb-2">Solution:</h4>
                      <p className="text-primary">{study.solution}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <blockquote className="italic text-primary mb-4">
                        "{study.testimonial}"
                      </blockquote>
                      <p className="text-sm text-bod-blue font-semibold">- {study.author}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-primary mb-4">Results:</h4>
                    <div className="grid gap-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-lg border-l-4 border-bod-blue">
                          <div className="text-2xl font-bold text-bod-blue mb-1">{result.metric}</div>
                          <div className="text-sm text-primary">{result.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              What Our <span className="text-bod-blue font-bold">Clients Say</span>
            </h2>
            <p className="text-xl text-primary max-w-3xl mx-auto">
              Hear directly from banking professionals who have experienced the BOD Financial difference
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card text-center">
                <Star className="w-8 h-8 text-accent mx-auto mb-4" />
                <blockquote className="italic text-primary mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="font-bold text-primary">{testimonial.author}</div>
                <div className="text-sm text-primary opacity-75">{testimonial.title}</div>
                <div className="text-sm text-bod-blue font-semibold">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section className="py-20 bg-primary text-white">
        <div className="section-padding">
          <div className="text-center mb-16">
            <Award className="w-16 h-16 text-bod-blue mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              Industry <span className="text-bod-blue">Recognition</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by leading industry organizations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {industryRecognition.map((award, index) => (
              <div key={index} className="card bg-white/10 backdrop-blur-sm text-center">
                <Award className="w-12 h-12 text-bod-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">{award.award}</h3>
                <div className="text-bod-blue font-semibold mb-2">{award.year}</div>
                <div className="text-sm text-white opacity-75 mb-3">{award.organization}</div>
                <p className="text-sm text-white">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator CTA */}
      <section className="py-20 bg-gradient-to-r from-bod-blue to-primary text-white">
        <div className="section-padding text-center">
          <h2 className="text-4xl font-bold mb-6">
            Calculate Your Potential ROI
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            See how much BOD Financial could improve your SBA lending performance and profitability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="bg-white text-bod-blue hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center">
              Schedule ROI Analysis
              <BarChart3 className="ml-2" size={20} />
            </Link>
            <Link href="/resources" className="border-2 border-white hover:bg-white hover:text-bod-blue font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center">
              <BookOpen className="mr-2" size={20} />
              Download Case Studies
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