<template>
    <button class="px-3 py-2 text-[0.90rem] rounded-md" :class="setClasses" @click="goNext()">
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
    return prop.isBackBtn ? "text-neutral-coolGray" : "bg-primary-marineBlue text-white"
}) 


</script>