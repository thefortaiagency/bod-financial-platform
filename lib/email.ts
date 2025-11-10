// Email utility for BOD Financial contact form
// Using Resend API with exact Fort AI Agency implementation

interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  loanVolume?: string
  message: string
}

export async function sendContactNotification(data: ContactFormData) {
  const errors = [];
  
  console.log('📧 sendContactNotification called with:', {
    name: data.name,
    email: data.email,
    hasApiKey: !!process.env.RESEND_API_KEY,
    recipient: process.env.BOD_CONTACT_RECIPIENT || 'aoberlin@thefortaiagency.ai'
  });

  // Resend API (Primary method)
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY not found in environment');
      throw new Error('Resend API not configured');
    }

    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
        <!-- Professional Blue Header -->
        <div style="background: linear-gradient(135deg, #003366 0%, #40A9E0 100%); padding: 40px 20px; text-align: center; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 32px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            📨 New Contact Form Submission
          </h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">
            BOD Financial Group - SBA Lending Excellence
          </p>
        </div>
        
        <!-- Clean White Content Body -->
        <div style="background: #ffffff; padding: 40px 30px; border: 1px solid #e5e7eb; border-top: none;">
          <!-- Contact Info Card -->
          <div style="background: #f8fafc; border-left: 4px solid #40A9E0; border-radius: 0 8px 8px 0; padding: 25px; margin-bottom: 25px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <h3 style="color: #003366; margin: 0 0 20px 0; font-size: 20px;">
              👤 Contact Information
            </h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 600; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #1f2937;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Email:</td>
                <td style="padding: 8px 0;">
                  <a href="mailto:${data.email}" style="color: #40A9E0; text-decoration: none;">${data.email}</a>
                </td>
              </tr>
              ${data.phone ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Phone:</td>
                <td style="padding: 8px 0; color: #1f2937;">${data.phone}</td>
              </tr>
              ` : ''}
              ${data.company ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Company:</td>
                <td style="padding: 8px 0; color: #1f2937;">${data.company}</td>
              </tr>
              ` : ''}
              ${data.loanVolume ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Loan Volume:</td>
                <td style="padding: 8px 0; color: #1f2937;">${data.loanVolume}</td>
              </tr>
              ` : ''}
            </table>
          </div>
          
          <!-- Message Card -->
          <div style="background: #f8fafc; border-left: 4px solid #10b981; border-radius: 0 8px 8px 0; padding: 25px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <h3 style="color: #059669; margin: 0 0 20px 0; font-size: 20px;">
              💬 Message
            </h3>
            <p style="color: #1f2937; line-height: 1.6; white-space: pre-wrap; margin: 0; font-size: 16px;">
              ${data.message}
            </p>
          </div>
          
          <!-- Quick Actions -->
          <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:${data.email}?subject=Re: BOD Financial Inquiry" 
               style="display: inline-block; background: linear-gradient(135deg, #003366, #40A9E0); color: white; text-decoration: none; padding: 12px 30px; border-radius: 8px; font-weight: 600; margin: 0 10px; box-shadow: 0 2px 4px rgba(0, 51, 102, 0.2);">
              📧 Reply to ${data.name.split(' ')[0]}
            </a>
            ${data.phone ? `
            <a href="tel:${data.phone}" 
               style="display: inline-block; background: #ffffff; color: #003366; text-decoration: none; padding: 12px 30px; border-radius: 8px; font-weight: 600; margin: 0 10px; border: 2px solid #40A9E0;">
              📞 Call ${data.name.split(' ')[0]}
            </a>
            ` : ''}
          </div>
        </div>
        
        <!-- Footer -->
        <div style="background: #f8fafc; padding: 20px; text-align: center; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
          <p style="color: #6b7280; font-size: 12px; margin: 0;">
            Submitted at ${new Date().toLocaleString()}<br>
            From: <a href="https://www.bodfinancialgroup.com" style="color: #40A9E0; text-decoration: none;">www.bodfinancialgroup.com</a>
          </p>
        </div>
      </div>
    `;

    const result = await resend.emails.send({
      from: `BOD Financial <${process.env.RESEND_FROM_EMAIL || 'info@thefortaiagency.ai'}>`,
      to: process.env.BOD_CONTACT_RECIPIENT || 'aoberlin@thefortaiagency.ai',
      replyTo: data.email,
      subject: `New Contact from ${data.name} - BOD Financial`,
      html: emailHtml,
      text: `New BOD Financial Contact Form Submission\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'Not provided'}\nCompany: ${data.company || 'Not provided'}\nLoan Volume: ${data.loanVolume || 'Not provided'}\n\nMessage:\n${data.message}\n\nSubmitted at ${new Date().toLocaleString()}`
    });

    console.log('✅ BOD Financial contact email sent via Resend:', result.data?.id);
    
    // Wait 1 second to avoid Resend rate limit (2 requests per second)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Send confirmation email to the user
    try {
      const confirmationHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <!-- Professional Blue Header -->
          <div style="background: linear-gradient(135deg, #003366 0%, #40A9E0 100%); padding: 50px 20px; text-align: center; border-radius: 12px 12px 0 0; position: relative;">
            <h1 style="color: white; margin: 0; font-size: 36px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              Thank You for Contacting BOD Financial
            </h1>
            <p style="color: rgba(255,255,255,0.95); margin: 15px 0 0 0; font-size: 18px;">
              Your SBA lending journey starts here
            </p>
          </div>
          
          <!-- Clean White Content Body -->
          <div style="background: #ffffff; padding: 45px 35px; border: 1px solid #e5e7eb; border-top: none;">
            <!-- Greeting -->
            <p style="color: #1f2937; font-size: 18px; line-height: 1.6; margin: 0 0 20px 0;">
              Hi ${data.name.split(' ')[0]} 👋,
            </p>
            <p style="color: #4b5563; font-size: 16px; line-height: 1.7; margin: 0 0 30px 0;">
              We've received your inquiry and appreciate your interest in BOD Financial Group. Our SBA lending experts will review your message and get back to you within <strong style="color: #003366;">24 hours</strong>.
            </p>
            
            <!-- Submission Summary Card -->
            <div style="background: #f8fafc; border-left: 4px solid #40A9E0; border-radius: 0 8px 8px 0; padding: 25px; margin: 30px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
              <h3 style="color: #003366; margin: 0 0 20px 0; font-size: 20px;">
                📋 Your Submission Details
              </h3>
              <div style="color: #4b5563;">
                ${data.company ? `<p style="margin: 10px 0;"><strong style="color: #1f2937;">Company:</strong> ${data.company}</p>` : ''}
                ${data.phone ? `<p style="margin: 10px 0;"><strong style="color: #1f2937;">Phone:</strong> ${data.phone}</p>` : ''}
                ${data.loanVolume ? `<p style="margin: 10px 0;"><strong style="color: #1f2937;">Annual SBA Loan Volume:</strong> ${data.loanVolume}</p>` : ''}
                <p style="margin: 15px 0 0 0;"><strong style="color: #1f2937;">Your Message:</strong></p>
                <p style="background: white; padding: 15px; border-radius: 6px; line-height: 1.6; margin: 10px 0; border: 1px solid #e5e7eb;">
                  ${data.message}
                </p>
              </div>
            </div>
            
            <!-- Services Preview -->
            <div style="background: linear-gradient(135deg, #f8fafc 0%, #f3f4f6 100%); border-radius: 8px; padding: 30px; text-align: center; margin: 30px 0;">
              <h3 style="color: #003366; margin: 0 0 15px 0; font-size: 22px;">
                🚀 While You Wait, Explore Our Services
              </h3>
              <p style="color: #4b5563; margin: 0 0 25px 0; font-size: 16px;">
                Discover how BOD Financial can transform your SBA lending operations
              </p>
              
              <!-- Service Icons -->
              <table style="width: 100%; margin-bottom: 25px;">
                <tr>
                  <td style="text-align: center; padding: 10px;">
                    <div style="color: #40A9E0; font-size: 32px; margin-bottom: 8px;">💰</div>
                    <div style="color: #1f2937; font-size: 14px; font-weight: 600;">SBA 7(a) Expertise</div>
                  </td>
                  <td style="text-align: center; padding: 10px;">
                    <div style="color: #40A9E0; font-size: 32px; margin-bottom: 8px;">💻</div>
                    <div style="color: #1f2937; font-size: 14px; font-weight: 600;">Technology Platform</div>
                  </td>
                  <td style="text-align: center; padding: 10px;">
                    <div style="color: #40A9E0; font-size: 32px; margin-bottom: 8px;">📊</div>
                    <div style="color: #1f2937; font-size: 14px; font-weight: 600;">Secondary Market</div>
                  </td>
                </tr>
              </table>
              
              <a href="https://www.bodfinancialgroup.com/services" 
                 style="display: inline-block; background: linear-gradient(135deg, #003366, #40A9E0); color: white; text-decoration: none; padding: 14px 35px; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 6px rgba(0, 51, 102, 0.2);">
                🔍 Explore Our Services
              </a>
            </div>
            
            <!-- Next Steps -->
            <div style="border-left: 3px solid #10b981; padding-left: 20px; margin: 30px 0;">
              <h4 style="color: #059669; margin: 0 0 10px 0; font-size: 18px;">What Happens Next?</h4>
              <ol style="color: #4b5563; margin: 0; padding-left: 20px; line-height: 1.8;">
                <li>Our SBA experts review your inquiry</li>
                <li>We'll contact you within 24 hours to discuss your lending needs</li>
                <li>Together, we'll create a customized solution for your institution</li>
              </ol>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background: #f8fafc; padding: 25px; text-align: center; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
            <p style="color: #6b7280; font-size: 14px; margin: 0 0 10px 0;">
              <em>"Your Tech-Forward Partner in Small Business SBA Lending"</em>
            </p>
            <p style="color: #6b7280; font-size: 13px; margin: 0;">
              © 2024 BOD Financial Group LLC • <a href="https://www.bodfinancialgroup.com" style="color: #40A9E0; text-decoration: none;">www.bodfinancialgroup.com</a>
            </p>
          </div>
        </div>
      `;

      await resend.emails.send({
        from: `BOD Financial <${process.env.RESEND_FROM_EMAIL || 'info@thefortaiagency.ai'}>`,
        to: data.email,
        subject: 'Thank you for contacting BOD Financial Group',
        html: confirmationHtml,
        text: `Hi ${data.name},\n\nWe've received your inquiry and appreciate your interest in BOD Financial Group. Our SBA lending experts will review your message and get back to you within 24 hours.\n\nBest regards,\nThe BOD Financial Team`
      });
      
      console.log('✅ User confirmation email sent');
    } catch (confirmError) {
      console.log('⚠️ User confirmation email failed, but continuing:', confirmError);
      // Don't fail the whole request if confirmation email fails
    }
    
    return true;

  } catch (error: any) {
    console.error('Resend API error:', error.message);
    errors.push(`Resend API: ${error.message}`);
  }

  // Fallback: Console logging (always works)
  console.log('📧 BOD Financial contact form notification (fallback):');
  console.log(`To: ${process.env.BOD_CONTACT_RECIPIENT || 'aoberlin@thefortaiagency.ai'}`);
  console.log(`Subject: New Contact from ${data.name} - BOD Financial`);
  console.log(`From: ${data.email} (${data.name})`);
  console.log(`Phone: ${data.phone || 'Not provided'}`);
  console.log(`Company: ${data.company || 'Not provided'}`);
  console.log(`Loan Volume: ${data.loanVolume || 'Not provided'}`);
  console.log(`Message: ${data.message}`);
  console.log('✅ BOD Financial contact form logged successfully');
  
  return false;
}