<script setup>
import { ref } from 'vue';
import card from '@/components/partials/mini-card.vue'

const aboutMe = ref({
    firstname: "angelo",
    lastname: "reyes",
    description: "Hello, I'm Angelo B. Reyes, an aspiring web developer with a passion for creating beautiful and functional websites. I’m constantly seeking new challenges and opportunities to grow and improve my coding and design skills. My goal is to create engaging online experiences that leave a lasting impression.",
    address: "zaragoza, nueva ecija",
    nationality: "filipino",
    contact: {
        phone: "+639944732120",
        email: "angeloreyes.works.033001@gmail.com"
    },
})

</script>

<template>
    <div class="w-full h-full" >
        <h1 class="text-[25px] font-black" >ABOUT ME</h1>
        <p>{{ aboutMe.description }}</p>
        <div class="mt-3 grid md:grid-cols-2 gap-5" >
            <card label="Nationality" :data="aboutMe.nationality" />
            <card label="Address" :data="aboutMe.address" />
        </div>
        <div class="mt-3 grid md:grid-cols-2 gap-5" >
            <card label="Email" :data="aboutMe.contact.email" />
            <card label="Phone" :data="aboutMe.contact.phone" />
        </div>
        <Button class="w-full md:w-[200px] mt-5" label="Download CV" icon="pi pi-download" iconPos="right" />
    </div>
</template>