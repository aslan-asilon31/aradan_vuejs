<script>
import img1 from '@/assets/frontend/img/product-md-01.png'
import img5 from '@/assets/frontend/img/product-sm-05.png'
import img6 from '@/assets/frontend/img/product-sm-06.png'
import likeSvg from '@/assets/frontend/img/ic-like-a.svg'
import starASvg from '@/assets/frontend/img/star-a.svg'
import starSvg from '@/assets/frontend/img/star.svg'

export default {
    name: 'Kid',
    data() {
    return {
      img1: img1,
      img5: img5,
      img6: img6,
      likeSvg: likeSvg,
      starASvg: starASvg,
      starSvg: starSvg,
    };
  },
}
</script>

<template>

    <h1 class="banner-title" >
        Kid's
    </h1>
    <!-- Start Product lsit -->
    <section class="product-list">
        <div class="row">
            <div class="col-sm-6 col-lg-4">
                <div
                class=" ar-max-product d-flex flex-column position-relative"
                >
                <div class="ar-max-product-img-outer bg-green">
                    <img
                    class="ar-max-product-img"
                    :src="img5"
                    alt=""
                    />
                </div>
                <div class="media-body">
                    <div class="d-flex justify-content-between">
                    <h5 class="ar-max-product-name text-uppercase mb-1">
                        Nike cosmic unity
                    </h5>
                    <a href="#" class="like-btn">
                        <img
                        :src="likeSvg"
                        alt=""
                        class="normal-img"
                        />
                        <img
                        :src="likeSvg"
                        alt=""
                        class="active-img"
                        />
                    </a>
                    </div>
                    <div class="product-rating d-flex">
                    <img :src="starASvg" alt="" />
                    <img :src="starASvg" alt="" />
                    <img :src="starASvg" alt="" />
                    <img :src="starSvg" alt="" />
                    </div>
                    <div class="d-flex justify-content-between">
                    <p
                        class="ar-max-product-price text-decoration-line-through"
                    >
                        $189
                    </p>
                    <p class="ar-max-product-price">$120</p>
                    </div>
                    <p class="ar-max-product-text">Discounted Price</p>
                    <a class="btn-link mb-0" href="#" title="Add to Cart"
                    >Add to Cart</a
                    >
                </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4">
                <div
                class="media ar-max-product d-flex flex-column position-relative"
                data-aos="zoom-out-left"
                >
                <div class="ar-max-product-img-outer bg-green">
                    <img
                    class="ar-max-product-img"
                    :src="img5"
                    alt=""
                    />
                </div>
                <div class="media-body">
                    <div class="d-flex justify-content-between">
                    <h5 class="ar-max-product-name text-uppercase mb-1">
                        Nike cosmic unity
                    </h5>
                    <a href="#" class="like-btn">
                        <img
                        :src="likeSvg"
                        alt=""
                        class="normal-img"
                        />
                        <img
                        :src="likeSvg"
                        alt=""
                        class="active-img"
                        />
                    </a>
                    </div>
                    <div class="product-rating d-flex">
                    <img :src="starASvg" alt="" />
                    <img :src="starASvg" alt="" />
                    <img :src="starASvg" alt="" />
                    <img :src="starSvg" alt="" />
                    </div>
                    <div class="d-flex justify-content-between">
                    <p
                        class="ar-max-product-price text-decoration-line-through"
                    >
                        $189
                    </p>
                    <p class="ar-max-product-price">$120</p>
                    </div>
                    <p class="ar-max-product-text">Discounted Price</p>
                    <a class="btn-link mb-0" href="#" title="Add to Cart"
                    >Add to Cart</a
                    >
                </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4">
                <div
                class="media ar-max-product d-flex flex-column position-relative"
                data-aos="zoom-out-left"
                >
                <div class="ar-max-product-img-outer bg-green">
                    <img
                    class="ar-max-product-img"
                    :src="img5"
                    alt=""
                    />
                </div>
                <div class="media-body">
                    <div class="d-flex justify-content-between">
                    <h5 class="ar-max-product-name text-uppercase mb-1">
                        Nike cosmic unity
                    </h5>
                    <a href="#" class="like-btn">
                        <img
                        :src="likeSvg"
                        alt=""
                        class="normal-img"
                        />
                        <img
                        :src="likeSvg"
                        alt=""
                        class="active-img"
                        />
                    </a>
                    </div>
                    <div class="product-rating d-flex">
                    <img :src="starASvg" alt="" />
                    <img :src="starASvg" alt="" />
                    <img :src="starASvg" alt="" />
                    <img :src="starSvg" alt="" />
                    </div>
                    <div class="d-flex justify-content-between">
                    <p
                        class="ar-max-product-price text-decoration-line-through"
                    >
                        $189
                    </p>
                    <p class="ar-max-product-price">$120</p>
                    </div>
                    <p class="ar-max-product-text">Discounted Price</p>
                    <a class="btn-link mb-0" href="#" title="Add to Cart"
                    >Add to Cart</a
                    >
                </div>
                </div>
            </div>

        </div>
    </section>
    <!-- End Product list -->

</template>