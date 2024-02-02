<template>
<div class="w-full h-full absolute bg-background-mobile bg-no-repeat z-[-1] bg-neutral-mangolia"></div>
<MainWrapper class="flex flex-col items-center">
    <header class="my-8">
        <StepNumber></StepNumber>
    </header>
    <section>
        <MainBox>
            <h1 class="text-[1.4rem] font-[700] text-primary-marineBlue">Personal info</h1>
            <h2 class="text-[0.95rem] text-neutral-coolGray">Please provide your name, email address, and phone number.</h2>
        </MainBox>
    </section>
</MainWrapper>
</template>

<script setup lang="ts">
import MainWrapper from '@/components/layout/MainWrapper.vue';
import MainBox from '@/components/layout/MainBox.vue';
import StepNumber from '@/widgets/StepNumber.vue';
</script>