<script>
import { RouterLink, RouterView } from 'vue-router'
import logo from '@/assets/frontend/img/aradan_logo_40x40.png'
import user_blank_white from '@/assets/frontend/img/user_blank_white.png'

export default {
    name: 'StartNavbar',
    data() {
        return {
            logo: logo,
            user_blank_white: user_blank_white,
        };
    },
}
</script>

<template>
    <nav class="navbar navbar-expand-lg p-0">
        <div class="container-xxl ">
            <RouterLink to="/" class="navbar-brand" title="Aradan vuejs"><img
                    class="animate__animated animate__heartBeat animate__infinite	infinite animate__slow" :src="logo"
                    alt="" />
            </RouterLink>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header primary-gradient py-2">
                    <RouterLink to="/" class="navbar-brand" title="Aradan vuejs">
                        <img :src="logo" :style="{ width: '40px', height: '40px' }" alt="Aradan vuejs" />
                    </RouterLink>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="offcanvas-body p-0 ms-lg-auto">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <RouterLink class="nav-link active" aria-current="page" to="/men" title="Men">Men</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/women" class="nav-link" title="Women">Women</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/kid" class="nav-link" title="Kids">Kids</RouterLink>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" title="Customise">Customise</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" title="Sale">Sale</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" title="Shipping">Shipping</a>
                        </li>
                        <li class="nav-item d-lg-none">
                            <a class="nav-link" href="#" title="Guides">Guides</a>
                        </li>
                        <li class="nav-item d-lg-none">
                            <a class="nav-link" href="#" title="Terms of Sale">Terms of Sale</a>
                        </li>
                        <li class="nav-item d-lg-none">
                            <a class="nav-link" href="#" title="Terms of Use">Terms of Use</a>
                        </li>
                        <li class="nav-item d-lg-none">
                            <a class="nav-link" href="#" title="Privacy & Policy">Privacy & Policy</a>
                        </li>
                        <li class="nav-item d-lg-none">
                            <a class="nav-link" href="#" title="Login / Register">Login / Register</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="d-flex">
                <button class="btn btn-transparent">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.58342 1.66675C13.9584 1.66675 17.5001 5.20842 17.5001 9.58342C17.5001 13.9584 13.9584 17.5001 9.58342 17.5001C5.20842 17.5001 1.66675 13.9584 1.66675 9.58342C1.66675 6.50008 3.42508 3.83341 6.00008 2.52508"
                            stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18.3334 18.3334L16.6667 16.6667" stroke="white" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
                <button class="btn btn-transparent">
                    <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.5 6.39167V5.58334C7.5 3.70834 9.31 1.86667 11.56 1.69167C14.24 1.47501 16.5 3.23334 16.5 5.42501V6.57501"
                            stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M3.81007 13.8001L4.04007 15.3584C4.26007 16.9917 4.98007 18.3334 9.00007 18.3334H15.0001C19.0201 18.3334 19.7401 16.9917 19.9501 15.3584L20.7001 10.3584C20.9701 8.32508 20.2701 6.66675 16.0001 6.66675H8.00007C3.73007 6.66675 3.03007 8.32508 3.30007 10.3584"
                            stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M15.4955 9.99992H15.5045" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M8.49451 9.99992H8.50349" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <!-- <span class="badge">5</span> -->
                <span class="badge" style=""> 0 </span>
                <div class="btn-group">
                    <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <img :src="user_blank_white" alt="Profile Image" class="profile-image"
                            :style="{ width: '40px', height: '40px' }">
                    </button>
                    <ul class="dropdown-menu">
                        <!-- Dropdown menu items -->
                        <li><a class="dropdown-item" href="/login">Login</a></li>
                        <li><a class="dropdown-item" href="/register">Register</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>


<style></style>