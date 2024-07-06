<script setup>
    import { ref } from "vue";
    import html from '@/assets/images/skills/html.svg';
    import css from '@/assets/images/skills/css.svg';
    import js from '@/assets/images/skills/js.svg';
    import vue from '@/assets/images/skills/vue.svg';
    import node from '@/assets/images/skills/node.svg';
    import php from '@/assets/images/skills/php.svg';
    import prime from '@/assets/images/skills/prime.png'
    import tailwind from '@/assets/images/skills/tailwind.svg';
    import bootstrap from '@/assets/images/skills/bootstrap.svg';
    import figma from '@/assets/images/skills/figma.svg';
    import xampp from '@/assets/images/skills/xampp.png';

    const skills = ref([html,css,js,vue,node,php,prime,tailwind,bootstrap,figma,xampp]);

</script>
<template>
    <div class="w-full h-full" >
        <div class="" >
            <h1 class="text-[25px] font-black" >MY SKILLS</h1>
            <p>Technologies i used.</p>
            <div class="mt-10 text-center" >
                <div v-for="skill in skills" class="inline-block bg-slate-600  w-[90px] h-[90px] rounded-[10px] m-3 hover:text-green-400 hover:animate-pulse" >
                    <div class="grid place-content-center h-full w-full" >
                        <img :src="skill" alt="" class="w-[32px] h-[32px]" >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>