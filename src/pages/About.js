// About Page - Poolsuite style with mysterious content

export function About() {
  const container = document.createElement('div');
  container.className = 'about-page';
  
  container.innerHTML = `
    <div style="padding: 24px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <div style="font-family: var(--font-script); font-size: 36px; color: #333; margin-bottom: 12px;">
          About Us
        </div>
        <div style="
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, #8ccae9, #a8d5f0);
          margin: 0 auto;
        "></div>
      </div>
      
      <div style="
        background: white;
        border-radius: 8px;
        padding: 24px;
        margin-bottom: 20px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      ">
        <p style="font-size: 15px; color: #444; line-height: 1.8; margin: 0 0 16px 0;">
          <strong>Death Drive Pictures</strong> exists in the liminal space between 
          memory and dream. We are a production company dedicated to crafting 
          visual experiences that feel like fragments of something larger — 
          half-glimpsed, half-remembered.
        </p>
        <p style="font-size: 15px; color: #444; line-height: 1.8; margin: 0;">
          Our work embraces the imperfect. The grain of old film stock. 
          The static between channels. The warmth of analog in a digital world.
        </p>
      </div>
      
      <div style="
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
        margin-bottom: 20px;
      ">
        <div style="
          background: linear-gradient(135deg, #8ccae9 0%, #6bb5d9 100%);
          border-radius: 8px;
          padding: 20px;
          color: white;
        ">
          <div style="font-size: 28px; font-weight: 700; margin-bottom: 4px;">12+</div>
          <div style="font-size: 12px; opacity: 0.9;">Productions</div>
        </div>
        <div style="
          background: linear-gradient(135deg, #98D8C8 0%, #7EC8B8 100%);
          border-radius: 8px;
          padding: 20px;
          color: white;
        ">
          <div style="font-size: 28px; font-weight: 700; margin-bottom: 4px;">2019</div>
          <div style="font-size: 12px; opacity: 0.9;">Founded</div>
        </div>
      </div>
      
      <div style="
        background: rgba(0,0,0,0.03);
        border-radius: 8px;
        padding: 20px;
        border-left: 3px solid #B8A9D4;
      ">
        <p style="font-size: 14px; color: #666; line-height: 1.7; margin: 0; font-style: italic;">
          "We don't just make films. We excavate feelings. 
          We translate the untranslatable. We give form to 
          the shadows at the edge of perception."
        </p>
        <p style="font-size: 12px; color: #999; margin: 12px 0 0 0;">
          — The Founders
        </p>
      </div>
      
      <div style="
        margin-top: 20px;
        padding: 16px;
        background: white;
        border-radius: 8px;
        text-align: center;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      ">
        <div style="font-size: 12px; color: #888; letter-spacing: 1px; text-transform: uppercase;">
          Based in Los Angeles, CA
        </div>
      </div>
    </div>
  `;
  
  return container;
}
