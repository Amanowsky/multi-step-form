<template>
    <div class="w-[30px] h-[30px] font-[500]  flex justify-center items-center rounded-full border border-white xl:w-[45px] xl:h-[45px] xl:text-[1.25rem]" :class="selectClass"><slot></slot></div>
</template>


<script setup lang="ts">
import { computed } from 'vue';

const prop = defineProps({
    isSelected: {
        type: Boolean,
        default: false
    }
})

/**
 * Set active step class
 * @returns {String}
 */
const selectClass = computed<String>(()=> {
    return prop.isSelected ? "text-black bg-primary-lightBlue" : "text-white" ;
})



</script>