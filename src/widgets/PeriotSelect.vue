<template>
<div class="flex justify-center items-center gap-5 w-full h-16 rounded-xl bg-neutral-alabaster xl:h-20 xl:rounded-2xl">
    <button @click="emit('isActive','monthly')" class="text-[0.9rem] font-[500] xl:text-[1.35rem]" :class="setMonthlyColor">Monthly</button>
    <div class="w-10 h-5 bg-primary-marineBlue rounded-full flex items-center p-1 xl:w-14 xl:h-7 xl:px-2">
        <div class="w-3 h-3 bg-white rounded-full transition-transform duration-300 xl:w-4 xl:h-4" :class="setPosition"></div>
    </div>
    <button @click="emit('isActive','yearly')" 
    class="text-[0.9rem] font-[500] xl:text-[1.35rem]" 
    :class="setYearlyColor">Yearly</button>
</div>    
</template>

<script setup lang="ts">
import {computed} from "vue"

const prop = defineProps({
    isYearly: {
        type: Boolean,
        default: false
    }
})

/**
 * Set classes to change position of dot
 * @returns {String}
 */
const setPosition = computed<String>(() => {
    return prop.isYearly ? "translate-x-5 xl:translate-x-6" : "";
})

/**
 * Set classes to change text color for Monthly
 * @returns {String}
 */
const setMonthlyColor = computed<String>(() => {
    return prop.isYearly ? 'text-neutral-coolGray' : 'text-primary-marineBlue'
})

/**
 * Set classes to change text color for Yearly
 * @returns {String}
 */
const setYearlyColor = computed<String>(() => {
    return prop.isYearly ? 'text-primary-marineBlue' : 'text-neutral-coolGray' 
})

const emit = defineEmits<{
    /** Emit click button and its name*/
    (e: 'isActive',name:string):void
}>()

</script>