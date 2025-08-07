'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Users, Award, Target, Heart, Phone, Mail, MapPin, 
  Menu, X, Send, CheckCircle, Building, Handshake,
  Star, TrendingUp, Shield, Clock
} from 'lucide-react'

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    loanVolume: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', company: '', phone: '', loanVolume: '', message: '' })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const teamMembers = [
    {
      name: "Noah Smith",
      title: "Founder & CEO",
      description: "20+ years in SBA lending with a passion for helping community banks compete with larger institutions through technology and personalized service.",
      image: "/images/team-placeholder.jpg"
    }
  ]

  const companyValues = [
    {
      icon: Heart,
      title: "Boutique Service",
      description: "We provide personalized, white-glove service that larger firms can't match"
    },
    {
      icon: Target,
      title: "Technology-First",
      description: "Cutting-edge platform that streamlines every aspect of SBA lending"
    },
    {
      icon: Handshake,
      title: "Partnership Focus",
      description: "We become an extension of your team, not just another vendor"
    },
    {
      icon: Shield,
      title: "Compliance Excellence", 
      description: "Proactive compliance monitoring to prevent costly exceptions"
    }
  ]

  const achievements = [
    { metric: "98%", label: "Client Satisfaction Rate", icon: Star },
    { metric: "40%", label: "Faster Processing Times", icon: Clock },
    { metric: "25%", label: "Average Volume Increase", icon: TrendingUp },
    { metric: "Zero", label: "SBA Compliance Issues", icon: Shield }
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
              <Link href="/success" className="text-primary hover:text-bod-blue transition">Success Stories</Link>
              <Link href="/resources" className="text-primary hover:text-bod-blue transition">Resources</Link>
              <Link href="/about" className="text-bod-blue font-semibold">About</Link>
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
        <div className="fixed inset-0 bg-white z-50 pt-20">
          <div className="flex flex-col space-y-4 p-6">
            <Link href="/services" className="text-primary text-lg" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="/technology" className="text-primary text-lg" onClick={() => setIsMenuOpen(false)}>Technology</Link>
            <Link href="/success" className="text-primary text-lg" onClick={() => setIsMenuOpen(false)}>Success Stories</Link>
            <Link href="/resources" className="text-primary text-lg" onClick={() => setIsMenuOpen(false)}>Resources</Link>
            <Link href="/about" className="text-bod-blue text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>About</Link>
          </div>
        </div>
      )}

      {/* Hero */}
      <section 
        className="py-20 bg-gradient-to-br from-primary via-bod-blue to-primary text-white relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0, 51, 102, 0.85), rgba(64, 169, 224, 0.75), rgba(0, 51, 102, 0.85)), url('/images/hero-bg-about-hero.jpg')`,
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About <span className="text-bod-blue">BOD Financial Group</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Founded on the belief that community banks and credit unions deserve the same 
              technology and expertise as the largest institutions, at a price they can afford.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-primary">Our Story</h2>
              <p className="text-xl text-primary leading-relaxed">
                BOD Financial Group was founded to level the playing field for community banks and credit unions. 
                We saw too many excellent local lenders struggling to compete with larger institutions simply because 
                they lacked access to the same technology and specialized expertise.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-primary mb-6 leading-relaxed">
                  To empower community banks and credit unions with enterprise-grade SBA lending technology 
                  and boutique-level service, enabling them to better serve their local small business communities 
                  while improving their own profitability.
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-primary">Why We're Different</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-bod-blue mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-primary">Boutique service with enterprise technology</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-bod-blue mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-primary">Modular solutions - pay only for what you need</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-bod-blue mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-primary">Deep SBA expertise with proven compliance track record</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-bod-blue mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-primary">Technology platform built specifically for community lenders</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <achievement.icon className="w-8 h-8 text-bod-blue mx-auto mb-2" />
                      <div className="text-2xl font-bold text-bod-blue mb-1">{achievement.metric}</div>
                      <div className="text-sm text-primary font-semibold">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Our <span className="text-bod-blue font-bold">Core Values</span>
            </h2>
            <p className="text-xl text-primary max-w-3xl mx-auto">
              The principles that guide everything we do and every relationship we build
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="card text-center">
                <value.icon className="w-12 h-12 text-bod-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
                <p className="text-primary text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Meet Our <span className="text-bod-blue font-bold">Leadership</span>
            </h2>
            <p className="text-xl text-primary max-w-3xl mx-auto">
              Experienced professionals dedicated to your SBA lending success
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="card text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-bod-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-primary">{member.name}</h3>
                <div className="text-bod-blue font-semibold mb-4">{member.title}</div>
                <p className="text-primary leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary text-white">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-white">Get Started Today</h2>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Ready to transform your SBA lending operations? Let's discuss how BOD Financial 
                can help you compete more effectively and profitably.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-white">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-bod-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Phone</h4>
                      <a href="tel:260-414-9867" className="text-bod-blue hover:text-white transition">
                        (260) 414-9867
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-bod-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email</h4>
                      <a href="mailto:info@bodfinancialgroup.com" className="text-bod-blue hover:text-white transition">
                        info@bodfinancialgroup.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-bod-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Location</h4>
                      <p className="text-white">Fort Wayne, Indiana</p>
                      <p className="text-white opacity-75">Serving community banks and credit unions nationwide</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Building className="w-6 h-6 text-bod-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Business Hours</h4>
                      <p className="text-white">Monday - Friday: 8:00 AM - 6:00 PM EST</p>
                      <p className="text-white opacity-75">Emergency support available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                    <p className="text-white">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white text-sm font-semibold mb-2">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-bod-blue"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-semibold mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-bod-blue"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white text-sm font-semibold mb-2">Company *</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-bod-blue"
                          placeholder="Bank or Credit Union name"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-semibold mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-bod-blue"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-white text-sm font-semibold mb-2">Annual SBA Loan Volume</label>
                      <select
                        name="loanVolume"
                        value={formData.loanVolume}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-bod-blue"
                      >
                        <option value="">Select volume range</option>
                        <option value="new">New to SBA lending</option>
                        <option value="1-5m">$1M - $5M</option>
                        <option value="5-15m">$5M - $15M</option>
                        <option value="15-50m">$15M - $50M</option>
                        <option value="50m+">$50M+</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-white text-sm font-semibold mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-bod-blue resize-none"
                        placeholder="Tell us about your SBA lending goals and challenges..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-bod-blue hover:bg-bod-blue/90 disabled:opacity-50 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2" size={20} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
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