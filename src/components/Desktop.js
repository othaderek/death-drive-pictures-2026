// Desktop Component - Poolsuite style

import { createWindow } from './Window.js';
import { Landing } from '../pages/Landing.js';
import { Work } from '../pages/Work.js';
import { Contact } from '../pages/Contact.js';
import { About } from '../pages/About.js';
import workIconUrl from '../assets/MONITOR2.ICO?url';
import contactIconUrl from '../assets/MAIL3.ICO?url';
import aboutIconUrl from '../assets/LISA.ICO?url';
import instagramIconUrl from '../assets/LIPS2.ICO?url';
import moon1Url from '../assets/MOON1.ICO?url';
import moon04Url from '../assets/MOON04.ICO?url';
import moon05Url from '../assets/MOON05.ICO?url';
import moon06Url from '../assets/MOON06.ICO?url';
import moon07Url from '../assets/MOON07.ICO?url';
import moon08Url from '../assets/MOON08.ICO?url';

let desktopWindows = [];
let iconDragState = null;

// Moon cursor animation
const moonIcons = [moon1Url, moon04Url, moon05Url, moon06Url, moon07Url, moon08Url];
let moonCursorInterval = null;
let moonCursorElement = null;

function startMoonCursor(e, iconElement) {
  // Create a custom cursor element that follows the mouse
  if (moonCursorElement) {
    stopMoonCursor(); // Clean up existing cursor
  }
  
  // Hide cursor on icon element and body before showing moon cursor
  if (iconElement) {
    iconElement.style.cursor = 'none';
  }
  document.body.style.cursor = 'none';
  
  moonCursorElement = document.createElement('div');
  moonCursorElement.className = 'moon-cursor';
  moonCursorElement.style.cssText = `
    position: fixed;
    width: 32px;
    height: 32px;
    pointer-events: none;
    z-index: 999999;
    left: ${e ? e.clientX - 16 : 0}px;
    top: ${e ? e.clientY - 16 : 0}px;
  `;
  
  // Create img element for moon icon
  const moonImg = document.createElement('img');
  moonImg.style.cssText = `
    width: 100%;
    height: 100%;
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
    object-fit: contain;
    display: block;
  `;
  moonImg.src = moonIcons[0];
  moonImg.alt = '';
  moonCursorElement.appendChild(moonImg);
  
  // Store img reference and icon element for cleanup
  moonCursorElement._moonImg = moonImg;
  moonCursorElement._iconElement = iconElement;
  
  // Get initial mouse position
  const initialX = e ? (e.clientX || e.touches?.[0]?.clientX || 0) : 0;
  const initialY = e ? (e.clientY || e.touches?.[0]?.clientY || 0) : 0;
  moonCursorElement.style.left = `${initialX - 16}px`;
  moonCursorElement.style.top = `${initialY - 16}px`;
  
  document.body.appendChild(moonCursorElement);
  
  let currentIndex = 0;
  
  // Update cursor position on mouse move
  function updateCursorPosition(event) {
    if (moonCursorElement) {
      const x = event.clientX || (event.touches && event.touches[0]?.clientX);
      const y = event.clientY || (event.touches && event.touches[0]?.clientY);
      if (x !== undefined && y !== undefined) {
        moonCursorElement.style.left = `${x - 16}px`;
        moonCursorElement.style.top = `${y - 16}px`;
      }
    }
  }
  
  document.addEventListener('mousemove', updateCursorPosition);
  document.addEventListener('touchmove', updateCursorPosition, { passive: true });
  
  // Cycle through moon icons
  moonCursorInterval = setInterval(() => {
    if (moonCursorElement && moonCursorElement._moonImg) {
      currentIndex = (currentIndex + 1) % moonIcons.length;
      moonCursorElement._moonImg.src = moonIcons[currentIndex];
    }
  }, 150);
  
  // Store cleanup function
  moonCursorElement._cleanup = () => {
    document.removeEventListener('mousemove', updateCursorPosition);
    document.removeEventListener('touchmove', updateCursorPosition);
  };
}

function stopMoonCursor() {
  if (moonCursorInterval) {
    clearInterval(moonCursorInterval);
    moonCursorInterval = null;
  }
  
  if (moonCursorElement) {
    if (moonCursorElement._cleanup) {
      moonCursorElement._cleanup();
    }
    
    // Restore cursor on icon element if it was stored
    if (moonCursorElement._iconElement) {
      moonCursorElement._iconElement.style.cursor = '';
    }
    
    moonCursorElement.remove();
    moonCursorElement = null;
  }
  
  // Restore default cursor on body
  document.body.style.cursor = '';
}

