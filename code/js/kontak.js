// *************** kirim email ***************
const btn = document.querySelector('.form .btn');
const form = document.querySelector('.form');
const loaderWrapper = document.querySelector(".loader-wrapper");
const loader = document.querySelector(".loader-wrapper .loader");
const notifSukses = document.querySelector(".loader-wrapper .notif.sukses");
const notifGagal = document.querySelector(".loader-wrapper .notif.gagal");
const closePopup = document.querySelector(".loader-wrapper .notif .close");

form.addEventListener('submit', function(event) {
  event.preventDefault();
  loaderWrapper.classList.add('aktif');

  const serviceID = 'default_service';
  const templateID = 'template_bn0lojy';

  emailjs.sendForm(serviceID, templateID, this)
  .then(() => {
    loader.style.display = 'none';
    notifSukses.style.display = 'flex';
    closePopup.addEventListener('click', () => {
      closePopup.parentElement.parentElement.remove('aktif');
    });
    form.reset();
  },
  (err) => {
    loader.style.display = 'none';
    notifGagal.style.display = 'flex';
    closePopup.addEventListener('click', () => {
      closePopup.parentElement.parentElement.remove('aktif');
    });
    form.reset();
  });
});