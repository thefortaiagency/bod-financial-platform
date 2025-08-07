import { NextRequest, NextResponse } from 'next/server'
import { sendContactNotification } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, loanVolume, message } = body

    // Basic validation
    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Send notifications
    const notificationData = {
      name,
      email,
      phone,
      company,
      loanVolume,
      message
    }
    
    // Send email notification using Resend
    const emailSent = await sendContactNotification(notificationData)
    
    if (!emailSent) {
      console.error('Failed to send email notification')
      // Don't fail the whole request, but log it
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your interest! We\'ll contact you within 24 hours.',
      emailSent: emailSent 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}