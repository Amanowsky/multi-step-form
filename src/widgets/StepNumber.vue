<template>
    <nav class="my-8 xl:my-0 xl:h-full xl:w-1/3 xl:bg-background-desktop xl:bg-cover xl:p-14 xl:rounded-xl">
        <div class="flex gap-4 xl:flex-col xl:gap-10">
            <div class="xl:flex xl:items-center xl:gap-5"> 
                <StepNumberBox :isSelected="1 === prop.actualStep">1</StepNumberBox> 
                <div class="hidden xl:flex xl:flex-col">
                    <p class="xl:text-neutral-lightGray xl:text-[1.1rem]">STEP 1</p>
                    <p class="xl:text-white xl:font-[700] xl:text-[1.3rem] xl:tracking-wider">YOUR INFO</p>
                </div>
            </div>
            <div class="xl:flex xl:items-center xl:gap-5"> 
                <StepNumberBox :isSelected="2 === prop.actualStep">2</StepNumberBox> 
                <div class="hidden xl:flex xl:flex-col">
                    <p class="xl:text-neutral-lightGray xl:text-[1.1rem]">STEP 2</p>
                    <p class="xl:text-white xl:font-[700] xl:text-[1.3rem] xl:tracking-wider">SELECT PLAN</p>
                </div>
            </div>
            <div class="xl:flex xl:items-center xl:gap-5"> 
                <StepNumberBox :isSelected="3 === prop.actualStep">3</StepNumberBox> 
                <div class="hidden xl:flex xl:flex-col">
                    <p class="xl:text-neutral-lightGray xl:text-[1.1rem]">STEP 3</p>
                    <p class="xl:text-white xl:font-[700] xl:text-[1.3rem] xl:tracking-wider">ADD-ONS</p>
                </div>
            </div>
            <div class="xl:flex xl:items-center xl:gap-5"> 
                <StepNumberBox :isSelected="4 === prop.actualStep">4</StepNumberBox> 
                <div class="hidden xl:flex xl:flex-col">
                    <p class="xl:text-neutral-lightGray xl:text-[1.1rem]">STEP 4</p>
                    <p class="xl:text-white xl:font-[700] xl:text-[1.3rem] xl:tracking-wider">SUMMARY</p>
                </div>
            </div>
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

