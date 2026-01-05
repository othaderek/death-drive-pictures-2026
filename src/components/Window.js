// Draggable Window Component - Mac OS 9 Style

let windowZIndex = 1000;
let dragState = null;

export function createWindow(title, content, options = {}) {
  const {
    width = 600,
    height = 400,
    x = 100,
    y = 100,
    onClose = null,
    className = '',
    disableMaximize = false
  } = options;

  const windowEl = document.createElement('div');
  windowEl.className = `window ${className}`;
  windowEl.style.width = `${width}px`;
  windowEl.style.height = `${height}px`;
  windowEl.style.left = `${x}px`;
  windowEl.style.top = `${y}px`;
  windowEl.dataset.windowId = `window-${Date.now()}`;

  const titlebar = document.createElement('div');
  titlebar.className = 'window-titlebar';
  
  // Mac-style controls (close, minimize, maximize) on the LEFT
  const controls = document.createElement('div');
  controls.className = 'window-controls';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'window-btn close';
  closeBtn.title = 'Close';
  closeBtn.innerHTML = '×';
  closeBtn.onclick = (e) => {
    e.stopPropagation();
    if (onClose) onClose();
    windowEl.remove();
  };

  const minimizeBtn = document.createElement('button');
  minimizeBtn.className = 'window-btn minimize';
  minimizeBtn.title = 'Minimize';
  minimizeBtn.innerHTML = '−';
  minimizeBtn.onclick = (e) => {
    e.stopPropagation();
    windowEl.style.display = 'none';
  };

  controls.appendChild(closeBtn);
  controls.appendChild(minimizeBtn);
  
  // Only add maximize button if not disabled
  if (!disableMaximize) {
    const maximizeBtn = document.createElement('button');
    maximizeBtn.className = 'window-btn maximize';
    maximizeBtn.title = 'Maximize';
    maximizeBtn.innerHTML = '+';
    maximizeBtn.onclick = (e) => {
      e.stopPropagation();
      if (windowEl.dataset.maximized === 'true') {
        windowEl.style.width = `${width}px`;
        windowEl.style.height = `${height}px`;
        windowEl.style.left = `${x}px`;
        windowEl.style.top = `${y}px`;
        windowEl.dataset.maximized = 'false';
      } else {
        windowEl.style.width = 'calc(100vw - 40px)';
        windowEl.style.height = 'calc(100vh - 140px)';
        windowEl.style.left = '20px';
        windowEl.style.top = '40px';
        windowEl.dataset.maximized = 'true';
      }
    };
    controls.appendChild(maximizeBtn);
  }
  titlebar.appendChild(controls);

  const titleSpan = document.createElement('span');
  titleSpan.className = 'window-title';
  titleSpan.textContent = title;
  titlebar.appendChild(titleSpan);

  const contentDiv = document.createElement('div');
  contentDiv.className = 'window-content';
  
  const contentInner = document.createElement('div');
  contentInner.className = 'window-content-inner';
  
  if (typeof content === 'string') {
    contentInner.innerHTML = content;
  } else {
    contentInner.appendChild(content);
  }
  
  contentDiv.appendChild(contentInner);

  windowEl.appendChild(titlebar);
  windowEl.appendChild(contentDiv);

  // Make window active on click
  windowEl.addEventListener('mousedown', () => {
    makeWindowActive(windowEl);
  });

  // Drag functionality
  titlebar.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('window-btn')) return;
    e.preventDefault();
    dragState = {
      window: windowEl,
      startX: e.clientX - windowEl.offsetLeft,
      startY: e.clientY - windowEl.offsetTop
    };
    makeWindowActive(windowEl);
  });

  return windowEl;
}

// Global mouse handlers
document.addEventListener('mousemove', (e) => {
  if (dragState) {
    const newX = e.clientX - dragState.startX;
    const newY = e.clientY - dragState.startY;
    
    // Keep window within bounds
    const maxX = window.innerWidth - dragState.window.offsetWidth;
    const maxY = window.innerHeight - dragState.window.offsetHeight - 80;
    
    dragState.window.style.left = `${Math.max(0, Math.min(newX, maxX))}px`;
    dragState.window.style.top = `${Math.max(28, Math.min(newY, maxY))}px`;
  }
});

document.addEventListener('mouseup', () => {
  dragState = null;
});

function makeWindowActive(windowEl) {
  document.querySelectorAll('.window').forEach(w => {
    w.classList.remove('active');
  });
  windowEl.classList.add('active');
  windowEl.style.zIndex = windowZIndex++;
}
