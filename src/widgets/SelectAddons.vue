<template>
    <button 
    class="w-full flex items-center justify-between gap-3 border p-4 rounded-lg" 
    :class="setClasses"
    @click="emit('isActive')">
    <div class="flex items-center gap-3">
        <div class="h-5 w-5 border rounded flex items-center justify-center" :class="setBgColor">
            <CheckmarkIcon v-if="prop.isSelected"></CheckmarkIcon>
        </div>
        <div class="flex flex-col">
            <h3 class="text-start text-[0.97rem] font-[500] text-primary-marineBlue"><slot name="addonTitle"></slot></h3>
            <h4 class="text-start text-[0.75rem] text-neutral-coolGray"><slot name="addonDesc"></slot></h4>
        </div>
    </div>
        <h4 class="text-[0.90rem] text-primary-purplishBlue"><slot name="addonCost"></slot></h4>
    </button>
</template>

<script setup lang="ts">
import CheckmarkIcon from "@/components/icons/CheckmarkIcon.vue";
import { computed } from "vue";


const prop = defineProps({
    isSelected: {
        type: Boolean,
        default: false
    }
})


/**
 * Set classes to button
 * @returns {String}
 */
 const setClasses = computed<String>(() => {
    return prop.isSelected ? "border-primary-purplishBlue bg-neutral-alabaster" : "border-neutral-lightGray bg-white"
})

/**
 * Set background color to checkmark 
 * @returns {String}
 */
const setBgColor = computed<String>(() => {
    return prop.isSelected ? "bg-primary-purplishBlue border-0" : "bg-white"
})


const emit = defineEmits<{
    /** Emit click button */
    (e:'isActive'):void
}>()

</script>