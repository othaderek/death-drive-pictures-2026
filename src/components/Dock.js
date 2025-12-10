// Bottom Dock Component - Poolsuite style

import { openWindow } from './Desktop.js';

export function createDock() {
  const dock = document.createElement('div');
  dock.className = 'dock';
  dock.id = 'dock';

  const dockItems = [
    { id: 'work', label: 'Our Work', icon: createWorkIcon() },
    { id: 'about', label: 'About Us', icon: createAboutIcon() },
    { id: 'contact', label: 'Contact', icon: createContactIcon() },
    { id: 'instagram', label: 'Instagram', icon: createInstagramIcon(), external: 'https://instagram.com' },
  ];

  dockItems.forEach(item => {
    const dockItem = document.createElement('div');
    dockItem.className = 'dock-item';
    dockItem.title = item.label;
    
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'dock-icon';
    iconWrapper.innerHTML = item.icon;
    
    const label = document.createElement('div');
    label.className = 'dock-label';
    label.textContent = item.label;
    
    dockItem.appendChild(iconWrapper);
    dockItem.appendChild(label);
    
    dockItem.addEventListener('click', () => {
      if (item.external) {
        window.open(item.external, '_blank');
      } else {
        openWindow(item.id);
      }
    });
    
    dock.appendChild(dockItem);
  });

  return dock;
}

function createWorkIcon() {
  return `
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <rect x="2" y="4" width="28" height="24" fill="#000000"/>
      <rect x="4" y="6" width="24" height="18" fill="#333333"/>
      <rect x="12" y="12" width="8" height="8" fill="#8ccae9"/>
      <rect x="14" y="14" width="2" height="4" fill="#ffffff"/>
      <rect x="16" y="14" width="2" height="4" fill="#ffffff"/>
      <rect x="4" y="26" width="24" height="2" fill="#666666"/>
    </svg>
  `;
}

function createAboutIcon() {
  return `
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <rect x="4" y="2" width="24" height="28" fill="#ffffff" stroke="#000000" stroke-width="1"/>
      <rect x="7" y="6" width="12" height="2" fill="#000000"/>
      <rect x="7" y="10" width="18" height="1" fill="#666666"/>
      <rect x="7" y="13" width="18" height="1" fill="#666666"/>
      <rect x="7" y="16" width="18" height="1" fill="#666666"/>
      <rect x="7" y="19" width="12" height="1" fill="#666666"/>
      <rect x="7" y="22" width="18" height="1" fill="#666666"/>
      <rect x="7" y="25" width="10" height="1" fill="#666666"/>
    </svg>
  `;
}

function createContactIcon() {
  return `
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <rect x="2" y="6" width="28" height="20" fill="#8ccae9" stroke="#000000" stroke-width="1"/>
      <rect x="2" y="6" width="28" height="4" fill="#6bb5d9"/>
      <rect x="6" y="22" width="8" height="2" fill="#ffffff"/>
    </svg>
  `;
}

function createInstagramIcon() {
  return `
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <rect x="2" y="2" width="28" height="28" fill="#833AB4" stroke="#000000" stroke-width="1"/>
      <rect x="2" y="2" width="7" height="7" fill="#FFDC80"/>
      <rect x="8" y="8" width="4" height="4" fill="#ffffff"/>
      <rect x="22" y="6" width="2" height="2" fill="#ffffff"/>
    </svg>
  `;
}

