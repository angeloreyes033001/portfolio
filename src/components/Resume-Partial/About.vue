<script setup>
import { ref } from 'vue';
import card from '@/components/partials/mini-card.vue';
import resume from '@/assets/resume.pdf';
const myResume = ref(resume)

const aboutMe = ref({
    firstname: "angelo",
    lastname: "reyes",
    description: "Hello, I'm Angelo B. Reyes, an aspiring web developer with a passion for creating beautiful and functional websites. I’m constantly seeking new challenges and opportunities to grow and improve my coding and design skills. My goal is to create engaging online experiences that leave a lasting impression.",
    address: "Zaragoza, Nueva Ecija",
    nationality: "Filipino",
    contact: {
        phone: "+639944732120",
        email: "angelo.balisa.reyes@gmail.com"
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
        <a :href="myResume" download >
            <Button label="Download CV" class="w-[200px]" icon="pi pi-download" iconPos="right" />
        </a>
    </div>
</template>