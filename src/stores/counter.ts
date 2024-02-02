import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('store', () => {
  const step = ref(1)
  const showStep = computed(():Number => step.value)
  function increment():void  {
    if(step.value === 4) return
    step.value++
  }
  function decrement():void{
    if(step.value === 1) return
    step.value--;
  }

  return { step, showStep, increment, decrement }
})
