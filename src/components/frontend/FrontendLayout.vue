<script>
import { RouterLink, RouterView } from 'vue-router'
import StartHeader from './sub/StartHeader.vue'
import StartNavbar from './sub/StartNavbar.vue'
import FooterFrontend from './sub/FooterFrontend.vue'

export default {
    name: 'FrontendLayout',
    components: {
      StartHeader,
      StartNavbar,
      FooterFrontend,
    }
}
</script>

<template>
    <body>
        <div class="wrapper d-flex flex-column">
          <!-- Start Header -->
          <header class="header position-sticky">
            <!-- Start Header Top Part -->
            <StartHeader/>
            <!-- End Header Top Part -->

            <!-- Start Navbar Part -->
            <StartNavbar/>
            <!-- End Navbar Part -->
          </header>

          <main class="main-content flex-grow-1">
            <div class="container-xxl">
              <!-- Start main Banner -->
              <router-view></router-view>
              <!-- End Start main Banner -->
            </div>
          </main>


          <footer class="footer">
            <!-- Start Footer -->
            <FooterFrontend/>
            <!-- End Footer -->
          </footer>



        </div>
    </body>
</template>

<style>
@import '@/assets/frontend/css/app.css';

</style>
  