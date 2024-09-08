<template>
  <div class="md:flex items-center">
    <!-- login form -->
    <section class="md:w-[47%] h-screen bg-primary p-4 grid place-items-center font-cera">
      <div class="bg-green-50 rounded-2xl p-8 w-full max-w-lg">
        <div class="text-primary text-center mb-4">
          <h1 class="font-bold text-3xl mb-2">Welcome</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <!-- tab login & signup -->
        <div class="text-center text-primary-2 font-semibold mb-10">
          <ul class="flex">
            <li class="w-1/2">
              <button class="inline-block p-1 border-b-4 w-full border-primary">Log in</button>
            </li>
            <li class="w-1/2">
              <button class="inline-block p-1 border-b-4 w-full border-gray-300">Sign up</button>
            </li>
          </ul>
        </div>
        <!-- form  -->
        <form>
          <div class="mb-8">
            <BaseInputFloat id="email" type="email" label="Enter Email" />
          </div>
          <div class="mb-5">
            <BaseInputFloat id="password" type="password" label="Enter Password" />
          </div>
          <div class="flex justify-between items-center mb-5">
            <BaseCheckbox label="Remember me" id="remember" />
            <button class="font-semibold text-primary text-sm">Forgot Password</button>
          </div>
          <button type="button" class="bg-primary rounded-full text-white font-semibold w-full p-2.5">Login</button>
        </form>
      </div>
    </section>
    <!-- image slider  -->
    <section class="md:w-[53%] md:h-screen bg-primary grid place-items-center">
      <div id="default-carousel" class="relative w-full" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative overflow-hidden h-96 md:h-screen">
          <!-- Item 1 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/images/slide-login-1.png"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/images/slide-login-1.png"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/images/slide-login-1.png"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
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
import BaseInputFloat from '../components/BaseInputFloat.vue'
import BaseCheckbox from '../components/BaseCheckbox.vue'
</script>
