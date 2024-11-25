document.addEventListener('scroll', function() {
    const reveals = document.querySelectorAll('.reveal');
  
    reveals.forEach(reveal => {
      const windowHeight = window.innerHeight;
      const revealTop = reveal.getBoundingClientRect().top;
      const revealPoint = 150; // Точка, когда элемент станет видимым (в пикселях от верха окна)
  
      if (revealTop < windowHeight - revealPoint) {
        reveal.classList.add('reveal_active');
      }
    });
  });
  
  