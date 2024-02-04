<template>
    <MainBackground></MainBackground>
    <MainWrapper>

        <StepNumber :actualStep="2">
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
                <div class="mt-6 flex flex-col gap-5">
                    <PlanBox :icon="'arcade'" :isSelected="isSelected === 'arcade'" @isActive="setSelected('arcade')">
                        <template v-slot:planTitle>Arcade</template>
                        <template v-slot:planCost>{{ store.getIsYearly ? "$90/yr": "$9/mo" }}</template>
                        <template v-slot:planInfo v-if="store.getIsYearly">2 months free</template>
                        
                    </PlanBox>
                    <PlanBox :icon="'advanced'" :isSelected="isSelected === 'advanced'" @isActive="setSelected('advanced')">
                        <template v-slot:planTitle>Advanced</template>
                        <template v-slot:planCost>{{ store.getIsYearly ? "$120/yr": "$12/mo" }}</template>
                        <template v-slot:planInfo v-if="store.getIsYearly">2 months free</template>
                    </PlanBox>
                    <PlanBox :icon="'pro'" :isSelected="isSelected === 'pro'" @isActive="setSelected('pro')">
                        <template v-slot:planTitle>Pro</template>
                        <template v-slot:planCost>{{ store.getIsYearly ? "$150/yr": "$15/mo" }}</template>
                        <template v-slot:planInfo v-if="store.getIsYearly">2 months free</template>
                    </PlanBox>
                </div>
                <PeriotSelect @isActive="setActivePeriod" :isYearly="store.getIsYearly"></PeriotSelect>
            </MainBox>

            <TheFooter :backPath="'/personal-info'" :nextPath="'/pick-addons'">
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
import PlanBox from '@/widgets/PlanBox.vue';
import PeriotSelect from "@/widgets/PeriotSelect.vue"
import { ref } from 'vue';
import { useMainStore } from '@/stores/counter';

/** Store for selected plan */
const store = useMainStore();

/** Which plan is selected */
const isSelected = ref(store.getSelectedPlan);


/**
 * Set selected plan
 * @param name is a title of selected plan
 */
const setSelected = (name: string): void => {
    isSelected.value = name;
    store.setSelectedPlan(name);
}

/**
 * Set active subscription period
 * @param name a name of selected subscription period
 */
const setActivePeriod = (name:string) => {
    name === 'monthly' ? store.setIsYearly(false) : store.setIsYearly(true);
}

</script>