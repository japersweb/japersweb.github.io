// --------------- counter ---------------
const statistik = document.querySelectorAll('.statistik');
statistik.forEach( stk => {
    const pemrosesan = () => {
        const bertambah = stk.innerText++;
        const target = stk.getAttribute('data-target');
        const kecepatan = 1000;
        const rumus = target / kecepatan;
        if(bertambah < target) {
            //Math.ceil() membulatkan angka ke bilangan bulat terdekat.
            stk.innerText = Math.ceil(bertambah + rumus);
            setTimeout(pemrosesan, 100);
        }
        else {
            stk.innerText = target;
        }
    }
    window.addEventListener("scroll", () => {
        const tinggiLayar = window.innerHeight;
        const jarakAtasElemen = stk.getBoundingClientRect().top;
        const ukuranScroll = 100;
        if (jarakAtasElemen < tinggiLayar - ukuranScroll) {
            pemrosesan();
        }
    })
});

// --------------- testi ---------------
let current = 1;
const mySlides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".dot");

function showSlides() {
    if (current > mySlides.length) {
        current = 1;
    }
    if (current < 1) {
        current = mySlides.length;
    }
    mySlides.forEach(m => {
        m.style.display = "none";
    });
    mySlides[current - 1].style.display = "block";

    dots.forEach(dot => {
        dot.classList.remove("active");
    });
    dots[current - 1].classList.add("active");
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", function() {
        if (index + 1 > current) {
            mySlides.forEach(m => {
                m.classList.add("BounceInRight");
                m.classList.remove("BounceInLeft");
            });
        } else if (index + 1 < current) {
            mySlides.forEach(m => {
                m.classList.add("BounceInLeft");
                m.classList.remove("BounceInRight");
            });
        }
        current = index + 1;
        showSlides();
    });
});

const autoPlay = n => {
  current += 1;
  mySlides.forEach(m => {
    m.classList.add('BounceInRight');
    m.classList.remove('BounceInLeft');
  });
  showSlides();
};
setInterval(autoPlay, 5000);

const slideNext = document.querySelector(".next").addEventListener("click", function(n) {
    current += 1;
    mySlides.forEach((m) => {
        m.classList.add("BounceInRight");
        m.classList.remove("BounceInLeft");
    });
    showSlides();
});
const slidePrev = document.querySelector(".prev").addEventListener("click", function(n) {
    current -= 1;
    mySlides.forEach((m) => {
        m.classList.add("BounceInLeft");
        m.classList.remove("BounceInRight");
    });
    showSlides();
});

const slideshow = document.querySelector(".slideshow");
let startX = null;
let startY = null;

slideshow.addEventListener("mousedown", handleTouchStart);
slideshow.addEventListener("mousemove", handleTouchMove);
slideshow.addEventListener("mouseup", handleTouchEnd);
slideshow.addEventListener("mouseleave", handleTouchEnd);

slideshow.addEventListener("touchstart", handleTouchStart, { passive: true });
slideshow.addEventListener("touchmove", handleTouchMove, { passive: true });
slideshow.addEventListener("touchend", handleTouchEnd, { passive: true });
slideshow.addEventListener("touchcancel", handleTouchEnd, { passive: true });

function handleTouchStart(event) {
    startX = event.pageX || event.touches[0].pageX;
    startY = event.pageY || event.touches[0].pageY;
}
function handleTouchMove(event) {
    if (startX === null || startY === null) {
        return;
    }
    const currentX = event.pageX || event.touches[0].pageX;
    const currentY = event.pageY || event.touches[0].pageY;
    const diffX = startX - currentX;
    const diffY = startY - currentY;
    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) {
            current += 1;
            mySlides.forEach((m) => {
                m.classList.add("BounceInRight");
                m.classList.remove("BounceInLeft");
            });
            showSlides();
        } else {
            current -= 1;
            mySlides.forEach((m) => {
                m.classList.add("BounceInLeft");
                m.classList.remove("BounceInRight");
            });
            showSlides();
        }
    }
    startX = null;
    startY = null;
}
function handleTouchEnd(event) {
    startX = null;
    startY = null;
}
showSlides();