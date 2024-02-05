<template>
    <MainBackground></MainBackground>
    <MainWrapper>

        <StepNumber :actualStep="4">
        </StepNumber>

        <div class="flex flex-col h-full w-full justify-between">

            <MainBox>
                <MainHeader>
                    <template v-slot:title>
                        Finishing up
                    </template>
                    <template v-slot:desc>
                        Double-check everything looks OK before confirming.
                    </template>
                </MainHeader>
                <div class="flex items-center justify-between">
                    <div class="flex flex-col items-start leading-tight">
                        <h3>{{ showActualPlan }} ({{ showActualPeriod }})</h3>
                        <LinkButton 
                            class="underline"
                            :toPath="'/select-your-plan'" 
                            :isBackBtn="true">
                            Change
                        </LinkButton>
                    </div>
                    <h2></h2>
                </div>
                <div></div>
            </MainBox>

            <TheFooter :backPath="'/pick-addons'" :nextPath="'/thank-you'" :isConfirmPage="true">
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
import LinkButton from '@/components/buttons/LinkButton.vue';
import { computed } from "vue"
import { useMainStore } from '@/stores/mainStore';

const store = useMainStore();


const showActualPlan = computed<String>(() => {
    return store.getSelectedPlan === 'arcade' ? "Arcade"
        : store.getSelectedPlan === 'advanced' ? "Advanced"
            : "Pro";
})

const showActualPeriod = computed<String>(() => {
    return store.getIsYearly ? "Yearly" : "Monthly";
})

</script>@/stores/mainStore