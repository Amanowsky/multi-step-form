<template>
    <footer class="w-full h-16 bg-white flex items-center p-8" :class="setClasses">
                <LinkButton v-if="prop.backPath" :toPath="prop.backPath">
                    Go back
                </LinkButton>
                <LinkButton v-if="prop.nextPath" :toPath="prop.nextPath">
                    Next step
                </LinkButton>
    </footer>
</template>

<script setup lang="ts">
import LinkButton from '@/components/buttons/LinkButton.vue';
import { computed } from 'vue';

const prop = defineProps({
    nextPath: {
        type: String,
        required: false,
        default: ""
    },
    backPath: {
        type: String,
        required: false,
    }
})

/**
 * Set footer flex oriented class
 * @returns {String}
 */
const setClasses = computed<String>(() => {
    return prop.backPath ? "justify-between" : "justify-end";
})

</script>