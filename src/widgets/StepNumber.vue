<template>
    <div class="flex gap-4">
        <StepNumberBox :whichStep="1"></StepNumberBox>
        <StepNumberBox :whichStep="2"></StepNumberBox>
        <StepNumberBox :whichStep="3"></StepNumberBox>
        <StepNumberBox :whichStep="4"></StepNumberBox>
    </div>
</template>

<script setup lang="ts">
import StepNumberBox from '@/components/layout/StepNumberBox.vue';



</script>

