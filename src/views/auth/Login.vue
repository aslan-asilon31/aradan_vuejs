<script>
import { RouterLink, RouterView } from 'vue-router'
import ic_facebook from '@/assets/frontend/img/ic-facebook.svg'
import ic_github from '@/assets/frontend/img/ic-github.svg'
import ic_google from '@/assets/frontend/img/ic-google.svg'

export default {
    name: 'StartNavbar',
    data() {
        return {
            ic_facebook: ic_facebook,
            ic_github: ic_github,
            ic_google: ic_google,
        };
    },
}
</script>

<template>
    <!-- Start Form Block -->
    <section class="form-block">
    <div class="container-xxl">
        <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="form-outer">
            <!-- Start Form Heading -->
            <!-- Start Form Heading -->
            <div class="form-heading bg-primary text-white text-center">
                <h5 class="mb-3">Sign in</h5>
                <ul class="sign-in-using-list d-flex justify-content-center">
                <li>
                    <a href="#" title="Facebook">
                    <img :src="ic_facebook" alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="#" title="Github">
                    <img :src="ic_github" alt="Github" />
                    </a>
                </li>
                <li>
                    <a href="#" title="Google">
                    <img :src="ic_google" alt="Google" />
                    </a>
                </li>
                </ul>
            </div>
            <!-- Emd Form Heading -->
            <div class="mb-4">
                <input type="text" class="form-control" placeholder="Email">
            </div>  
            <div class="mb-4">
                <input type="password" class="form-control" placeholder="Password">
            </div>  

            <div class="form-check form-switch mb-4">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked">
                <label class="form-check-label" for="flexSwitchCheckChecked">Remember Me</label>
            </div>

            <div class="mb-4">
                <button class="btn btn-primary w-100">Sign In</button>
            </div>  
            <div class="text-center mb-4">
                <a href="sign-up.html" class="sign-up-btn">Don't have an account?</a>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
    <!-- End Form Block -->
</template>