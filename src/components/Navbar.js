// Top Navbar Component - Poolsuite style

export function createNavbar() {
  const navbar = document.createElement('div');
  navbar.className = 'navbar';
  navbar.id = 'navbar';

  // Left side - Logo
  const logo = document.createElement('div');
  logo.className = 'navbar-logo';
  logo.innerHTML = `<span class="logo-text">death drive pictures</span>`;
  navbar.appendChild(logo);

  // Right side - Status
  const status = document.createElement('div');
  status.className = 'navbar-status';
  
  const clock = document.createElement('span');
  clock.className = 'navbar-clock';
  clock.id = 'navbar-clock';
  updateClock(clock);
  setInterval(() => updateClock(clock), 1000);
  
  status.appendChild(clock);
  navbar.appendChild(status);

  return navbar;
}

function updateClock(clock) {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const day = now.toLocaleDateString('en-US', { weekday: 'short' });
  const date = now.getDate();
  
  clock.textContent = `${hours}:${minutes} - ${day} ${date}`;
}

