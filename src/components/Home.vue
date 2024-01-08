<template>
    <section class="t-bg-white t-h-screen t-relative" >
        <div class="t-bg-red-100 t-h-full md:t-min-h-full md:t-h-auto t-px-10 t-grid t-grid-rows-[auto,1fr] t-grid-cols-1 md:t-grid-cols-2 md:t-grid-rows-1" >
            <div class="t-flex t-justify-center t-items-center" >
                <div class="t-pt-[20%] md:t-pt-0" >
                    <h1 class="t-font-semibold t-text-black/80" >Hello!</h1>
                    <h1 class="t-font-semibold t-text-black/80 md:t-text-[80px]" >I'm <strong class="t-font-black t-text-blue-400 t-uppercase" >ANGELO</strong></h1>
                    <h1 class="t-font-semibold t-text-black/80" >WEB DEVELOPER</h1>
                </div>
            </div>
            <div class="t-grid t-place-content-center t-relative" >
                <div class="t-relative t-grid t-place-content-center" >
                    <img src="@/assets/main-image.png" alt="profile picture" >
                </div>
            </div>
        </div>
        <about_component />
        <skill_component />
        <project_component/>
        <footer_component/>
    </section>
</template>
<script setup>
import { defineAsyncComponent } from 'vue';

const about_component = defineAsyncComponent(()=>import('@/components/About.vue'));
const skill_component = defineAsyncComponent(()=>import('@/components/Skill.vue'));
const project_component = defineAsyncComponent(()=>import('@/components/Project.vue'));
const footer_component = defineAsyncComponent(()=>import('@/components/Footer.vue'));
</script>