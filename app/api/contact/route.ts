import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, loanVolume, message } = body

    // Basic validation
    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Log the contact form submission (in production, you'd send this to your email service)
    console.log('Contact form submission:', {
      name,
      email,
      company,
      phone,
      loanVolume,
      message,
      timestamp: new Date().toISOString(),
    })

    // Here you would typically:
    // 1. Send an email to BOD Financial
    // 2. Add to a CRM system
    // 3. Store in a database
    // 4. Send confirmation email to the user
    
    // For now, we'll just simulate a successful response
    
    // TODO: Implement actual email sending using your preferred service
    // Examples:
    // - Resend API
    // - SendGrid
    // - AWS SES
    // - Gmail API
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your inquiry! We will get back to you within 24 hours.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}