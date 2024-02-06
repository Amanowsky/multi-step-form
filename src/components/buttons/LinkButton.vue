<template>
    <button class="text-[0.90rem] rounded-md xl:text-[1.4rem] xl:px-8 xl:py-4 xl:font-[500] xl:tracking-wide xl:rounded-xl" :class="setClasses" @click="goNext()">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import router from '@/router';
import {computed} from "vue"

const prop = defineProps({
    toPath: {
        type: String,
        required: true
    },
    isBackBtn: {
        type: Boolean,
        default: false
    },
    isConfirmBtn: {
        type: Boolean,
        default: false
    }
})


/**
 * Set router to next path
 */
const goNext = ():void => {
    router.push(prop.toPath);
}

/**
 * Set button classes
 * @returns {String}
 */
const setClasses = computed<String>(()=> {
    return prop.isBackBtn ? "text-neutral-coolGray"
    : prop.isConfirmBtn ? "bg-primary-purplishBlue text-white px-3 py-2"
    : "bg-primary-marineBlue text-white px-3 py-2"
}) 


</script>