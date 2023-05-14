// --------------- for All ---------------
// const forbiddenKeys = ['c', 'u', 's', 'p'];
// const forbiddenKeyCodes = [123, 73, 74];

// document.addEventListener("contextmenu", e => {
// 	e.preventDefault();
// }, false);

// document.addEventListener("keydown", e => {
// 	if (e.ctrlkey || forbiddenKeys.includes(e.key) || forbiddenKeyCodes.includes(e.keyCode)) {
// 		e.stopPropagation();
// 		e.preventDefault();
// 	};
// });

// --------------- header ---------------
const header = document.querySelector(".header");
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const medsos = document.querySelector('.medsos');
const float = document.querySelector('.float');

window.addEventListener('click', e => {
  if ( e.target == menu) {
    nav.classList.toggle('aktif');
    menu.classList.toggle('fa-times');
    if ( document.scrollingElement.scrollTop < 80 ) {
      if ( nav.classList.contains('aktif') ) {
        header.classList.add('aktif');
      }
      else{
        header.classList.remove('aktif');
      }
    }
    if( document.scrollingElement.scrollTop > 80 ){
      header.classList.add('aktif');
    }
  }
  else if( !(e.target == menu) && document.scrollingElement.scrollTop < 80 ){
    nav.classList.remove('aktif');
    menu.classList.remove('fa-times');
    header.classList.remove('aktif');
  }
  else if( !(e.target == menu) && document.scrollingElement.scrollTop > 80 ){
    nav.classList.remove('aktif');
    menu.classList.remove('fa-times');
  }
});

window.addEventListener('scroll', (e) => {
  // console.log(document.scrollingElement.scrollTop);
  nav.classList.remove('aktif');
  menu.classList.remove('fa-times');
  if ( document.scrollingElement.scrollTop < 80 ) {
    header.classList.remove('aktif'); 
  }
  if ( document.scrollingElement.scrollTop > 80 ) {
    header.classList.add('aktif');
  }
  if ( document.scrollingElement.scrollTop > 600 ) {
    float.classList.add('aktif');
  }
  if ( document.scrollingElement.scrollTop < 600 ) {
    float.classList.remove('aktif');
  }
});

window.addEventListener('load', () => {
  if (document.scrollingElement.scrollTop > 80) {
    header.classList.add('aktif');
  }
});

// --------------- home ---------------
let indeks = 0;
let teks = ['Company Profile', 'Landing Page', 'Online Store', 'Portfolio', 'Dan Lainnya.'];
let currentTeksIndex = 0;
let isDeleting = false;
let timeout = 100;

function typing() {
  let currentTeks = teks[currentTeksIndex];
  if (!isDeleting && indeks < currentTeks.length) {
    document.querySelector(".animasi").innerHTML += currentTeks.charAt(indeks);
    indeks++;
  }
  else if (isDeleting && indeks >= 0) {
    document.querySelector(".animasi").innerHTML = currentTeks.substring(0, indeks);
    indeks--;
  }
  else {
    isDeleting = !isDeleting;
    if (isDeleting) {
      timeout = 100; //30
    } else {
      currentTeksIndex = (currentTeksIndex + 1) % teks.length;
      indeks = 0;
      timeout = 100;
    }
  }
  setTimeout(typing, timeout);
}
typing();

// *************** copyright ***************
let date = new Date();
document.querySelector('.tahun').innerHTML = date.getFullYear();

// *************** popup ***************
const popup = document.querySelector('.popup');
const close = document.querySelector('.popup .container .close');
const thumb = document.querySelector('.popup .container .box .item .thumb');
const judul = document.querySelector('.popup .container .box .item .judul');
const gambar = document.querySelector('.popup .container .box .gambar');
const catatan = document.querySelector('.popup .container .box .catatan');
const ewallet = document.querySelectorAll('.ewallet');

ewallet.forEach(wallet => {
  wallet.addEventListener('click', e => {
    let title = e.target.getAttribute('title');
    popup.classList.add('aktif');
    thumb.src = e.target.src;
    judul.innerHTML = `${title}`;
    gambar.src = e.target.nextElementSibling.getAttribute('src');
    catatan.innerHTML = `Scan barcode diatas untuk pembayaran.`;
  });
});

close.addEventListener('click', e => {
  e.target.parentElement.parentElement.classList.remove('aktif');
});