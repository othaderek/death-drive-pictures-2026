// Work Page - Poolsuite style

export function Work() {
  const container = document.createElement('div');
  container.className = 'work-page';
  
  const projects = [
    { title: 'The Frequency', year: '2024', type: 'Short Film', color: '#8ccae9' },
    { title: 'Static Memory', year: '2024', type: 'Documentary', color: '#98D8C8' },
    { title: 'Neon Requiem', year: '2023', type: 'Feature', color: '#a8d5f0' },
    { title: 'Analog Dreams', year: '2023', type: 'Music Video', color: '#c4e0f7' },
    { title: 'The Last Signal', year: '2022', type: 'Short Film', color: '#6bb5d9' },
    { title: 'Vapor Trail', year: '2022', type: 'Commercial', color: '#98D8C8' },
  ];
  
  container.innerHTML = `
    <div style="padding: 20px;">
      <div style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 1px solid #ddd;
      ">
        <div style="font-weight: 600; color: #333;">Archive</div>
        <div style="font-size: 12px; color: #888;">${projects.length} Projects</div>
      </div>
      
      <div id="projects-grid" style="
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
      ">
        ${projects.map((project, index) => `
          <div class="project-card" data-index="${index}" style="
            background: white;
            border-radius: 8px;
            overflow: hidden;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          ">
            <div style="
              height: 100px;
              background: ${project.color};
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
            ">
              <span style="font-size: 32px; opacity: 0.8;">▶</span>
              <div style="
                position: absolute;
                top: 8px;
                right: 8px;
                background: rgba(0,0,0,0.5);
                color: white;
                font-size: 10px;
                padding: 2px 6px;
                border-radius: 4px;
              ">${project.type}</div>
            </div>
            <div style="padding: 12px;">
              <div style="font-weight: 600; font-size: 14px; color: #333; margin-bottom: 4px;">
                ${project.title}
              </div>
              <div style="font-size: 12px; color: #888;">
                ${project.year}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      
      <div style="
        margin-top: 20px;
        padding: 15px;
        background: rgba(255,255,255,0.5);
        border-radius: 8px;
        text-align: center;
      ">
        <p style="font-size: 12px; color: #666; margin: 0;">
          Click any project to view details
        </p>
      </div>
    </div>
  `;
  
  // Add hover effects
  setTimeout(() => {
    const cards = container.querySelectorAll('.project-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-4px)';
        card.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
      });
      card.addEventListener('click', () => {
        const title = card.querySelector('div[style*="font-weight: 600"]').textContent.trim();
        alert(`Opening: ${title}\n\n[Media player would open here]`);
      });
    });
  }, 0);
  
  return container;
}
