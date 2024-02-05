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
                <div class="flex flex-col gap-5 mt-8">
                <SelectAddons 
                    :isSelected="store.getSelectedAddons.find(val => val === 'os') ? true : false"
                    @isActive="setActiveAddons('os')">
                    <template v-slot:addonTitle>Online service</template>
                    <template v-slot:addonDesc>Access to multiplayer games</template>
                    <template v-slot:addonCost>{{ prices.getStringPriceOs }}</template>
                </SelectAddons>
                <SelectAddons 
                    :isSelected="store.getSelectedAddons.find(val => val === 'ls') ? true : false"
                    @isActive="setActiveAddons('ls')">
                    <template v-slot:addonTitle>Large storage</template>
                    <template v-slot:addonDesc>Extra 1TB of cloud save</template>
                    <template v-slot:addonCost>{{ prices.getStringPriceLs }}</template>
                </SelectAddons>
                <SelectAddons 
                    :isSelected="store.getSelectedAddons.find(val => val === 'cp') ? true : false"
                    @isActive="setActiveAddons('cp')">
                    <template v-slot:addonTitle>Customazible profile</template>
                    <template v-slot:addonDesc>Custom theme on your profile</template>
                    <template v-slot:addonCost>{{ prices.getStringPriceCp }}</template>
                </SelectAddons>
                </div>
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
import SelectAddons from '@/widgets/SelectAddons.vue';
import { useMainStore } from '@/stores/mainStore';
import { usePricesStore } from "@/stores/pricesStore";
import { computed } from "vue";

const store = useMainStore();
const prices = usePricesStore();



/**
 * Add or remove clicked addons in store
 * @param name name of clicked addon
 */
const setActiveAddons = (name: string):void => {
    if(store.getSelectedAddons.find(val => val === name)){
        const index = store.getSelectedAddons.findIndex(val => val === name);
        store.removeAddons(index);
    }else{
        store.addAddons(name);
    }
}


</script>@/stores/mainStore