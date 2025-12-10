// Contact Page - Poolsuite style

export function Contact() {
  const container = document.createElement('div');
  container.className = 'contact-page';
  
  container.innerHTML = `
    <div style="padding: 24px;">
      <div style="text-align: center; margin-bottom: 24px;">
        <div style="font-family: var(--font-script); font-size: 28px; color: #333; margin-bottom: 8px;">
          Get In Touch
        </div>
        <p style="font-size: 13px; color: #666; margin: 0;">
          We'd love to hear from you
        </p>
      </div>
      
      <form id="contact-form" style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <label style="display: block; margin-bottom: 6px; font-size: 12px; font-weight: 600; color: #333;">
            Name
          </label>
          <input 
            type="text" 
            name="name" 
            required
            placeholder="Your name"
            style="
              width: 100%;
              padding: 10px 12px;
              border: 1px solid #ddd;
              border-radius: 6px;
              background: white;
              font-family: inherit;
              font-size: 14px;
              outline: none;
              transition: border-color 0.2s;
            "
          />
        </div>
        
        <div>
          <label style="display: block; margin-bottom: 6px; font-size: 12px; font-weight: 600; color: #333;">
            Email
          </label>
          <input 
            type="email" 
            name="email" 
            required
            placeholder="your@email.com"
            style="
              width: 100%;
              padding: 10px 12px;
              border: 1px solid #ddd;
              border-radius: 6px;
              background: white;
              font-family: inherit;
              font-size: 14px;
              outline: none;
              transition: border-color 0.2s;
            "
          />
        </div>
        
        <div>
          <label style="display: block; margin-bottom: 6px; font-size: 12px; font-weight: 600; color: #333;">
            Message <span style="color: #999; font-weight: normal;">(optional)</span>
          </label>
          <textarea 
            name="message"
            rows="3"
            placeholder="Tell us about your project..."
            style="
              width: 100%;
              padding: 10px 12px;
              border: 1px solid #ddd;
              border-radius: 6px;
              background: white;
              font-family: inherit;
              font-size: 14px;
              resize: vertical;
              outline: none;
              transition: border-color 0.2s;
            "
          ></textarea>
        </div>
        
        <button 
          type="submit"
          style="
            padding: 12px 24px;
            border: none;
            border-radius: 6px;
            background: linear-gradient(135deg, #8ccae9 0%, #6bb5d9 100%);
            color: white;
            font-family: inherit;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            box-shadow: 0 2px 8px rgba(140, 202, 233, 0.3);
          "
        >
          Send Message
        </button>
      </form>
      
      <div id="contact-status"></div>
    </div>
  `;
  
  // Add form submission and focus effects
  setTimeout(() => {
    const form = container.querySelector('#contact-form');
    const inputs = container.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        input.style.borderColor = '#8ccae9';
      });
      input.addEventListener('blur', () => {
        input.style.borderColor = '#ddd';
      });
    });
    
    const submitBtn = container.querySelector('button[type="submit"]');
    submitBtn.addEventListener('mouseenter', () => {
      submitBtn.style.transform = 'translateY(-2px)';
      submitBtn.style.boxShadow = '0 4px 12px rgba(140, 202, 233, 0.4)';
    });
    submitBtn.addEventListener('mouseleave', () => {
      submitBtn.style.transform = 'translateY(0)';
      submitBtn.style.boxShadow = '0 2px 8px rgba(140, 202, 233, 0.3)';
    });
    
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log('Contact form submitted:', data);
        
        const status = container.querySelector('#contact-status');
        status.innerHTML = `
          <div style="
            margin-top: 16px;
            padding: 16px;
            background: linear-gradient(135deg, #98D8C8 0%, #7EC8B8 100%);
            border-radius: 6px;
            color: white;
            text-align: center;
            font-weight: 500;
          ">
            ✓ Message sent! We'll be in touch soon.
          </div>
        `;
        form.reset();
      });
    }
  }, 0);
  
  return container;
}
