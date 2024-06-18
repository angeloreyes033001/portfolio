<script setup>
    import { watch } from 'vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
    
    const showModal = ref(false)

    const screenWidth = ref(window.innerWidth);
    const screenHeight = ref(window.innerHeight);

    const handleResize = () => {
      screenWidth.value = window.innerWidth;
      screenHeight.value = window.innerHeight;
    };

    onMounted(() => {
      window.addEventListener('resize', handleResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize);
    });

    const navList = ref([
        {
            label: "Home",
            to: "/"
        },
        {
            label: "Resume",
            to: "/resume"
        },
        {
            label: "Project",
            to: "/project"
        },
        {
            label: "Contact",
            to: "/contact"
        }
    ]);

    const Menu = ()=>{
        showModal.value = (showModal.value) ? false : true;
        console.log(showModal.value)
    }

    watch(screenWidth,(newValue,oldValue)=>{
        if(newValue >= 768 ){
            showModal.value = false
        }
    })


</script>
<template>
    <nav class=" px-[5%] md:px-[10%] h-auto md:bg-transparent md:flex md:items-center md:justify-between text-white font-bold p-5 relative " :class="{'bg-slate-600':showModal}" >
        <div class="flex items-center justify-between" >
            <span class="text-2xl text-green-400 font-black" >ANGELO</span>
            <span class="mx-2 md:hidden ">
                <i  name="menu" @click="Menu()" class="pi pi-bars cursor-pointer " ></i>
            </span>
        </div>
        <ul class="md:flex md:items-center absolute w-full z-50 md:z-0 h-screen md:h-auto bg-slate-600 md:bg-transparent left-0 py-4 md:py-0 md:w-auto  md:static md:opacity-100" :class="{'opacity-0 hidden': !showModal , 'opacity-100': showModal}" >
            <li v-for="nav in navList" :key="nav.label" @click="showModal = false" class="mx-4 my-6 md:my-0 hover:text-green-400" >
                <router-link  :to="nav.to" >{{ nav.label }}</router-link>
            </li>
        </ul>
    </nav>
</template>