<template>
    <nav class="my-8">
    <div class="flex gap-4">
        <StepNumberBox :isSelected="1 === prop.actualStep">1</StepNumberBox>
        <StepNumberBox :isSelected="2 === prop.actualStep">2</StepNumberBox>
        <StepNumberBox :isSelected="3 === prop.actualStep">3</StepNumberBox>
        <StepNumberBox :isSelected="4 === prop.actualStep">4</StepNumberBox>
    </div>
    </nav>
</template>

<script setup lang="ts">
import StepNumberBox from '@/components/layout/StepNumberBox.vue';


const prop = defineProps({
    actualStep: {
        type: Number,
        required: true
    }
})



</script>

