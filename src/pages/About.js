// About Page - Angelfire/GeoCities style with mysterious content

import starsBgUrl from '../assets/about-bg/stars6.gif?url';

export function About() {
  const container = document.createElement('div');
  container.className = 'about-page angelfire-about';
  
  container.innerHTML = `
    <div class="angelfire-wrapper">
      <!-- Header -->
      <div class="page-header">
        <div class="blink-star">★</div>
        <h1 class="main-title">DEATH DRIVE PICTURES</h1>
        <div class="blink-star">★</div>
      </div>
      
      
      
      <!-- Visitor Counter -->
      <div class="visitor-counter">
        <span class="counter-label">Visitors:</span>
        <span class="counter-number">6,666</span>
        <span class="counter-label">since 2019</span>
      </div>
      
      <!-- Under Construction Banner -->
      <div class="under-construction">
        <div class="marquee-text">
          ⚠️ ALWAYS UNDER CONSTRUCTION ⚠️ THE TRUTH IS OUT THERE ⚠️
        </div>
      </div>
      
      <!-- Main Content Table -->
      <table width="100%" cellpadding="10" cellspacing="0" border="0">
        <tr>
          <td valign="top" width="50%">
            <!-- Left Column -->
            <div class="content-box">
              <div class="section-header">
                <span class="blink">●</span> WHO WE ARE <span class="blink">●</span>
              </div>
              <p class="main-text">
                <strong>Death Drive Pictures</strong> exists in the <span class="highlight">liminal space</span> between 
                memory and dream. We are a production company dedicated to crafting 
                visual experiences that feel like <span class="mystery-text">fragments of something larger</span> — 
                half-glimpsed, half-remembered.
              </p>
              <p class="main-text">
                Our work embraces the imperfect. The grain of old film stock. 
                The static between channels. The warmth of analog in a digital world.
              </p>
            </div>
            
            <div class="content-box stats-box">
              <div class="stat-item">
                <div class="stat-number">12+</div>
                <div class="stat-label">Productions</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">2019</div>
                <div class="stat-label">Founded</div>
              </div>
            </div>
          </td>
          
          <td valign="top" width="50%">
            <!-- Right Column -->
            <div class="content-box quote-box">
              <div class="quote-header">THE FOUNDERS SPEAK</div>
              <p class="quote-text">
                "We don't just make films. We excavate feelings. 
                We translate the untranslatable. We give form to 
                the shadows at the edge of perception."
              </p>
              <div class="quote-author">— The Founders</div>
            </div>
            
            <div class="content-box location-box">
              <div class="location-header">📍 LOCATION</div>
              <div class="location-text">Based in Los Angeles, CA</div>
              <div class="location-note">(But our minds are elsewhere...)</div>
            </div>
            
            <div class="content-box warning-box">
              <div class="warning-header">⚠️ WARNING ⚠️</div>
              <p class="warning-text">
                Our films may cause: <br/>
                • Vivid dreams<br/>
                • Unsettling memories<br/>
                • Questions without answers<br/>
                • The feeling of being watched
              </p>
            </div>
          </td>
        </tr>
      </table>
      
      <!-- Footer -->
      <div class="page-footer">
        <div class="footer-links">
          <a href="#">Home</a> | 
          <a href="#">Our Work</a> | 
          <a href="#">Contact</a> | 
          <a href="#">Guestbook</a>
        </div>
        <div class="footer-text">
          Best viewed in Netscape Navigator 4.0<br/>
          Last updated: Never (we exist outside time)
        </div>
      </div>
    </div>
    
    <style>
      .angelfire-about {
        background: #000080 url(${starsBgUrl}) repeat;
        color: #00ff00;
        font-family: 'Comic Sans MS', 'Comic Sans', cursive, monospace;
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
        background: #0000ff;
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
      
      .subtitle {
        text-align: center;
        font-size: 16px;
        color: #00ffff;
        margin-bottom: 15px;
        text-decoration: underline;
      }
      
      .visitor-counter {
        text-align: center;
        background: #000;
        border: 2px solid #00ff00;
        padding: 8px;
        margin: 15px auto;
        width: fit-content;
        font-family: 'Courier New', monospace;
      }
      
      .counter-label {
        color: #00ff00;
        font-size: 12px;
      }
      
      .counter-number {
        color: #ffff00;
        font-size: 20px;
        font-weight: bold;
        margin: 0 5px;
      }
      
      .under-construction {
        background: #ff0000;
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
      
      table {
        border-collapse: collapse;
        margin: 20px 0;
      }
      
      .content-box {
        background: #000;
        border: 2px solid #00ff00;
        padding: 15px;
        margin-bottom: 15px;
        box-shadow: 3px 3px 0px #ff00ff;
      }
      
      .section-header {
        color: #00ffff;
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 12px;
        text-align: center;
        text-decoration: underline;
      }
      
      .main-text {
        color: #00ff00;
        font-size: 13px;
        line-height: 1.8;
        margin: 0 0 12px 0;
      }
      
      .highlight {
        color: #ffff00;
        font-weight: bold;
      }
      
      .mystery-text {
        color: #ff00ff;
        font-style: italic;
      }
      
      .stats-box {
        display: flex;
        gap: 15px;
        justify-content: space-around;
      }
      
      .stat-item {
        text-align: center;
      }
      
      .stat-number {
        font-size: 32px;
        color: #ffff00;
        font-weight: bold;
        margin-bottom: 5px;
      }
      
      .stat-label {
        font-size: 11px;
        color: #00ff00;
      }
      
      .quote-box {
        background: #000;
        border: 2px solid #ff00ff;
      }
      
      .quote-header {
        color: #ff00ff;
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 10px;
        text-align: center;
      }
      
      .quote-text {
        color: #00ffff;
        font-size: 13px;
        line-height: 1.7;
        font-style: italic;
        margin: 0 0 10px 0;
      }
      
      .quote-author {
        color: #888;
        font-size: 11px;
        text-align: right;
      }
      
      .location-box {
        background: #000;
        border: 2px solid #00ffff;
        text-align: center;
      }
      
      .location-header {
        color: #00ffff;
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 8px;
      }
      
      .location-text {
        color: #00ff00;
        font-size: 14px;
        margin-bottom: 5px;
      }
      
      .location-note {
        color: #888;
        font-size: 11px;
        font-style: italic;
      }
      
      .warning-box {
        background: #000;
        border: 2px solid #ff0000;
      }
      
      .warning-header {
        color: #ff0000;
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 10px;
        text-align: center;
      }
      
      .warning-text {
        color: #ffff00;
        font-size: 12px;
        line-height: 1.6;
        margin: 0;
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
        margin-top: 10px;
      }
      
      /* Responsive */
      @media (max-width: 768px) {
        table {
          display: block;
        }
        
        table tr {
          display: block;
          margin-bottom: 15px;
        }
        
        table td {
          display: block;
          width: 100% !important;
        }
        
        .main-title {
          font-size: 20px;
        }
        
        .stats-box {
          flex-direction: column;
        }
      }
    </style>
  `;
  
  return container;
}
