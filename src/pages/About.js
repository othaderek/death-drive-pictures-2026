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
                memory and dream. We are dedicated to subversive narrative storytelling. We put an emphasis on elevated, genre-based cinema that grips you from start to finish.

              Our goal is to create films that <span class="mystery-text">cut through the noise</span> of inexhaustible content by engaging the audience with a thrilling thematic exploration through character. <br/><br/>

                We are a production company dedicated to crafting 
                visual experiences that feel like
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
                We try to translate the untranslatable. We give form to 
                the shadows at the edge of perception."
              </p>
              <div class="quote-author">— The Founders</div>
            </div>
            
            <div class="content-box location-box">
              <div class="location-header">📍 LOCATION</div>
              <div class="location-text">Based in Philadelphia, PA</div>
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