export function createDesktop() {
  const desktop = document.createElement('div');
  desktop.className = 'desktop';
  desktop.id = 'desktop';

  // Create desktop icons - responsive positioning
  const isMobile = window.innerWidth <= 768;
  const iconSpacing = isMobile ? 70 : 100;
  const startX = isMobile ? 20 : 50;
  const startY = isMobile ? 40 : 50;
  
  const iconData = [
    { id: 'work', label: 'our work', icon: createWorkIcon(), x: startX, y: startY },
    { id: 'about', label: 'about us', icon: createAboutIcon(), x: startX, y: startY + iconSpacing },
    { id: 'contact', label: 'contact', icon: createContactIcon(), x: startX, y: startY + (iconSpacing * 2) },
    { id: 'instagram', label: 'instagram', icon: createInstagramIcon(), x: startX, y: startY + (iconSpacing * 3), external: 'https://instagram.com' },
  ];

  iconData.forEach(({ id, label, icon, x, y, external }) => {
    const iconEl = createDesktopIcon(id, label, icon, x, y, external);
    desktop.appendChild(iconEl);
  });

  // Handle icon dragging (mouse and touch)
  function handleMove(e) {
    if (iconDragState) {
      const clientX = e.clientX || (e.touches && e.touches[0]?.clientX);
      const clientY = e.clientY || (e.touches && e.touches[0]?.clientY);
      
      if (clientX === undefined || clientY === undefined) return;
      
      const newX = clientX - iconDragState.startX;
      const newY = clientY - iconDragState.startY;
      
      const iconWidth = iconDragState.icon.offsetWidth || 80;
      const maxX = window.innerWidth - iconWidth;
      const maxY = window.innerHeight - 28 - 80;
      
      iconDragState.icon.style.left = `${Math.max(0, Math.min(newX, maxX))}px`;
      iconDragState.icon.style.top = `${Math.max(28, Math.min(newY, maxY))}px`;
    }
  }

  function handleEnd() {
    if (iconDragState) {
      iconDragState.icon.classList.remove('dragging');
      iconDragState = null;
    }
  }

  document.addEventListener('mousemove', handleMove);
  document.addEventListener('touchmove', handleMove, { passive: false });
  document.addEventListener('mouseup', handleEnd);
  document.addEventListener('touchend', handleEnd);

  return desktop;
}

function createDesktopIcon(id, label, iconSvg, x, y, external) {
  const iconEl = document.createElement('div');
  iconEl.className = 'desktop-icon';
  iconEl.style.left = `${x}px`;
  iconEl.style.top = `${y}px`;
  iconEl.dataset.iconId = id;

  const iconImage = document.createElement('div');
  iconImage.className = 'desktop-icon-image';
  iconImage.innerHTML = iconSvg;
  iconEl.appendChild(iconImage);

  const iconLabel = document.createElement('div');
  iconLabel.className = 'desktop-icon-label';
  iconLabel.textContent = label;
  iconEl.appendChild(iconLabel);

  // Double-click/tap to open window
  let lastClickTime = 0;
  
  function handleIconClick(e) {
    const now = Date.now();
    if (now - lastClickTime < 300) {
      // Double click/tap detected
      e.preventDefault();
      e.stopPropagation();
      
      // Start moon cursor animation with event position and icon element
      startMoonCursor(e, iconEl);
      
      // Open window after a short delay to show cursor animation
      setTimeout(() => {
        if (external) {
          window.open(external, '_blank');
        } else {
          openWindow(id);
        }
        // Stop cursor animation after window opens
        setTimeout(() => {
          stopMoonCursor();
        }, 500);
      }, 100);
      
      lastClickTime = 0;
    } else {
      lastClickTime = now;
    }
  }
  
  iconEl.addEventListener('click', handleIconClick);
  iconEl.addEventListener('touchend', handleIconClick);

  // Drag functionality (mouse and touch)
  function handleDragStart(e) {
    e.preventDefault();
    const clientX = e.clientX || (e.touches && e.touches[0]?.clientX);
    const clientY = e.clientY || (e.touches && e.touches[0]?.clientY);
    
    if (clientX === undefined || clientY === undefined) return;
    
    iconDragState = {
      icon: iconEl,
      startX: clientX - iconEl.offsetLeft,
      startY: clientY - iconEl.offsetTop
    };
    iconEl.classList.add('dragging');
  }
  
  iconEl.addEventListener('mousedown', handleDragStart);
  iconEl.addEventListener('touchstart', handleDragStart, { passive: false });

  return iconEl;
}

