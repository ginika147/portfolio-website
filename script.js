// ==========================
// Toggle Experience Section
// ==========================
function toggleExperience() {
  const content = document.getElementById("experience-content");
  const icon = document.getElementById("toggle-icon");

  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    icon.textContent = "[-]";
  } else {
    content.classList.add("hidden");
    icon.textContent = "[+]";
  }
}

// ==========================
// Toggle Certificate Image
// ==========================
function toggleCertificate() {
  const cert = document.getElementById("certificate-display");
  cert.classList.toggle("hidden");
}

// ==========================
// Toggle Contact Section
// ==========================
function toggleContact() {
  const contact = document.getElementById("contact");
  contact.classList.toggle("hidden");
}

// ==========================
// Hover Animation for Skills
// ==========================
document.querySelectorAll('.skill-tags span').forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    skill.style.transform = 'scale(1.05)';
    skill.style.transition = 'transform 0.3s ease, background-color 0.3s ease';
    skill.style.backgroundColor = '#37474f';
  });
  skill.addEventListener('mouseleave', () => {
    skill.style.transform = 'scale(1)';
    skill.style.backgroundColor = '#2a2a2a';
  });
});

// ==========================
// Smooth Scroll for Anchors
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
