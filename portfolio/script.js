var typed = new Typed("#multi-text",{
    strings: ["Web-Dev Enthusiast .","Big-Data Enthusiast .","Late Night Coder ."],typeSpeed: 50,backSpeed: 50,loop:true
})

var typed = new Typed("#multi",{
  strings: ["Contact Me."],typeSpeed: 50,backSpeed: 50,loop:true
})


const sectionAll = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  sectionAll.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop-150;
    const sectionId = current.getAttribute('id');
    console.log(sectionId);
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('a[href*="' + sectionId + '"]')
        .classList.add('active');
    } else {
      document
        .querySelector('a[href*="' + sectionId + '"]')
        .classList.remove('active');
    }
  });
});



