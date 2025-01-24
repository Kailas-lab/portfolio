

AOS.init({
    duration: 1200, // Animation duration in milliseconds
    once: true, // Run animation only once
    offset: 50, // Offset from the top of the viewport in px
  });

  // Smooth scrolling for navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  // Reveal animations
  const sections = document.querySelectorAll('.section');
  const revealSection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  };
  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.2,
  });
  sections.forEach(section => {
    sectionObserver.observe(section);
  });
  