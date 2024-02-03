<template>
    <button class="" @click="goNext()">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import router from '@/router';

const prop = defineProps({
    toPath: {
        type: String,
        required: true
    }
})

const goNext = ():void => {
    router.push(prop.toPath);
}


</script>