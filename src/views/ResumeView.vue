<script setup>
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';
    const routes = useRoute()

    const lists = ref([
        {
            label: "about me",
            to: "/resume"
        },
        {
            label: "education",
            to: "/resume/education"
        },
        {
            label: "certificates",
            to: "/resume/certificate"
        },
        {
            label: "Skills",
            to: "/resume/skill"
        },
    ])

</script>
<template>
    <section class="h-full overflow-auto" >
        <div class="h-full  px-[5%] md:px-[10%]" >
            <div class="grid grid-rows-[auto,1fr] md:grid-cols-[400px,1fr] md:grid-rows-1 w-full h-full" >
                <div class="py-5 pt-[100px]" >
                    <div>
                        <h1 class="text-[30px] font-black" >Why Hire Me?</h1>
                        <p>I am passionate about developing effective and user-friendly web solutions, and I bring a strong combination of technical skills and problem-solving ability.</p>
                        <div class="mt-5" >
                            <router-link v-for="list in lists" :key="list.label" :to="list.to" class="my-3 w-full  p-2 h-[50px] rounded-[5px] grid place-content-center" :class="{'bg-green-400': list.to == routes.path , 'bg-slate-600': list.to != routes.path }" >
                                <span class="text-white font-bold uppercase" >{{ list.label }}</span>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="p-5 md:pt-[100px]" >
                    <RouterView/>
                </div>
            </div>
        </div>
    </section>
</template>