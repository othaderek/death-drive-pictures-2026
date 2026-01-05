// Work Page - CRT TV + VHS Tape Shelf Interface
import ddpFlagVideoUrl from '../assets/videos/ddp-flag.mp4?url';
import ddpSquashVideoUrl from '../assets/videos/ddp-squash.mp4?url';

export function Work() {
  const container = document.createElement('div');
  container.className = 'work-page vhs-interface';
  
  const projects = [
    { title: 'The Inheritance', year: '2024', type: 'Short Film', spine: '/src/assets/vhs-spines/the_inheritance.jpeg' },
    { title: 'The Executive Assistant', year: '2024', type: 'Short Film', spine: '/src/assets/vhs-spines/the_executive_assitant.jpeg' },
    { title: 'No Fly List - Close to Closure', year: '2025', type: 'Music Video', spine: '/src/assets/vhs-spines/nfl-close_to_closure.jpeg' },
    { title: 'Wakelee - Bangkok', year: '2025', type: 'Music Video', spine: '/src/assets/vhs-spines/wakelee_bangkok.jpeg' },
    { title: 'Wakelee - Garys Outcome', year: '2025', type: 'Music Video', spine: '/src/assets/vhs-spines/wakelee-garys_outcome.jpeg' },
    { title: 'Tips Up!', year: '2023', type: 'Short Film', spine: '/src/assets/vhs-spines/tips_up.jpeg' },
    { title: 'Babygirl', year: '2022', type: 'Short Film', spine: '/src/assets/vhs-spines/babygirl.jpeg' },
  ];
  
  container.innerHTML = `
    <div class="vhs-layout">
      <!-- Left: CRT Television -->
      <div class="crt-container">
        <div class="crt-wrapper">
          <!-- CRT TV Frame (background layer) -->
          <img src="/src/assets/tv/crt_tv_for_website_no_glass.png" alt="CRT TV" class="crt-frame" />
          
          <!-- Video Container (middle layer - for video playback) -->
          <div class="crt-screen-container" id="crt-screen-container">
            <div class="crt-screen" id="crt-screen">
              <!-- Video element will be inserted here -->
              <video class="crt-video" id="crt-video" autoplay loop muted playsinline 
                     style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:fill;"></video>
              <div class="crt-static" id="crt-static">
                <div class="static-text">NO SIGNAL</div>
              </div>
              <!-- Canvas for WebGL effects will be added here -->
              <canvas id="crt-canvas" class="crt-canvas"></canvas>
            </div>
          </div>
          
          <!-- Glass Overlay (top layer) -->
          <img src="/src/assets/tv/glass.jpg" alt="CRT Glass" class="crt-glass-overlay" />
        </div>
        
        <div class="vhs-player">
          <img src="/src/assets/tv/vhs_player_for_tv.png" alt="VHS Player" class="vhs-player-img" />
        </div>
      </div>
      
      <!-- Right: VHS Tape Shelf -->
      <div class="vhs-shelf">
        <div class="shelf-wrapper">
          <img src="/src/assets/tv/shelf_for_website.png" alt="VHS Shelf" class="shelf-frame" />
          <div class="tape-rack-container">
            <div class="tape-rack" id="tape-rack">
        ${projects.map((project, index) => `
                <div class="vhs-tape" data-index="${index}" data-title="${project.title}">
                  <div class="tape-spine-wrapper">
                    <img class="tape-spine-img" src="${project.spine}" alt="${project.title}" />
            </div>
              </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <style>
      .work-page {
      overflow: hidden !important;
      }
      .window-content:has(.vhs-interface) {
      overflow: hidden !important;
      }
      .vhs-interface {
        background: url('/src/assets/tv/wall_for_tv.png') center center / cover no-repeat;
        background-color: #0a0a0a; /* Fallback */
        min-height: 100%;
        max-height: calc(100vh - 40px);
        padding: 20px;
        font-family: 'Courier New', monospace;
        position: relative;
        box-sizing: border-box;
        width: 100%;
        max-width: 100%;
        overflow: hidden;
      }
      
      .vhs-layout {
        display: flex;
        gap: 20px;
        align-items: stretch;
        justify-content: center;
        flex-wrap: nowrap;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        padding-top: 40px; /* Push content down */
        transform: scale(1.2);
        transform-origin: center top;
      }
      
      /* CRT Television */
      .crt-container {
        flex: 0 0 auto;
        position: relative;
        max-width: 100%;
        box-sizing: border-box;
        
      }
      
      .crt-wrapper {
        position: relative;
        width: 100%;
        max-width: 300px; /* Reduced from 400px */
        max-height: 70vh;
        box-sizing: border-box;
        transform: translateY(50px);
        z-index: 2;
      }
      
      .crt-frame {
        width: 100%;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        display: block;
        position: relative;
        z-index: 1;
        box-sizing: border-box;
      }
      
      .crt-screen-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        pointer-events: none;
      }
      
      .crt-screen {
        position: absolute;
        /* These values need to be adjusted based on your CRT frame image */
        /* Position and size should match the screen cutout in crt_tv_for_website_no_glass.png */
        top: 8%;
        left: 8%;
        width: 84%;
        height: 58%;
        background: #000;
        overflow: hidden;
        pointer-events: auto;
      }
      
      .crt-canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 3;
      }
      
      .crt-video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100% !important;
        height: 100% !important;
        min-width: 100%;
        min-height: 100%;
        object-fit: fill !important;
        z-index: 2;
      }
      
      .crt-static {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: 
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.3) 2px,
            rgba(0,0,0,0.3) 4px
          );
        animation: staticNoise 0.1s infinite;
        position: relative;
        z-index: 1;
      }
      
      .crt-static.hidden {
        display: none;
      }
      
      @keyframes staticNoise {
        0%, 100% { opacity: 0.8; }
        50% { opacity: 0.9; }
      }
      
      .static-text {
        color: rgba(0, 200, 0, 0.4);
        font-size: 18px;
        letter-spacing: 6px;
        text-shadow: 0 0 10px rgba(0,255,0,0.3);
        font-weight: bold;
      }
      
      .crt-glass-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-width: 100%;
        opacity: 0.0;
        mix-blend-mode: overlay;
        pointer-events: none;
        z-index: 4;
        box-sizing: border-box;
      }
      
      .vhs-player {
        position: relative;
        z-index: 0;
        margin-top: -25px; /* Increased from -15px to close gap */
        width: 100%;
        max-width: 300px; /* Match CRT wrapper width */
        transform: translateY(5px);
      }
      
      .vhs-player-img {
        width: 100%;
        height: auto;
        display: block;
        max-width: 100%;
      }
      
      /* VHS Tape Shelf */
      .vhs-shelf {
        flex: 0 0 275px;
        width: 270px;
        max-width: 100%;
        max-height: 70vh;
        box-sizing: border-box;
        transform: translateY(-60px);
      }
      
      .shelf-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
      }
      
      .shelf-frame {
        width: 100%;
        height: auto;
        max-width: 100%;
        display: block;
        position: relative;
        z-index: 1;
      }
      
      .tape-rack-container {
        position: absolute;
        top: 4%;
        left: 8%;
        width: 84%;
        height: 100%; /* Increased to fill more of shelf */
        z-index: 2;
        pointer-events: none;
      }
      
      .tape-rack {
        display: flex;
        flex-direction: column;
        gap: 0.5%; /* Small gap for alignment */
        height: 100%;
        justify-content: flex-start; /* Keep tapes in bounds */
        pointer-events: auto;
      }
      
      .vhs-tape {
        --spine-height: calc((100% - (1.5% * 6)) / 7); /* 7 tapes with 6 gaps */
        --spine-width: 100%;
        height: var(--spine-height);
        width: 100%;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        border-radius: 0px;
        overflow: visible;
        box-sizing: border-box;
        flex-shrink: 1; /* Allow shrinking to fit in shelf */
        background: transparent;  /* Add this to be sure */
        border: none;             /* Add this to be sure */
      }
      
      .vhs-tape:hover {
        transform: scale(1.3);
        z-index: 10;
      }
      
      .vhs-tape.selected {
        transform: scale(1.3);
        // opacity: 0%;
        z-index: 11;
      }
      
      .tape-spine-wrapper {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
      }
      
      .tape-spine-img {
        /* 
         * Rotate image 90 degrees counter-clockwise.
         * After rotation: CSS height -> displayed width, CSS width -> displayed height
         * Height will be set dynamically by JavaScript to match container width
         */
        position: absolute;
        /* Pre-rotation: width = desired display height, height = container width (set by JS) */
        width: var(--spine-height);
        height: 260px; /* Fallback, will be overridden by JavaScript */
        object-fit: contain;
        /* 
         * Center the image, then rotate.
         * Position image center at container center before rotation.
         */
        left: calc(50% - var(--spine-height) / 2);
        top: 50%;
        transform: translateY(-50%) rotate(-90deg) scale(1.18);
        transform-origin: center center;
        border-radius: 2px;
        box-shadow: 
          0 2px 6px rgba(0,0,0,0.5),
          inset 0 1px 0 rgba(255,255,255,0.1),
          inset 0 -1px 0 rgba(0,0,0,0.2);
        transition: box-shadow 0.3s ease, height 0.3s ease;
      }
      
      .vhs-tape:hover .tape-spine-img {
        box-shadow: 
          4px 2px 15px rgba(0,0,0,0.8),
          inset 0 1px 0 rgba(255,255,255,0.15),
          inset 0 -1px 0 rgba(0,0,0,0.3);
      }
      
      .vhs-tape.selected .tape-spine-img {
        filter: saturate(150%);
        box-shadow: 
          6px 3px 20px rgba(0,0,0,0.9),
          0 0 20px rgba(255, 200, 0, 0.3),
          inset 0 1px 0 rgba(255,255,255,0.2);

      }
      
      /* Responsive */
      @media (max-width: 1200px) {
        .vhs-layout {
          gap: 15px;
        }
        
        .crt-wrapper {
          max-width: 280px;
          max-height: 65vh;
        }
        
        .vhs-shelf {
          flex: 0 0 180px;
          width: 180px;
        }
      }
      
      @media (max-width: 700px) {
        .vhs-layout {
          flex-direction: column;
          flex-wrap: wrap;
          align-items: center;
          gap: 30px;
        }
        
        .crt-container {
          width: 100%;
          max-width: 100%;
        }
        
        .crt-wrapper {
          max-width: 500px;
          max-height: none;
          margin: 0 auto;
        }
        
        .vhs-shelf {
          flex: 0 0 auto;
          width: 100%;
          max-width: 400px;
          max-height: none;
        }
        
        .vhs-tape {
          --spine-width: calc(100% - 0px); /* Container handles padding */
        }
      }
      
      @media (max-width: 768px) {
        .vhs-interface {
        padding: 15px;
        }
        
        .vhs-layout {
          gap: 20px;
        }
        
        .crt-wrapper {
          max-width: 100%;
        }
        
        .vhs-shelf {
          width: 100%;
          max-width: 100%;
        }
        
        .vhs-tape {
          --spine-width: 100%;
        }
        
        .static-text {
          font-size: 14px;
          letter-spacing: 3px;
        }
      }
      
      @media (max-width: 480px) {
        .vhs-interface {
          padding: 10px;
        }
        
        .vhs-layout {
          gap: 15px;
        }
        
        .crt-wrapper {
          max-width: 100%;
        }
        
        .vhs-shelf {
          width: 100%;
          max-width: 100%;
        }
        
        .vhs-tape {
          --spine-width: 100%;
        }
        
        .static-text {
          font-size: 12px;
          letter-spacing: 2px;
        }
      }
    </style>
  `;
  
  // Add click handlers for VHS tapes
  setTimeout(() => {
    const tapes = container.querySelectorAll('.vhs-tape');
    const crtScreen = container.querySelector('#crt-screen');
    const crtStatic = container.querySelector('#crt-static');
    
    // Randomly select a video (will be initialized after CRT frame loads)
    const videos = [ddpFlagVideoUrl, ddpSquashVideoUrl];
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    
    let selectedTape = null;
    
    tapes.forEach((tape, index) => {
      tape.addEventListener('click', () => {
        const project = projects[index];
        
        // Update selected state
        if (selectedTape) {
          selectedTape.classList.remove('selected');
        }
        tape.classList.add('selected');
        selectedTape = tape;
        
        // Update screen content
        if (crtStatic) {
          const staticText = crtStatic.querySelector('.static-text');
          if (staticText) {
            staticText.textContent = project.title.toUpperCase();
          }
        }
        
        console.log(`Selected tape: ${project.title}`);
        // Future: trigger tape insertion animation and video playback
      });
    });
    
    // Calculate and set spine image widths dynamically
    const updateSpineWidths = () => {
      tapes.forEach((tape) => {
        const wrapper = tape.querySelector('.tape-spine-wrapper');
        if (wrapper) {
          const wrapperWidth = wrapper.getBoundingClientRect().width;
          const img = wrapper.querySelector('.tape-spine-img');
          if (img) {
            // Set height to wrapper width (becomes displayed width after rotation)
            img.style.height = `${wrapperWidth}px`;
          }
        }
      });
    };
    
    // Update on load and resize
    updateSpineWidths();
    window.addEventListener('resize', updateSpineWidths);
    
    // Also update when images load
    tapes.forEach((tape) => {
      const img = tape.querySelector('.tape-spine-img');
      if (img) {
        img.addEventListener('load', updateSpineWidths);
      }
    });
    
    // Calculate CRT screen position based on frame image
    // This will need adjustment based on your actual CRT frame dimensions
    const crtFrame = container.querySelector('.crt-frame');
    const crtScreenContainer = container.querySelector('.crt-screen-container');
    
    if (crtFrame && crtScreenContainer) {
      // Initialize video after CRT frame loads and container has dimensions
      const initVideo = () => {
        // Adjust screen container to match frame dimensions
        const frameRect = crtFrame.getBoundingClientRect();
        crtScreenContainer.style.height = `${frameRect.height}px`;
        
        // NOW initialize video after container has dimensions
        const crtVideo = container.querySelector('#crt-video');
        if (crtVideo) {
          crtVideo.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;object-fit:fill;';
          crtVideo.src = randomVideo;
          crtVideo.load();
          crtVideo.play().catch(() => {});
        }
        if (crtStatic) {
          crtStatic.classList.add('hidden');
        }
        
        // Update spine widths after CRT loads (in case layout shifted)
        updateSpineWidths();
        
        // You may need to fine-tune these percentages based on your CRT image
        // The screen position should align with the transparent cutout in the frame
      };
      
      // Wait for image to load
      crtFrame.addEventListener('load', initVideo);
      
      // Handle case where image is already cached (fires immediately)
      if (crtFrame.complete) {
        // Image already loaded (cached), trigger manually
        initVideo();
      }
    }
  }, 0);
  
  return container;
}
