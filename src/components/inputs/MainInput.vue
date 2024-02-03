<template>
    <div>
        <label class="text-primary-marineBlue text-[0.85rem]"
            :for="prop.inputName">
            {{ prop.labelText }}
        </label>
        <input class="w-full h-6 p-5 border rounded-md border-neutral-lightGray"
            :value="prop.startValue"
            :name="inputName" 
            :placeholder="prop.placeholder" 
            :type="prop.inputType">
    </div>
</template>


<script setup lang="ts">

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
        required: false
    }
})
 









</script>

