/*!
 * Copyright AppSeed
 * Licensed under MIT
 */

"use strict";

// Add code HERE

// Three Item Carousel
var swiper = new Swiper(".three-item-carousel", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },

  // If we need pagination
  pagination: {
    el: ".three-item-carousel .swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Auto Width Slider
var swiper = new Swiper(".auto-width-slider", {
  slidesPerView: "auto",
  spaceBetween: 24,
  loop: true,
});

// Vertical Slider
var swiper = new Swiper(".vertical-slider", {
  speed: 600,
  parallax: true,
  direction: "vertical",
  pagination: {
    el: ".vertical-slider .swiper-pagination",
    clickable: true,
  },
});

// One Item Slider
var swiper = new Swiper(".one-item-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// One Item Slider
var swiper = new Swiper(".navigation-slider", {
  loop: true,
  speed: 5000,
  slidesPerView:'auto',
  allowTouchMove: false,
  disableOnInteraction: true,
  autoplay: {
    delay: 2500,
    reverseDirection: true,
    disableOnInteraction: false,
  },
});

// Slider with thumbnail
var swiper = new Swiper(".slider-with-thumbnail .thumb-slider", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".slider-with-thumbnail .main-slider", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// Numbar of item plus minus
var numbarInput = document.getElementById("quantity");
function minusNo() {
  event.preventDefault();
  if (numbarInput.value > 0) numbarInput.value = Number(numbarInput.value) - 1;
}
function plusNo() {
  event.preventDefault();
  if (numbarInput.value < 10) numbarInput.value = Number(numbarInput.value) + 1;
}

// Like btn click event
var elements = document.getElementsByClassName("like-btn");
var myFunction = function () {
  event.preventDefault();
  event.currentTarget.classList.toggle("liked");
};
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", myFunction, false);
}

// Animate
AOS.init({
  disable: "mobile",
  delay: 150,
  duration: 700,
  once: true,
});

// Embeded Video
var player;
// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  player = new YT.Player("video-player", {
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  document.getElementById("video-play-btn").onclick = function (event) {
    event.preventDefault();
    event.target.closest(".embedded-video-outer").classList.add("video-played");
    player.playVideo();
  };

  document.getElementById("video-close-btn").onclick = function (event) {
    event.preventDefault();
    event.target
      .closest(".embedded-video-outer")
      .classList.remove("video-played");
    player.pauseVideo();
  };
}

// Inject YouTube API script
var tag = document.createElement("script");
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
