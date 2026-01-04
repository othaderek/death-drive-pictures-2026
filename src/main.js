import './style.css'
import './styles/windows.css'
import './styles/vhs.css'
import { initVHSEffects } from './effects/vhs.js'
import { createDesktop, openWindow } from './components/Desktop.js'
import { createNavbar } from './components/Navbar.js'
import wallpaperUrl from './assets/background/DDP wallpaper.jpeg?url'

// Initialize app immediately (no boot sequence for cleaner Poolsuite feel)
function initApp() {
  const app = document.querySelector('#app');
  
  // Initialize subtle effects
  initVHSEffects();
  
  // Create navbar
  const navbar = createNavbar();
  app.appendChild(navbar);
  
  // Create desktop
  const desktop = createDesktop();
  app.appendChild(desktop);
  
  // Add component styles
  const style = document.createElement('style');
  style.textContent = `
    /* Navbar styles */
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 28px;
      background: linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(240,240,240,0.95) 100%);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
      z-index: 10001;
      font-size: 13px;
    }
    
    .navbar-logo {
      display: flex;
      align-items: center;
    }
    
    .logo-text {
      font-family: var(--font-script);
      font-size: 18px;
      color: #333;
      letter-spacing: 0.5px;
      image-rendering: pixelated;
      image-rendering: -moz-crisp-edges;
      image-rendering: crisp-edges;
      -webkit-font-smoothing: none;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeSpeed;
    }
    
    .navbar-status {
      font-size: 12px;
      color: #666;
      image-rendering: pixelated;
      image-rendering: -moz-crisp-edges;
      image-rendering: crisp-edges;
      -webkit-font-smoothing: none;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeSpeed;
    }
    
    .navbar-clock {
      font-variant-numeric: tabular-nums;
      image-rendering: pixelated;
      image-rendering: -moz-crisp-edges;
      image-rendering: crisp-edges;
      -webkit-font-smoothing: none;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeSpeed;
      font-family: var(--font-mono);
      font-size: 18px;
      }
    
    /* Desktop styles */
    .desktop {
      position: fixed;
      top: 28px;
      left: 0;
      width: 100%;
      height: calc(100% - 28px);
      background: var(--bg-primary);
      background-image: url(${wallpaperUrl});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      overflow: visible;
    }
    
    /* Desktop icon styles */
    .desktop-icon {
      position: absolute;
      width: 80px;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: move;
      padding: 8px;
      user-select: none;
    }
    .desktop-icon.dragging {
      opacity: 0.7;
    }
    
    .desktop-icon-image {
      width: 48px;
      height: 48px;
      image-rendering: pixelated;
      image-rendering: -moz-crisp-edges;
      image-rendering: crisp-edges;
      margin-bottom: 4px;
    }
    
    .desktop-icon-image svg {
      width: 100%;
      height: 100%;
      image-rendering: pixelated;
      image-rendering: -moz-crisp-edges;
      image-rendering: crisp-edges;
    }
    
    .desktop-icon-label {
      font-size: 11px;
      color: #000000;
      text-align: center;
      text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
      font-family: monospace;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      max-width: 80px;
      word-wrap: break-word;
    }
    
    /* Window overrides for dark content */
    .window-content-inner {
      background: #f7c1ca;
    }
    
    /* Mobile responsive styles */
    @media (max-width: 768px) {
      .navbar {
        font-size: 11px;
        padding: 0 8px;
      }
      
      .logo-text {
        font-size: 14px;
        image-rendering: pixelated;
        image-rendering: -moz-crisp-edges;
        image-rendering: crisp-edges;
        -webkit-font-smoothing: none;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeSpeed;
      }
      
      .navbar-clock {
        font-size: 10px;
        image-rendering: pixelated;
        image-rendering: -moz-crisp-edges;
        image-rendering: crisp-edges;
        -webkit-font-smoothing: none;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeSpeed;
      }
      
      .desktop-icon {
        width: 60px;
        padding: 4px;
      }
      
      .desktop-icon-image {
        width: 36px;
        height: 36px;
      }
      
      .desktop-icon-label {
        font-size: 9px;
        max-width: 60px;
      }
      
      .window {
        min-width: 280px;
        max-width: calc(100vw - 20px);
        font-size: 12px;
      }
      
      .window-titlebar {
        height: 20px;
        padding: 0 6px;
      }
      
      .window-title {
        font-size: 11px;
      }
      
      .window-content-inner {
        padding: 12px;
      }
      
      .window-btn {
        width: 10px;
        height: 10px;
        font-size: 7px;
      }
    }
    
    @media (max-width: 480px) {
      .navbar {
        height: 24px;
        font-size: 10px;
      }
      
      .logo-text {
        font-size: 12px;
        image-rendering: pixelated;
        image-rendering: -moz-crisp-edges;
        image-rendering: crisp-edges;
        -webkit-font-smoothing: none;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeSpeed;
      }
      
      .desktop-icon {
        width: 50px;
      }
      
      .desktop-icon-image {
        width: 32px;
        height: 32px;
      }
      
      .desktop-icon-label {
        font-size: 8px;
        max-width: 50px;
      }
      
      .window {
        min-width: calc(100vw - 10px);
        width: calc(100vw - 10px) !important;
        max-width: calc(100vw - 10px);
        left: 5px !important;
      }
      
      .window-titlebar {
        height: 18px;
        padding: 0 4px;
      }
      
      .window-title {
        font-size: 10px;
      }
      
      .window-content-inner {
        padding: 10px;
      }
    }
  `;
  document.head.appendChild(style);

  // Secret message
  function secretMessage(){
    return "If you are seeing this message it means that you are a part of the inner circle. Look for clues. The truth is out there... Welcome. 333.";
  }
  console.info(secretMessage());
  
  // Open landing window on load
  setTimeout(() => {
    openWindow('about');
  }, 300);
}

// Start app
initApp();

// Handle routing (simple hash-based)
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.slice(1);
  if (hash) {
    openWindow(hash);
  }
});
