<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    name: 'StartHeader',
  }
</script>

<template>
    <div class="header-top-part py-2 d-none d-lg-block">
        <div class="container-xxl">
        <div
            class="row align-items-center justify-content-center justify-content-lg-between"
        >
            <div class="col-auto">
            <ul class="sub-navigation">
                <li><a href="#" title="Guides">Guides</a></li>
                <li><a href="#" title="Terms of Sale">Terms of Sale</a></li>
                <li><a href="#" title="Terms of Use">Terms of Use</a></li>
                <li>
                <a href="#" title="Privacy & Policy">Privacy & Policy</a>
                </li>
            </ul>
            </div>
            <div class="col-auto">
            <h6>Complimentary Standard Shipping Indonesia Wide</h6>
            </div>
            <div class="col-auto">
            <ul class="sub-navigation">
                <li>
                <RouterLink  to="/login" title="Login / Register">Login / Register</RouterLink>
                </li>
            </ul>
            </div>
        </div>
        </div>
    </div>
</template>