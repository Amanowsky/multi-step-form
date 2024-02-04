<template>
    <button 
    class="w-full flex items-center gap-5 border p-4 rounded-lg" 
    :class="setClasses"
    @click="emit('isActive')">
        <component :is="setIcon"></component>
        <div>
            <h2 class="text-primary-marineBlue font-[500] text-start"><slot name="planTitle"></slot></h2>
            <h3 class="text-neutral-coolGray text-[0.85rem] text-start"><slot name="planCost"></slot></h3>
            <h4 class="text-[0.7rem] text-primary-marineBlue text-start"><slot name="planInfo"></slot></h4>
        </div>
    </button>
</template>

<script setup lang="ts">
import {computed } from 'vue';
import type {Component} from "vue";
import ArcadeIcon from '@/components/icons/ArcadeIcon.vue';
import AdvancedIcon from '@/components/icons/AdvancedIcon.vue';
import ProIcon from '@/components/icons/ProIcon.vue';

const prop = defineProps({
    isSelected: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
        required: true
    },
})

/**
 * Set classes to button
 * @returns {String}
 */
const setClasses = computed<String>(() => {
    return prop.isSelected ? "border-primary-purplishBlue bg-neutral-alabaster" : "border-neutral-lightGray bg-white"
})

/**
 * Set component icon
 * @returns {Component}
 */
const setIcon = computed<Component>(() => {
    return prop.icon === 'arcade' ? ArcadeIcon : prop.icon === 'advanced' ? AdvancedIcon : ProIcon
})


const emit = defineEmits<{
    /** Emit click button */
    (e:'isActive'):void
}>()


</script>