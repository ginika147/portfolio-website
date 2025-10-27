// Add hover animation to skills
document.querySelectorAll('.skills-list li').forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    skill.style.transform = 'scale(1.05)';
    skill.style.transition = 'transform 0.3s ease';
    skill.style.backgroundColor = '#37474f';
  });
  skill.addEventListener('mouseleave', () => {
    skill.style.transform = 'scale(1)';
    skill.style.backgroundColor = '#263238';
  });
});

// Smooth scroll for navigation (if links are added)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
