<template>
    <MainBackground></MainBackground>
    <MainWrapper>

        <StepNumber :actualStep="4">
        </StepNumber>

        <div class="flex flex-col h-full justify-between xl:h-full xl:w-2/3 xl:px-16">

            <MainBox>
                <MainHeader>
                    <template v-slot:title>
                        Finishing up
                    </template>
                    <template v-slot:desc>
                        Double-check everything looks OK before confirming.
                    </template>
                </MainHeader>
                <div class="flex flex-col gap-3 bg-neutral-alabaster p-4 rounded-md mt-6">
                    <div class="flex justify-between w-full">
                        <div class="flex flex-col items-start leading-tight">
                            <h3 class="font-[500] text-primary-marineBlue">{{ showActualPlan }} ({{ showActualPlanPeriod }})</h3>
                            <LinkButton 
                                class="underline"
                                :toPath="'/select-your-plan'" 
                                :isBackBtn="true">
                                Change
                            </LinkButton>
                        </div>
                        <h2 class="text-primary-marineBlue font-[700]">{{ showPlanPrice }}</h2>
                    </div>
                    <div class="w-full h-[1px] bg-neutral-lightGray"></div>
                    <div v-for="el in store.getSelectedAddons" :key="el">
                        <div class="flex justify-between">
                            <h2 class="text-[0.9rem] text-neutral-coolGray">{{ el === 'os' ? "Online service" : el === 'ls'? "Larger Storage" : "Customizable profile" }} </h2>
                            <h3 class="text-[0.9rem] text-primary-marineBlue">{{ el === 'os' ? prices.getStringPriceOs : el === 'ls'? prices.getStringPriceLs : prices.getStringPriceCp }}</h3>
                        </div>
                    </div>
                </div>
                <div class="ml-4 mr-4 flex justify-between mt-6">
                    <h3 class="text-[0.9rem] text-neutral-coolGray">Total {{ store.getIsYearly ? "(per year)" : "(per month)" }}</h3>
                    <h2 class="text-[1.05rem] text-primary-purplishBlue font-[700]"> {{ store.getIsYearly ? `+$${store.getAllCost}/yr` : `+$${store.getAllCost}/mo` }}</h2>
                </div>
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
import { usePricesStore } from '@/stores/pricesStore';

const store = useMainStore();
const prices = usePricesStore();




const showPlanPrice = computed<String>(() => {
    return store.getSelectedPlan === 'arcade' ? prices.getStringPriceArcade
            : store.getSelectedPlan === 'advanced' ? prices.getStringPriceArcade
            : prices.getStringPricePro;
})


const showActualPlan = computed<String>(() => {
    return store.getSelectedPlan === 'arcade' ? "Arcade"
        : store.getSelectedPlan === 'advanced' ? "Advanced"
            : "Pro";
})

const showActualPlanPeriod = computed<String>(() => {
    return store.getIsYearly ? "Yearly" : "Monthly";
})

</script>@/stores/mainStore