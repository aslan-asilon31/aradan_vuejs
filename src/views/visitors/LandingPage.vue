<script>
import banner from '@/assets/frontend/img/banner-img-lg-vue.png'
import svgPlay from '@/assets/frontend/img/ic-play.svg'
export default {
    name: 'StartBanner',
    data() {
    return {
      banner: banner, 
      svgPlay: svgPlay, 
    };
  },
}
</script>

<template>

    <section class="main-banner position-relative">
        <h1 class="banner-title" >
          AIR JORDAN
        </h1>
        <figure class="figure d-block main-banner-figure mb-0" data-aos="fade-up">
          <img
            class="figure-img img-fluid d-block mx-auto mb-10" style="" :src="banner"
            alt=""
          />
        </figure>
        <p class="banner-text" data-aos="fade-up" data-aos-delay="200">
          We know how large objects will act,
        </p>
        <a
          href="product.html"
          class="btn btn-primary rounded-0 text-uppercase"
          data-aos="flip-left"
        >
          <span class="text-white">Shop now</span>
        </a>
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-primary rounded-circle text-uppercase modal-btn"
          data-bs-toggle="modal"
          data-bs-target="#video-modal"
          data-aos="flip-left"
        >
          <img :src="svgPlay" alt="" />
        </button>
      </section>

</template>