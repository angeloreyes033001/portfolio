<script setup>
import { ref } from 'vue';

import resume from '@/assets/resume.pdf';
const myResume = ref(resume)

</script>

<template>
  <section class="h-full overflow-auto" >
    <div class="h-full px-[5%] md:px-[10%] grid grid-cols-1 md:grid-cols-2 gap-5" >
      <div class="flex md:items-center order-2 md:order-1" >
        <div class="w-full" >
          <p class="font-semibold uppercase text-[18px] md:text-[20px] text-center md:text-left" >Web Developer</p>
          <div class=" text-[30px] md:text-[70px] text-center md:text-left" >Hello I'm </div>
          <div class="text-[40px] md:text-[70px] text-green-400 font-black text-center md:text-left" >ANGELO REYES</div>
          <p class="text-center md:text-left">I am proficient in various programming languages and technologies.</p>
          <div class="mt-4 text-center md:text-left" >
            <a :href="myResume" download >
              <Button label="Download CV" class="w-[200px]" icon="pi pi-download" iconPos="right" />
            </a>
          </div>
        </div>
      </div>
      <div class="grid items-center justify-center order-1 md:order-2" >
        <div class=" h-[310px] w-[310px]  md:h-[300px] md:w-[300px] lg:w-[500px] lg:h-[500px] bg-green-400 rounded-[50%] relative" >
          <div class="w-[90%] h-[90%] bg-green-200 rounded-[50%] " ></div>
          <img src="@/assets/images/me.png" class="w-full h-full rounded-[50%] absolute top-0 left-0" />
        </div>
      </div>
    </div>
  </section>
</template>
