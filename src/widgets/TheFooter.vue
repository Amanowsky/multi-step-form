<template>
    <footer class="w-full h-16 bg-white flex items-center p-4" :class="setClasses">
                <LinkButton v-if="prop.backPath" :toPath="prop.backPath" :isBackBtn="true">
                    Go Back
                </LinkButton>
                <LinkButton v-if="prop.nextPath" :toPath="prop.nextPath" :isConfirmBtn="prop.isConfirmPage">
                    {{ setNextButtonText }}
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
    },
    isConfirmPage: {
        type: Boolean,
        default: false
    }
})

/**
 * Set footer flex oriented class
 * @returns {String}
 */
const setClasses = computed<String>(() => {
    return prop.backPath ? "justify-between" : "justify-end";
})

/**
 * Set next button text
 * @returns {String}
 */
const setNextButtonText = computed<String>(() => {
    return prop.isConfirmPage ? "Confirm" : "Next Step"
})

</script>