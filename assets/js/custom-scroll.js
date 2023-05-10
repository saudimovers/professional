(function() {
  var scrollLink = document.querySelector('.scroll-link');
  scrollLink.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(scrollLink.getAttribute('href'));
    if (target) {
      target.scrollIntoView({behavior: 'smooth'});
      console.log("ana yas6a ♥");
    } else {
      window.location.href = scrollLink.getAttribute('href')+'.php';
    }
  });
})();
