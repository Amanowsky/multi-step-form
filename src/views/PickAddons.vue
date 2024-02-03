<template>
    <MainBackground></MainBackground>
    <MainWrapper>
       
        <StepNumber 
            :actualStep="3">
        </StepNumber>
       
        <div class="flex flex-col h-full w-full justify-between">

            <MainBox>
                <MainHeader>
                    <template v-slot:title>
                        Pick add-ons
                    </template>
                    <template v-slot:desc>
                        Add-ons help enhance your gaming experience.
                    </template>
                </MainHeader>
            </MainBox>

            <TheFooter 
                :backPath="'/select-your-plan'" 
                :nextPath="'/finishing-up'">
            </TheFooter>
        </div>
    </MainWrapper>
</template>

<script setup lang="ts">
import MainBackground from '@/components/layout/MainBackground.vue';
import MainWrapper from '@/components/layout/MainWrapper.vue';
import MainBox from '@/components/layout/MainBox.vue';
import StepNumber from '@/widgets/StepNumber.vue';
import TheFooter from '@/widgets/TheFooter.vue'
import MainHeader from '@/components/layout/MainHeader.vue';
</script>