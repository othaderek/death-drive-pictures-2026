// Landing Page - Poolsuite style

export function Landing() {
  const container = document.createElement('div');
  container.className = 'landing-page';
  
  container.innerHTML = `
    <div style="text-align: center; padding: 30px 20px;">
      <div style="margin-bottom: 30px;">
        <div style="font-family: var(--font-script); font-size: 42px; color: #333; margin-bottom: 10px;">
          death drive pictures
        </div>
      </div>
      
      <div style="
        padding: 20px;
        background: rgba(255,255,255,0.5);
        border-radius: 8px;
        margin-top: 20px;
      ">
        <p style="font-size: 14px; color: #444; line-height: 1.7; margin: 0;">
          We create films that linger in your mind.<br/>
          Stories that feel like half-remembered dreams.<br/>
          <span style="color: #8ccae9;">Click the icons below to explore.</span>
        </p>
      </div>
    </div>
    
    <style>
      @keyframes pulse {
        0%, 100% { opacity: 0.8; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.1); }
      }
    </style>
  `;
  
  return container;
}
