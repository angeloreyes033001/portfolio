<template>
    <section class="t-bg-white t-h-screen t-relative" >
        <div class="t-bg-red-100 t-h-full md:t-min-h-full md:t-h-auto t-px-10 t-grid t-grid-rows-[auto,1fr] t-grid-cols-1 md:t-grid-cols-2 md:t-grid-rows-1" >
            <div class="t-flex t-justify-center t-items-center" >
                <div class="t-pt-[20%] md:t-pt-0" >
                    <h1 class="t-font-semibold t-text-black/80" >Hello!</h1>
                    <h1 class="t-font-semibold t-text-black/80 md:t-text-[80px]" >I'm <storng class="t-font-black t-text-blue-400 t-uppercase" >ANGELO</storng></h1>
                    <h1 class="t-font-semibold t-text-black/80" >WEB DEVELOPER</h1>
                </div>
            </div>
            <div class="t-grid t-place-content-center t-relative" >
                <div class="t-relative t-grid t-place-content-center" >
                    <img class=" " src="@/assets/main-image.png" >
                </div>
            </div>
        </div>
        <div class="t-h-auto t-w-full t-relative t-bg-white" >
            <about_component />
            <img class=" t t-absolute" src="@/assets/gray-up.png" >
        </div>
        <div class="t-h-auto t-w-full t-px-10 t-relative t-bg-slate-100 " >
            <skill_component />
        </div>
        <div class="t-relative t-h-auto  " >
            <img class="" src="@/assets/gray-down.png" >
            <div class="t-absolute t-top-0 t-left-0 t-w-full t-h-full  t-px-10" >
                <div class="container t-py-[5%] t-h-full" >
                    <h1 class="t-font-black" >PROJECTS</h1>
                    <p class="t-font-extralight" >I've been on a coding journey, building cool stuff along the way. Take a look at some projects that got me excited</p>
                    <div class="t-grid t-pt-20" >
                        <div class="t-rounded-[10px] t-w-full t-my-5 t-h-auto md:t-h-[350px] t-bg-white t-grid t-grid-rows-[1fr,auto] md:t-grid-rows-1 md:t-grid-cols-2" >
                            <div class="t-relative t-p-3" >
                                <img class="t t-h-full t-w-full t-rounded-[10px]" src="@/assets/project/online-banking.jpg" >
                            </div>
                            <div class="t-p-3 t-grid t-grid-rows-[auto,1fr,70px,70px] t-h-full" >
                                <span>
                                    <h3 class="t t-font-black t-m-0 t-p-0" >Online Banking System</h3>
                                    <small>March 30 2001</small>
                                </span>
                                <p class="t-line-clamp-4" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, odio neque! Placeat, eveniet? Error ut voluptatum sed veritatis quis, perferendis soluta voluptate aperiam exercitationem dolores nulla eligendi doloremque velit. Beatae!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                </p>
                                <span>
                                    <label class="t-font-semibold" >Technologies</label>
                                    <div>
                                        CSS,HTML
                                    </div>
                                </span>
                                <div>
                                    <a href="#" class="btn btn-primary t-text-black text-decoration-none" >
                                        <fa icon="code" ></fa>
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class=" t-rounded-[10px] t-w-full t-my-5 t-h-auto md:t-h-[350px] t-bg-white t-grid t-grid-rows-[1fr,auto] md:t-grid-rows-1 md:t-grid-cols-2" >
                            <div class=" t-order-2 md:t-order-1 t-p-3 t-grid t-grid-rows-[auto,1fr,70px,70px] t-h-full" >
                                <span>
                                    <h3 class="t t-font-black t-m-0 t-p-0" >Online Banking System</h3>
                                    <small>March 30 2001</small>
                                </span>
                                <p class="t-line-clamp-4 t-overflow-hidden t-leading-6 " >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, odio neque! Placeat, eveniet? Error ut voluptatum sed veritatis quis, perferendis soluta voluptate aperiam exercitationem dolores nulla eligendi doloremque velit. Beatae!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                </p>
                                <span>
                                    <label class="t t-font-semibold" >Technologies</label>
                                    <div>
                                        CSS,HTML
                                    </div>
                                </span>
                                <div>
                                    <a href="#" class="btn btn-primary t-text-black text-decoration-none" >
                                        <fa icon="code" ></fa>
                                        Source Code
                                    </a>
                                </div>
                            </div>
                            <div class=" t-order-1 md:t-order-2 t-relative t-p-3" >
                                <img class="t-h-full t-w-full t-rounded-[10px]" src="@/assets/project/online-banking.jpg" >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { defineAsyncComponent } from 'vue';

const about_component = defineAsyncComponent(()=>import('@/components/About.vue'));
const skill_component = defineAsyncComponent(()=>import('@/components/Skill.vue'));
</script>