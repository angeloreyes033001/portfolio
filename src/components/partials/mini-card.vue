<script setup>

    const props = defineProps({
        label: {
            type: String,
            default: "",
        },
        data: {
            type: String,
            default: "",
        },
    })

</script>
<template>
    <div class=" h-[50px] flex items-center gap-5 overflow-auto" >
        <span class="text-light"  :title="props.label">{{ props.label }}:</span>
        <span class=" font-semibold truncate" :title="props.data" >{{ props.data }}</span>
    </div>
</template>