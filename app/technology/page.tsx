'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Laptop, Shield, Zap, Database, Globe, Lock, 
  CheckCircle, TrendingUp, BarChart3, Clock,
  Smartphone, Cloud, Wifi, Settings, Bell, Eye, Menu, X
} from 'lucide-react'

export default function TechnologyPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const techFeatures = [
    {
      icon: Laptop,
      title: "Real-time Loan Tracking Portal",
      description: "Advanced dashboard providing complete visibility into loan status, milestones, and next steps",
      features: ["Live status updates", "Milestone tracking", "Document checklist", "Timeline visualization"]
    },
    {
      icon: Shield,
      title: "Secure Document Management",
      description: "Bank-grade security with encrypted storage and controlled access for all loan documentation",
      features: ["256-bit encryption", "Role-based access", "Audit trails", "Automatic backups"]
    },
    {
      icon: Database,
      title: "Integrated SBA Database",
      description: "Direct integration with SBA systems for real-time compliance checking and status updates",
      features: ["SBA API integration", "Real-time validation", "Compliance monitoring", "Automated reporting"]
    },
    {
      icon: Zap,
      title: "Automated Workflow Engine",
      description: "Intelligent automation that routes tasks, sends notifications, and manages deadlines",
      features: ["Smart task routing", "Automatic notifications", "Deadline management", "Progress tracking"]
    },
    {
      icon: Globe,
      title: "Multi-Bank Integration",
      description: "Seamless integration with your existing core banking systems and loan origination software",
      features: ["Core banking sync", "LOS integration", "API connections", "Data synchronization"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive reporting and analytics to optimize your SBA lending performance",
      features: ["Performance metrics", "Volume analytics", "ROI tracking", "Custom reports"]
    }
  ]

  const platformStats = [
    { metric: "99.9%", label: "Uptime Guarantee", icon: Clock },
    { metric: "<2 sec", label: "Page Load Time", icon: Zap },
    { metric: "256-bit", label: "SSL Encryption", icon: Lock },
    { metric: "24/7", label: "System Monitoring", icon: Eye }
  ]

  const integrations = [
    {
      category: "Core Banking Systems",
      systems: ["FIS", "Jack Henry", "Fiserv", "Q2", "Temenos", "Custom APIs"]
    },
    {
      category: "Loan Origination",
      systems: ["nCino", "Encompass", "Calyx Point", "Byte", "PowerLender", "Custom LOS"]
    },
    {
      category: "Document Management", 
      systems: ["LaserFiche", "OnBase", "SharePoint", "Box", "Dropbox Business", "Google Workspace"]
    },
    {
      category: "Communication Tools",
      systems: ["Microsoft Teams", "Slack", "Email Integration", "SMS Notifications", "Video Conferencing"]
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
              <Link href="/technology" className="text-bod-blue font-semibold">Technology</Link>
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
            <Link href="/services" className="text-primary text-lg" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="/technology" className="text-bod-blue text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>Technology</Link>
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
          backgroundImage: `linear-gradient(to bottom right, rgba(26, 37, 47, 0.9), rgba(0, 51, 102, 0.85), rgba(26, 37, 47, 0.9)), url('/images/hero-bg-technology-hero.jpg')`,
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
              Industry-Leading <span className="text-bod-blue">Technology Stack</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Our advanced platform streamlines every aspect of SBA lending, giving you real-time visibility 
              and control over your loan portfolio with enterprise-grade security.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {platformStats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 text-bod-blue mx-auto mb-4" />
                <div className="text-3xl font-bold text-bod-blue mb-2">{stat.metric}</div>
                <div className="text-primary font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-20 bg-gray-50">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Comprehensive <span className="text-bod-blue font-bold">Platform Features</span>
            </h2>
            <p className="text-xl text-primary max-w-3xl mx-auto">
              Every tool you need to streamline SBA lending, from origination to secondary market sales
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techFeatures.map((feature, index) => (
              <div key={index} className="card">
                <feature.icon className="w-12 h-12 text-bod-blue mb-4" />
                <h3 className="text-xl font-bold mb-3 text-primary">{feature.title}</h3>
                <p className="text-primary mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-primary">
                      <CheckCircle className="w-4 h-4 text-bod-blue mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Demo */}
      <section className="py-20 bg-primary text-white">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                See Our <span className="text-bod-blue">Platform in Action</span>
              </h2>
              <p className="text-xl mb-8 text-white">
                Experience the power of real-time loan tracking, automated compliance monitoring, 
                and seamless communication tools that transform your SBA lending operation.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Live loan status dashboard",
                  "Automated document collection",
                  "Real-time SBA compliance checking", 
                  "Integrated team communication",
                  "Performance analytics and reporting",
                  "Secondary market optimization tools"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-bod-blue flex-shrink-0 mt-0.5" />
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/#contact" className="btn-primary bg-bod-blue hover:bg-bod-blue/90 inline-flex items-center">
                Request Platform Demo
                <Laptop className="ml-2" size={20} />
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-white">Processing Speed</span>
                    <span className="text-bod-blue font-bold">+40%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-bod-blue h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-white">Compliance Accuracy</span>
                    <span className="text-bod-blue font-bold">98%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-bod-blue h-2 rounded-full" style={{width: '98%'}}></div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-white">Client Satisfaction</span>
                    <span className="text-bod-blue font-bold">4.9/5</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-bod-blue h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Seamless <span className="text-bod-blue font-bold">System Integrations</span>
            </h2>
            <p className="text-xl text-primary max-w-3xl mx-auto">
              Connect with your existing banking systems and workflows for a unified lending experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrations.map((category, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-bold mb-4 text-bod-blue">{category.category}</h3>
                <ul className="space-y-2">
                  {category.systems.map((system, idx) => (
                    <li key={idx} className="flex items-center text-sm text-primary">
                      <CheckCircle className="w-4 h-4 text-bod-blue mr-2 flex-shrink-0" />
                      {system}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-20 h-20 text-bod-blue mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6 text-primary">
              Bank-Grade <span className="text-bod-blue font-bold">Security</span>
            </h2>
            <p className="text-xl text-primary mb-12">
              Your data is protected with the same security standards used by major financial institutions
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card text-center">
                <Lock className="w-12 h-12 text-bod-blue mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2 text-primary">256-bit Encryption</h3>
                <p className="text-primary text-sm">End-to-end encryption for all data transmission and storage</p>
              </div>
              <div className="card text-center">
                <Eye className="w-12 h-12 text-bod-blue mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2 text-primary">Audit Trails</h3>
                <p className="text-primary text-sm">Complete activity logging for compliance and security monitoring</p>
              </div>
              <div className="card text-center">
                <Cloud className="w-12 h-12 text-bod-blue mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2 text-primary">SOC 2 Compliance</h3>
                <p className="text-primary text-sm">Independently audited security controls and procedures</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-bod-blue to-primary text-white">
        <div className="section-padding text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Technology?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            See how our platform can streamline your SBA lending operations and improve your bottom line.
          </p>
          <Link href="/#contact" className="bg-white text-bod-blue hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center">
            Schedule Technology Demo
            <Laptop className="ml-2" size={20} />
          </Link>
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