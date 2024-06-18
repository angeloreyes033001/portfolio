<script setup>
    import 'swiper/css';
    import 'swiper/css/pagination'
    import { Swiper , SwiperSlide } from 'swiper/vue';
    import {Pagination} from 'swiper/modules'
    import { ref } from 'vue';

    import p01 from '@/assets/images/projects/01.png'
    import p02 from '@/assets/images/projects/02.png'
    import p03 from '@/assets/images/projects/03.png'
    import p04 from '@/assets/images/projects/04.jpg'
    import p05 from '@/assets/images/projects/05.png'
    import p06 from '@/assets/images/projects/06.png'

    const projects = ref([
        {
            title: "Schedlr:Online Scheduling System for Nueva Ecija University Of Science and Technology",
            description: "A web-based application system developed and designed to provide automated class schedule generation as well as management system for CICT Department, Nueva Ecija University of Science andTechnology.",
            technologies: ["VueJS", "Laravel","TailwindCSS","Bootstrap","MySQL"],
            image: p01,
        },
        {
            title: "Ticketing System",
            description: "A requesting form for preventive maintenance for computer,laptop,tablet,router and software",
            technologies: ["VueJS","NodeJS","Prisma","TailwindCSS","PrimeVue","SocketIO","ChartJS","MySQL"],
            image:p02
        },
        {
            title: "ZNHS Automate: Centralized Student Information Portal Access",
            description: "This is my client's thesis project. The purpose of this project is to monitor the grades and attendance of individual students.",
            technologies: ["VueJS", "NodeJS","TailwindCSS","Prisma","MySQL"],
            image: p03,
        },
        {
            title: "AlgeTiles: Digital Game-Base Factorization using Algebra tile Method.",
            description: "This is my client's thesis project. A website game that helps you learn algebra easily and enjoyably way.",
            technologies: ["ReactJS", "Supabase","TailwindCSS"],
            image: p04,
        },
        {
            title: "CashPinas:Investment Website",
            description: "A web-based tracker application for fund management: A system to help investor monitor funds, view insights and choose the best investment option.This is my client's final case study.",
            technologies: ["HTML", "JS","Bootstrap", "PHP(OOP)","JQuery" ,"MySQL"],
            image: p05,
        },
        {
            title: "PUMP'S:Pet Adaption",
            description: "This is my final case study in mobile development subject. The purpose of this case study to build a hybrid mobile application to enhance our skills. I need to convert the website to Application Pagkage and install in any android or IOS device.",
            technologies: ["AngularJS","Bootstrap","Cordova","Unity 3D"],
            image: p06,
        }
    ])

</script>
<template>
    <section class="h-full overflow-auto " >
        <div class="min-h-full  px-[5%] md:px-[10%] pt-[150px]" >
            <div class="w-full min-h-[600px] overflow-auto p-5" >
                <Swiper class="h-full"  :pagination="{ clickable: true}" :modules="[Pagination]" >
                    <SwiperSlide v-for="(project,index) in projects" class="h-full " >
                        <div class="h-full grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1" >
                            <div class=" h-full flex items-center order-2 md:order-1" >
                                <div class="p-0 md:px-10" >
                                    <h1 class="text-[80px] font-black" >0{{ index+1 }}</h1>
                                    <h1 class="font-black text-[30px] uppercase" >{{ project.title }}</h1>
                                    <p>{{ project.description }}</p>
                                    <ul class="mt-3 gap-3 text-green-400" >
                                        <li v-for="tech of project.technologies" class="inline-block mr-5" >{{ tech }}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="h-full order-1 md:order-2 flex items-center justify-center" >
                                <img :src="project.image" class="w-auto h-[400px] rounded-[10px] shadow" >
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
</template>