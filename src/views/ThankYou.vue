<template>
    <MainBackground></MainBackground>
    <MainWrapper>
       
        <StepNumber 
            :actualStep="4">
        </StepNumber>
       
        <div class="flex flex-col h-full w-full justify-between xl:h-full xl:w-2/3 xl:items-center xl:justify-center">
            <MainBox>
                <div class="flex flex-col justify-center items-center gap-1 xl:px-16">
                <ThankyouIcon></ThankyouIcon>
                <h1 class="text-primary-marineBlue text-[1.5rem] font-[900] mt-8 xl:text-[2.5rem]">Thank you!</h1>
                <div>
                <h2 class="text-center text-neutral-coolGray xl:text-[1.5rem] xl:mt-4">Thanks for confirming your subscription!
                We hope you have fun using our platform. If you ever need support, please feel free to email us at 
                support@loremgaming.com</h2>
                </div>
                </div>
            </MainBox>

            
        </div>
    </MainWrapper>
</template>

<script setup lang="ts">
import MainBackground from '@/components/layout/MainBackground.vue';
import MainWrapper from '@/components/layout/MainWrapper.vue';
import MainBox from '@/components/layout/MainBox.vue';
import StepNumber from '@/widgets/StepNumber.vue';
import ThankyouIcon from '@/components/icons/ThankyouIcon.vue';

</script>