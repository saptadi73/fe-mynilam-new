<template>
  <div class="lg:flex items-center bg-primary-2">
    <!-- login form -->
    <section class="lg:w-[47%] min-h-screen bg-primary p-4 grid place-items-center font-cera">
      <div class="bg-primary-light rounded-2xl p-8 w-full max-w-lg">
        <div class="text-primary text-center mb-4">
          <img src="../../assets/images/mynilam.png" class="h-16 block mx-auto mb-4" />
          <h1 class="font-bold text-3xl mb-2">{{ activeTab === 'login' ? 'Welcome' : 'Create an Account' }}</h1>
          <p v-if="activeTab === 'login'">
            Jika Anda belum terdaftar dalam aplikasi, silakan melakukan registrasi terlebih dahulu
          </p>
          <p v-else>Silakan isi formulir di bawah ini untuk mendaftar</p>
        </div>
        <!-- tab login & signup -->
        <div class="text-center text-primary-2 font-semibold mb-10">
          <ul class="flex">
            <li class="w-1/2">
              <button
                type="button"
                class="inline-block p-1 border-b-4 border-gray-300 w-full transition duration-500"
                :class="{ 'border-primary': activeTab === 'login' }"
                @click="activeTab = 'login'"
              >
                Log in
              </button>
            </li>
            <li class="w-1/2">
              <button
                type="button"
                class="inline-block p-1 border-b-4 border-gray-300 w-full transition duration-500"
                :class="{ 'border-primary': activeTab === 'signup' }"
                @click="activeTab = 'signup'"
              >
                Registrasi
              </button>
            </li>
          </ul>
        </div>
        <!-- log in form -->
        <LoginForm v-if="activeTab === 'login'">
          <!-- <template #footer>
            <div class="text-primary text-sm text-center">
              Don't have an account?
              <button type="button" class="text-primary-2 font-semibold" @click="activeTab = 'signup'">
                Create an account
              </button>
            </div>
          </template> -->
        </LoginForm>
        <!-- sing up form -->
        <SignupForm v-else>
          <!-- <template #footer>
            <div class="text-primary text-sm text-center">
              Have an account?
              <button type="button" class="text-primary-2 font-semibold" @click="activeTab = 'login'">Login</button>
            </div>
          </template> -->
        </SignupForm>
      </div>
    </section>
    <!-- image slider  -->
    <section class="lg:w-[53%] lg:min-h-screen bg-primary-2 grid place-items-center">
      <div id="default-carousel" class="relative w-full" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative overflow-hidden h-96 md:h-screen">
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../../assets/images/login/slide-login-1.png" alt="Slide Login 1" class="w-full absolute -top-5" />
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../../assets/images/login/slide-login-2.png" alt="Slide Login 2" class="w-full absolute -top-5" />
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../../assets/images/login/slide3.png" alt="Slide Login 3" class="w-full absolute -top-5" />
          </div>
        </div>
        <!-- Slider indicators -->
        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import LoginForm from './LoginForm.vue'
import SignupForm from './SignupForm.vue'
import { initCarousels } from 'flowbite'

const activeTab = ref('login')

onMounted(() => {
  initCarousels()
})
</script>
