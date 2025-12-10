// Subtle effects for Poolsuite-style aesthetic

export function initVHSEffects() {
  // Create subtle texture overlay
  const texture = document.createElement('div');
  texture.className = 'texture-overlay';
  document.body.appendChild(texture);
}

export function addVHSTracking(element) {
  element.classList.add('vhs-tracking');
}

export function addVHSStatic(element) {
  element.classList.add('vhs-static');
}
