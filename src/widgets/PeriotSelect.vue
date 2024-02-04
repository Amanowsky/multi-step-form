<template>
<div class="flex justify-center items-center gap-5 w-full h-16 rounded-xl bg-neutral-alabaster">
    <button @click="emit('isActive','monthly')" class="text-[0.9rem] font-[500]" :class="setMonthlyColor">Monthly</button>
    <div class="w-10 h-5 bg-primary-marineBlue rounded-full flex items-center p-1 ">
        <div class="w-3 h-3 bg-white rounded-full transition-transform duration-300" :class="setPosition"></div>
    </div>
    <button @click="emit('isActive','yearly')" 
    class="text-[0.9rem] font-[500] " 
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
    return prop.isYearly ? "translate-x-5" : "";
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