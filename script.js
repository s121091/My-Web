const card = document.querySelector('.rounded - card');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      card.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
});

observer.observe(card);
