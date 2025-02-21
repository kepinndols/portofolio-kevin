// toggle menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('nav.link');
let spanActive = document.querySelector('.active-nav');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
  spanActive.classList.toggle('active');
};


// scroll event
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  section.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150; // Offset agar tidak terlalu cepat aktif
    let height = section.offsetHeight;
    let id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      // Hapus semua 'active'
      navLinks.forEach(link => link.classList.remove('active'));

      // Tambahkan 'active' di link yang sesuai
      let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });

  // Sticky header
  const header = document.querySelector('header');
  
  // Toggle class sticky jika kondisi terpenuhi
  header.classList.toggle('sticky', window.scrollY > 100 && window.innerWidth > 768);
  if(window.innerWidth < 768){
    header.classList.remove('sticky');
    header.classList.add('background');
  }else{
    header.classList.remove('background');}
});


window.addEventListener('scroll', () => {
  console.log('Halaman sedang digulir:', window.scrollY);
});

const btnTop = document.querySelector('a#top')

btnTop.addEventListener('click', (e) => {
  window.scrollTo({top:0, behavior:'smooth'})
  e.preventDefault();
})

// remove navbar slide when click links navbar
navLinks.forEach(link => link.addEventListener('click', () => {
  navbar.classList.remove('active');
  menuIcon.classList.remove('bx-x');
  spanActive.classList.remove('active');
}));

// remove navbar slide when click outside navbar
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
    spanActive.classList.remove('active');
  }
});

