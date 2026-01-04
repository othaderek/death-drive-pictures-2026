// Contact Page - Angelfire/GeoCities style

import skyBgUrl from '../assets/contact-bg/clouds.jpg?url';

export function Contact() {
  const container = document.createElement('div');
  container.className = 'contact-page angelfire-contact';
  
  container.innerHTML = `
    <div class="angelfire-wrapper">
      <!-- Header -->
      <div class="page-header">
        <div class="blink-star">★</div>
        <h1 class="main-title">GET IN TOUCH</h1>
        <div class="blink-star">★</div>
      </div>
      
      <!-- Visitor Counter -->
      <div class="visitor-counter">
        <span class="counter-label">Contact Form Submissions:</span>
        <span class="counter-number">1,337</span>
      </div>
      
      <!-- Under Construction Banner -->
      <div class="contact-under-construction">
        <div class="marquee-text">
          ⚠️ SEND US YOUR MESSAGE ⚠️ WE'RE LISTENING ⚠️
        </div>
      </div>
      
      <!-- Contact Form -->
      <div class="content-box form-box">
        <div class="section-header">
          <span class="blink">●</span> CONTACT FORM <span class="blink">●</span>
        </div>
        
        <form id="contact-form" class="contact-form">
          <div class="form-group">
            <label class="form-label">
              <span class="label-text">NAME:</span>
              <span class="required">*</span>
            </label>
            <input 
              type="text" 
              name="name" 
              required
              placeholder="Enter your name..."
              class="form-input"
            />
          </div>
          
          <div class="form-group">
            <label class="form-label">
              <span class="label-text">EMAIL:</span>
              <span class="required">*</span>
            </label>
            <input 
              type="email" 
              name="email" 
              required
              placeholder="your@email.com"
              class="form-input"
            />
          </div>
          
          <div class="form-group">
            <label class="form-label">
              <span class="label-text">MESSAGE:</span>
              <span class="optional">(optional)</span>
            </label>
            <textarea 
              name="message"
              rows="5"
              placeholder="Tell us about your project or just say hi..."
              class="form-textarea"
            ></textarea>
          </div>
          
          <div class="form-submit-wrapper">
            <button type="submit" class="submit-button">
              <span class="blink">▶</span> SEND MESSAGE <span class="blink">▶</span>
            </button>
          </div>
        </form>
        
        <div id="contact-status"></div>
      </div>
      
      <!-- Info Box -->
      <div class="content-box info-box">
        <div class="info-header">ℹ️ IMPORTANT INFO</div>
        <p class="info-text">
          We read every message we receive. Response time varies depending on 
          the <span class="mystery-text">cosmic alignment</span> and our current 
          production schedule. For urgent matters, try sending your message 
          during a <span class="highlight">full moon</span>.
        </p>
      </div>
      
      <!-- Footer -->
      <div class="page-footer">
        <div class="footer-links">
          <a href="#">Home</a> | 
          <a href="#">Our Work</a> | 
          <a href="#">About</a> | 
          <a href="#">Guestbook</a>
        </div>
        <div class="footer-text">
          Best viewed in Netscape Navigator 4.0<br/>
          Last updated: Never (we exist outside time)
        </div>
      </div>
    </div>
    
    <style>
      .angelfire-contact {
        background: #000080 url(${skyBgUrl}) repeat;
        filter: hue-rotate(90deg)
        color: #00ff00;
        font-family: var(--font-script);
        padding: 15px;
        line-height: 1.6;
        min-height: 100%;
      }
      
      .angelfire-wrapper {
        max-width: 100%;
      }
      
      .page-header {
        text-align: center;
        margin-bottom: 10px;
        padding: 15px;
        border: 3px solid #ffff00;
        box-shadow: 5px 5px 0px #ff00ff;
      }
      
      .main-title {
        font-size: 28px;
        color: #ffff00;
        text-shadow: 3px 3px 0px #ff00ff, -1px -1px 0px #00ffff;
        margin: 10px 0;
        display: inline-block;
        letter-spacing: 3px;
      }
      
      .blink-star {
        display: inline-block;
        color: #ff00ff;
        animation: blink 1s infinite;
        font-size: 24px;
        margin: 0 10px;
      }
      
      .blink {
        display: inline-block;
        animation: blink 1s infinite;
        color: #00ffff;
      }
      
      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
      
      .visitor-counter {
        text-align: center;
        background: #000000;
        border: 2px solid rgb(0, 255, 195);
        padding: 8px;
        margin: 15px auto;
        width: fit-content;
        font-family: 'Courier New', monospace;
      }
      
      .counter-label {
        color: #ffff00;
        text-shadow: 3px 3px 0px #ff00ff, -1px -1px 0px #00ffff;
        font-size: 12px;
      }
      
      .counter-number {
        color: #ffff00;
        font-size: 20px;
        font-weight: bold;
        margin: 0 5px;
      }
      
      .contact-under-construction {
        color: #ffff00;
        padding: 8px;
        margin: 15px 0;
        border: 2px dashed #ffff00;
        font-weight: bold;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
      }
      
      .marquee-text {
        display: inline-block;
        animation: marquee 15s linear infinite;
      }
      
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      
      .content-box {
        border: 2px solid #00ff00;
        padding: 15px;
        margin-bottom: 15px;
        box-shadow: 3px 3px 0px #ff00ff;
      }
      
      .form-box {
        border: 2px solid #00ffff;
      }
      
      .section-header {
        color:rgb(123, 0, 255);
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 15px;
        text-align: center;
        text-decoration: underline;
      }
      
      .contact-form {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      
      .form-group {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
      
      .form-label {
        color: #00ff00;
        font-size: 13px;
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 5px;
      }
      
      .label-text {
        font-family: var(--font-mono);
        color: #ff0000;
        font-size: 14px;
      }
      
      .required {
        color: #ff0000;
        font-weight: bold;
      }
      
      .optional {
        color: #888;
        font-weight: normal;
        font-size: 11px;
      }
      
      .form-input,
      .form-textarea {
        width: 100%;
        padding: 10px;
        border: 2px solid #00ff00;
        background: #000;
        color: #00ff00;
        font-family: 'Comic Sans MS', 'Comic Sans', cursive, monospace;
        font-size: 13px;
        outline: none;
        box-sizing: border-box;
      }
      
      .form-input:focus,
      .form-textarea:focus {
        border-color: #ffff00;
        box-shadow: 0 0 5px #ffff00;
      }
      
      .form-input::placeholder,
      .form-textarea::placeholder {
        color: #666;
      }
      
      .form-textarea {
        resize: vertical;
        min-height: 100px;
      }
      
      .form-submit-wrapper {
        text-align: center;
        margin-top: 10px;
      }
      
      .submit-button {
        padding: 12px 24px;
        border: 3px solid #ffff00;
        background: #ff00ff;
        color: #ffff00;
        // font-family: 'Comic Sans MS', 'Comic Sans', cursive, monospace;
        font-family: var(--font-mono);
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        text-transform: uppercase;
        letter-spacing: 2px;
        box-shadow: 4px 4px 0px #00ffff;
        transition: all 0.1s;
      }
      
      .submit-button:hover {
        background: #ffff00;
        color: #ff00ff;
        transform: translate(2px, 2px);
        box-shadow: 2px 2px 0px #00ffff;
      }
      
      .submit-button:active {
        transform: translate(4px, 4px);
        box-shadow: 0 0 0px #00ffff;
      }
      
      .info-box {
        background: #000000;
        border: 2px solid #ff00ff;
      }
      
      .info-header {
        color: #ff00ff;
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 10px;
        text-align: center;
      }
      
      .info-text {
        color: #00ffff;
        font-size: 16px;
        line-height: 1.7;
        margin: 0;
      }
      
      .highlight {
        color: #ffff00;
        font-weight: bold;
      }
      
      .mystery-text {
        color: #ff00ff;
        font-style: italic;
      }
      
      .page-footer {
        text-align: center;
        margin-top: 30px;
        padding: 15px;
        background: #000;
        border: 2px solid #00ff00;
      }
      
      .footer-links {
        margin-bottom: 10px;
      }
      
      .footer-links a {
        color: #00ffff;
        text-decoration: underline;
        margin: 0 5px;
      }
      
      .footer-links a:hover {
        color: #ffff00;
        background: #ff00ff;
      }
      
      .footer-text {
        color: #888;
        font-size: 11px;
        margin-top: 12px;
        font-family: var(--font-mono);
      }
      
      #contact-status {
        margin-top: 15px;
      }
      
      .status-success {
        background: #000;
        border: 2px solid #00ff00;
        padding: 15px;
        color: #00ff00;
        text-align: center;
        font-weight: bold;
        font-size: 14px;
        box-shadow: 3px 3px 0px #ff00ff;
      }
      
      /* Responsive */
      @media (max-width: 768px) {
        .main-title {
          font-size: 20px;
        }
        
        .form-input,
        .form-textarea {
          font-size: 12px;
        }
      }
    </style>
  `;
  
  // Add form submission and focus effects
  setTimeout(() => {
    const form = container.querySelector('#contact-form');
    const inputs = container.querySelectorAll('.form-input, .form-textarea');
    
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        input.style.borderColor = '#ffff00';
        input.style.boxShadow = '0 0 5px #ffff00';
      });
      input.addEventListener('blur', () => {
        input.style.borderColor = '#00ff00';
        input.style.boxShadow = 'none';
      });
    });
    
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log('Contact form submitted:', data);
        
        const status = container.querySelector('#contact-status');
        status.innerHTML = `
          <div class="status-success">
            ✓ MESSAGE SENT! ✓<br/>
            We'll be in touch soon. The cosmic alignment has been noted.
          </div>
        `;
        form.reset();
      });
    }
  }, 0);
  
  return container;
}
