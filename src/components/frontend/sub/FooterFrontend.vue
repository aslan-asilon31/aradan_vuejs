<script>
import logo from '@/assets/frontend/img/aradan_logo.png'
import svgFacebook from '@/assets/frontend/img/ic-facebook.svg'
import svgInstagram from '@/assets/frontend/img/ic-instagram.svg'
import svgTwitter from '@/assets/frontend/img/ic-twitter.svg'
import svgLinkedin from '@/assets/frontend/img/ic-linkedin.svg'
import svgCheck from '@/assets/frontend/img/ic-check.svg'

export default {
    name: 'FooterFrontend',
    data() {
    return {
      logo: logo,
      svgFacebook: svgFacebook,
      svgInstagram: svgInstagram,
      svgTwitter: svgTwitter,
      svgLinkedin: svgLinkedin,
      svgCheck: svgCheck,
    };
  },
}
</script>

<template>
        <!-- Start Footer Top Part -->
        <div class="footer-top-part py-3">
            <div class="container-xxl">
                <ul class="footer-top-part-listing">
                <li
                    data-aos="fade-right"
                    data-aos-anchor-placement="center-bottom"
                >
                    <img :src="svgCheck" alt="" />Duties and Taxes
                    Guaranteed
                </li>
                <li
                    data-aos="fade-right"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="200"
                >
                    <img :src="svgCheck" alt="" />Free Express
                    Shipping
                </li>
                <li
                    data-aos="fade-right"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="400"
                >
                    <img :src="svgCheck" alt="" />Customer Love
                </li>
                <li
                    data-aos="fade-right"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="400"
                >
                    <img :src="svgCheck" alt="" />Easy Returns
                </li>
                </ul>
            </div>
        </div>
        <!-- End Footer Top Part -->

        <!-- Start Footer Bottom Part -->
        <div class="footer-bottom-part primary-gradient">
            <div class="container-xxl">
                <div class="row justify-content-between">
                <div class="col-lg-4 mb-5 mb-lg-0">
                    <div class="footer-logo-outer mb-3 mb-lg-5">
                    <a
                        href="#"
                        class="footer-logo"
                        title="Aradan Template by AppSeed"
                        data-aos="zoom-in-left"
                    >
                        <img
                        :src="logo"
                        alt="Aradan"
                        />
                    </a>
                    </div>
                    <h5 class="mb-3 mb-lg-5" data-aos="fade-up">
                    Complete your style with awesome clothes from us.
                    </h5>
                    <ul class="social-icons">
                    <li
                        data-aos="zoom-in-up"
                        data-aos-anchor-placement="center-bottom"
                    >
                        <a href="#" title="Facebook"
                        ><img :src="svgFacebook" alt="Facebook"
                        /></a>
                    </li>
                    <li
                        data-aos="zoom-in-up"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-delay="100"
                    >
                        <a href="#" title="Instagram"
                        ><img :src="svgInstagram" alt="Instagram"
                        /></a>
                    </li>
                    <li
                        data-aos="zoom-in-up"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-delay="200"
                    >
                        <a href="#" title="Twitter"
                        ><img :src="svgTwitter" alt="Twitter"
                        /></a>
                    </li>
                    <li
                        data-aos="zoom-in-up"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-delay="300"
                    >
                        <a href="#" title="LinkedIn"
                        ><img :src="svgLinkedin" alt="LinkedIn"
                        /></a>
                    </li>
                    </ul>
                </div>
                <div class="col-lg-8 col-xl-6">
                    <div class="row justify-content-between">
                    <div
                        class="col-6 col-sm-auto mb-5 mb-md-0"
                        data-aos="fade-left"
                    >
                        <h5 class="mb-3 mb-md-4">Company</h5>
                        <ul class="footer-links">
                        <li>
                            <a href="#" title="About">About</a>
                        </li>
                        <li>
                            <a href="#" title="Contact us">Contact us</a>
                        </li>
                        <li>
                            <a href="#" title="Support">Support</a>
                        </li>
                        <li>
                            <a href="#" title="Careers">Careers</a>
                        </li>
                        </ul>
                    </div>
                    <div
                        class="col-6 col-sm-auto mb-5 mb-md-0"
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >
                        <h5 class="mb-3 mb-md-4">Quick Link</h5>
                        <ul class="footer-links">
                        <li>
                            <a href="#" title="Share Location">Share Location</a>
                        </li>
                        <li>
                            <a href="#" title="Orders Tracking">Orders Tracking</a>
                        </li>
                        <li>
                            <a href="#" title="Size Guide">Size Guide</a>
                        </li>
                        <li>
                            <a href="#" title="FAQs">FAQs</a>
                        </li>
                        </ul>
                    </div>
                    <div
                        class="col-6 col-sm-auto mb-5 mb-md-0"
                        data-aos="fade-left"
                        data-aos-delay="400"
                    >
                        <h5 class="mb-3 mb-md-4">Legal</h5>
                        <ul class="footer-links">
                        <li>
                            <a href="#" title="Terms & conditions"
                            >Terms & conditions</a
                            >
                        </li>
                        <li>
                            <a href="#" title="Privacy Policy">Privacy Policy</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <!-- End Footer Bottom Part -->
</template>

<style>
@import '@/assets/frontend/css/app.css';


</style>
