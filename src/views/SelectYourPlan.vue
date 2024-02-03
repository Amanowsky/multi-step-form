<template>
    <MainBackground></MainBackground>
    <MainWrapper>
       
        <StepNumber 
            :actualStep="2">
        </StepNumber>
       
        <div class="flex flex-col h-full w-full justify-between">

            <MainBox>
                <MainHeader>
                    <template v-slot:title>
                        Select your plan
                    </template>
                    <template v-slot:desc>
                        You have the option of monthly or yearly billing.
                    </template>
                </MainHeader>
            </MainBox>

            <TheFooter 
                :backPath="'/personal-info'" 
                :nextPath="'/pick-addons'">
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