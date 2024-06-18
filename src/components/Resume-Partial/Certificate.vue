<script setup>
    import { ref } from "vue";
    import 'swiper/css';
    import 'swiper/css/pagination'
    import 'swiper/css/effect-cards';
    import { Swiper , SwiperSlide } from 'swiper/vue';
    import {Pagination,EffectCards} from 'swiper/modules';

    import nc2 from '@/assets/images/certificates/nc2.jpg'
    import certi from '@/assets/images/certificates/certiport.jpg'

    const certificates = ref([
        {
            title: "CertiPort - Expert HTML CSS",
            date: "11-30-2023",
            photo: certi
        },
        {
            title: "NCII - Computer System Servicing",
            date: "01-28-2020",
            photo: nc2
        },
    ])

</script>
<template>
    <div class="w-full h-full" >
        <h1 class="text-[25px] font-black" >MY CERTIFICATE'S</h1>
        <div class="mt-10 w-full" >
            <Swiper class="mySwiper w-[300px]  h-[400px]  md:w-[600px]  md:h-[700px] p-5" :grabCursor="true" :spaceBetween="30" :pagination="{ clickable: true}" :modules="[Pagination,EffectCards]"  :effect="'cards'" >
                <SwiperSlide v-for="(cert,index) in certificates" :key="index" class="bg-slate-200 relative text-black rounded-[10px] overflow-hidden" >
                    <img class="h-full w-full" :src="cert.photo" >
                    <div class="bg-black/50 text-white w-full h-[100px] absolute bottom-10 p-5" >
                        <h1 class="text-center uppercase font-bold" >{{ cert.title }}</h1>
                        <p class="text-center font-light" >Received Date: {{ cert.date }} </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>