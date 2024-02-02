<template>
    <div class="w-[30px] h-[30px] font-[500]  flex justify-center items-center rounded-full border border-white" :class="selectClass">{{ prop.whichStep }}</div>
</template>


<script setup lang="ts">
import { useMainStore } from '@/stores/counter';
import { computed } from 'vue';
const store = useMainStore();

const prop = defineProps({
    whichStep: {
        type: Number,
        required: true
    }
})

const selectClass = computed(()=> {
    return prop.whichStep === store.showStep ? "text-black bg-primary-lightBlue" : "text-white" ;
})



</script>