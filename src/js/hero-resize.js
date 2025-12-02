document.addEventListener('DOMContentLoaded', () => {
  const heroCard = document.querySelector('.hero-card');
  
  if (!heroCard) return;
  
  const headline = heroCard.querySelector('h1');
  
  if (!headline) return;
  
  const observer = new ResizeObserver(entries => {
    for (let entry of entries) {
      const containerWidth = entry.contentRect.width;
      // Your magic formula to calculate font size
      const newFontSize = Math.max(16, containerWidth / 10); // e.g., 1/10th of width, with a min of 24px
      headline.style.fontSize = `${newFontSize}px`;
    }
  });
  
  observer.observe(heroCard);
});