function createWorkIcon() {
  return `<img src="${workIconUrl}" alt="Our Work" style="width: 100%; height: 100%; object-fit: contain; image-rendering: pixelated; image-rendering: -moz-crisp-edges; image-rendering: crisp-edges;" />`;
}

function createAboutIcon() {
  return `<img src="${aboutIconUrl}" alt="About Us" style="width: 100%; height: 100%; object-fit: contain; image-rendering: pixelated; image-rendering: -moz-crisp-edges; image-rendering: crisp-edges;" />`;
}

function createContactIcon() {
  return `<img src="${contactIconUrl}" alt="Contact" style="width: 100%; height: 100%; object-fit: contain; image-rendering: pixelated; image-rendering: -moz-crisp-edges; image-rendering: crisp-edges;" />`;
}

function createInstagramIcon() {
  return `<img src="${instagramIconUrl}" alt="Instagram" style="width: 100%; height: 100%; object-fit: contain; image-rendering: pixelated; image-rendering: -moz-crisp-edges; image-rendering: crisp-edges;" />`;
}

export function openWindow(page) {
  // Check if window already exists
  const existing = desktopWindows.find(w => w.page === page);
  if (existing) {
    existing.window.style.display = 'flex';
    existing.window.classList.add('active');
    existing.window.style.zIndex = 10000;
    return;
  }

  // Responsive window sizes
  const isMobile = window.innerWidth <= 768;
  const isSmallMobile = window.innerWidth <= 480;
  
  let content, title, width = 600, height = 400;

  switch (page) {
    case 'landing':
      title = 'death drive pictures';
      content = Landing();
      width = isSmallMobile ? window.innerWidth - 20 : isMobile ? 500 : 650;
      height = isSmallMobile ? 400 : isMobile ? 400 : 450;
      break;
    case 'work':
      title = 'Our Work';
      content = Work();
      width = isSmallMobile ? window.innerWidth - 20 : isMobile ? 600 : 750;
      height = isSmallMobile ? 500 : isMobile ? 500 : 550;
      break;
    case 'contact':
      title = 'Get In Touch';
      content = Contact();
      width = isSmallMobile ? window.innerWidth - 20 : isMobile ? 400 : 450;
      height = isSmallMobile ? 350 : isMobile ? 350 : 380;
      break;
    case 'about':
      title = 'About Us';
      content = About();
      width = isSmallMobile ? window.innerWidth - 20 : isMobile ? 500 : 600;
      height = isSmallMobile ? 450 : isMobile ? 450 : 480;
      break;
    default:
      return;
  }

  // Staggered positioning for each window type
  // Desktop is below navbar (28px)
  const desktopHeight = window.innerHeight - 28;
  const desktopWidth = window.innerWidth;
  
  // Define staggered positions for each window type
  const positionMap = {
    'landing': { offsetX: 0.65, offsetY: 0.1 },      // Right side, slightly up
    'work': { offsetX: 0.25, offsetY: 0.2 },          // Left-center, more down
    'contact': { offsetX: 0.5, offsetY: 0.15 },       // Center-right, slightly up
    'about': { offsetX: 0.35, offsetY: 0.3 },         // Center-left, more down
  };
  
  const position = positionMap[page] || { offsetX: 0.4, offsetY: 0.2 };
  
  // Calculate position based on offsets
  const x = Math.max(20, (desktopWidth * position.offsetX) - (width * 0.5));
  const y = Math.max(40, Math.min(
    (desktopHeight * position.offsetY) + 28,
    desktopHeight - height + 28
  ));
  
  // Add slight random offset to prevent perfect alignment (but keep staggered pattern)
  const randomOffsetX = (Math.random() * 40) - 20; // -20 to +20
  const randomOffsetY = (Math.random() * 30) - 15; // -15 to +15

  const windowEl = createWindow(title, content, {
    width,
    height,
    x: x + randomOffsetX,
    y: y + randomOffsetY,
    className: `window-${page}`,
    onClose: () => {
      desktopWindows = desktopWindows.filter(w => w.page !== page);
    }
  });

  desktopWindows.push({ page, window: windowEl });
  document.getElementById('desktop').appendChild(windowEl);
  
  // Make it active
  windowEl.classList.add('active');
}

export function closeAllWindows() {
  desktopWindows.forEach(w => w.window.remove());
  desktopWindows = [];
}
