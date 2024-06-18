<script setup>
import { ref } from 'vue';

const educations = ref([
    {
        level: "Tertiary",
        school: "Nueva Ecija University Of Science And Technology",
        year: "2020-2024"
    },
    {
        level: "High School",
        school: "Zaragoza National High School",
        year: "2014-2020"
    },
    {
        level: "Elementary",
        school: "Sta Lucia Old Elementary School",
        year: "2007-2014"
    },
])

</script>

<template>
    <div class="w-full h-full" >
        <div class="" >
            <h1 class="text-[25px] font-black" >MY EDUCATION</h1>
            <div class="mt-10 grid md:grid-cols-3 gap-5" >
                <div v-for="(educ , index) in educations" :key="index" class="bg-slate-700 p-5 rounded-[10px] h-full grid grid-rows-[30px,1fr,30px]" >
                    <span class="text-green-500 h-full uppercase font-light" >{{ educ.level }}</span>
                    <h1 class="text-[20px] font-semi old" >{{ educ.school }}</h1>
                    <div class="flex items-center">
                        <i class="pi pi-circle animate-pulse text-green-500" ></i> &nbsp;
                        <span class="font-extralight" >{{ educ.year }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>