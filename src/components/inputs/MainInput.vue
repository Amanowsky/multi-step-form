<template>
    <div>
        <label class="text-primary-marineBlue text-[0.85rem] xl:text-[1.2rem]"
            :for="prop.inputName">
            {{ prop.labelText }}
        </label>
        <input class="w-full h-6 p-5 border rounded-md border-neutral-lightGray xl:h-16
         xl:rounded-xl xl:text-[1.3rem] xl:mt-2"
            @input="emit('writeAction', value, prop.inputName)"
            v-model="value"
            :name="inputName" 
            :placeholder="prop.placeholder" 
            :type="prop.inputType">
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'; 

/** Store input value */
const value = ref("");


const prop = defineProps({
    labelText: {
        type: String,
        required: true
    },
    inputName: {
        type: String,
        required: true
    },
    inputType: {
        type: String,
        default: "text"
    },
    placeholder: {
        type: String,
        required: false
    },
    startValue: {
        type: String,
        required: true
    }
})

/** Set input value to prop start value */
value.value = prop.startValue;

const emit = defineEmits<{
    /** Emit event after write to input */
    (e: 'writeAction', value: string, name: string): void
}>()






</script>

