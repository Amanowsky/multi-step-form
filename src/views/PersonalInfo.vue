<template>
    <MainBackground></MainBackground>
    <MainWrapper>
        <StepNumber 
            :actualStep="1">
        </StepNumber>
        <div class="flex flex-col h-full justify-between">
            <MainBox>
                <MainHeader>
                    <template v-slot:title>
                        Personal info
                    </template>
                    <template v-slot:desc>
                        Please provide your name, email address, and phone number.
                    </template>
                </MainHeader>
                <form class="flex flex-col gap-4 mt-5">
                    <MainInput 

                        :inputName="'name'" 
                        :labelText="'Name'" 
                        :inputType="'text'"
                        :placeholder="'e.g. Stephen King'">
                    </MainInput>
                    <MainInput 
                        :inputName="'email'" 
                        :labelText="'Email Address'" 
                        :inputType="'email'"
                        :placeholder="'e.g. stephenking@lorem.com'">
                    </MainInput>
                    <MainInput 
                        :inputName="'phone'" 
                        :labelText="'Phone Number'" 
                        :inputType="'tel'"
                        :placeholder="'e.g. +1 234 567 890'"></MainInput>
                </form>
            </MainBox>
            <TheFooter 
                :nextPath="'/select-your-plan'">
            </TheFooter>
        </div>
    </MainWrapper>
</template>

<script setup lang="ts">
import MainWrapper from "@/components/layout/MainWrapper.vue";
import MainBox from "@/components/layout/MainBox.vue";
import MainBackground from "@/components/layout/MainBackground.vue";
import StepNumber from "@/widgets/StepNumber.vue";
import TheFooter from "@/widgets/TheFooter.vue";
import MainHeader from "@/components/layout/MainHeader.vue";
import MainInput from "@/components/inputs/MainInput.vue";
import { useMainStore } from "@/stores/counter";

const store = useMainStore();



</script>
