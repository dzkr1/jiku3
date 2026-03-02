  
/*var im = <img src="Images/Hammer.png" alt=""></img>*/

var Photos =   [
  '<img src="../images/artworks/bunzoukei/Gallery/g-1.JPG" alt="">',
  '<img src="../images/artworks/bunzoukei/Gallery/g-2.JPG" alt="">',
  '<img src="../images/artworks/bunzoukei/Gallery/g-3.JPG" alt="">',
  '<img src="../images/artworks/bunzoukei/Gallery/g-4.JPG" alt="">',
  '<img src="../images/artworks/bunzoukei/Gallery/g-5.JPG" alt="">',
  '<img src="../images/artworks/bunzoukei/Gallery/g-6.JPG" alt="">',
  '<img src="../images/artworks/bunzoukei/Gallery/g-7.JPG" alt="">',
  '<img src="../images/artworks/bunzoukei/Gallery/g-8.JPG" alt="">',
  '<img src="../images/artworks/bunzoukei/Gallery/g-9.JPG" alt="">',
  '<img src="../images/artworks/bunzoukei/Gallery/g-10.JPG" alt="">'

]
//  Slider JS (can also be moved into work.js if you prefer)
    
const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.sliderArrow.left');
const rightArrow = document.querySelector('.sliderArrow.right');

let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

rightArrow.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide >= slides.length) currentSlide = 0;
    showSlide(currentSlide);
});

leftArrow.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    showSlide(currentSlide);
});

// videomodal

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("videoFrame");
  const closeBtn = document.getElementById("closeVideo");

  if (!modal || !frame || !closeBtn) return;

  function openVideo(videoId, start) {
  const startParam = start ? `&start=${start}` : "";
  frame.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1${startParam}`;
  modal.classList.add("is-open");
}

  function closeVideo() {
    modal.classList.remove("is-open");
    frame.src = "";
  }

  document.addEventListener("click", (e) => {
    const thumb = e.target.closest(".video-thumb");
    if (!thumb) return;

    openVideo(thumb.dataset.videoId, thumb.dataset.start);
  });

  closeBtn.addEventListener("click", closeVideo);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeVideo(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeVideo();
  });
});
