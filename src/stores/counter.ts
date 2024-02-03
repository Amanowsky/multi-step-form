import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMainStore = defineStore("store", () => {

 const name = ref("");
 const email = ref("");
 const phone = ref("");
 const selectedPlan = ref("arcade");
 const isYearly = ref(false);

 const getName = computed<string>(() => {
  return name.value;
 })
 const getEmail = computed<string>(() => {
  return email.value;
 })
 const getPhone = computed<string>(() => {
  return phone.value;
 })
 const getSelectedPlan = computed<string>(() => {
  return selectedPlan.value;
 })
 const getIsYearly = computed<boolean>(() => {
  return isYearly.value;
 })

 function setName(val:string):void {
  name.value = val;
 }
 function setEmail(val:string):void {
  email.value = val;
 }
 function setPhone(val:string):void {
  phone.value = val;
 }
 function setSelectedPlan(val:string):void {
  selectedPlan.value = val;
 }
 function setIsYearly(val:boolean):void {
  isYearly.value = val;
 }



  return {getName, getEmail, getPhone, getSelectedPlan, getIsYearly, setName, setEmail, setPhone, setSelectedPlan, setIsYearly};
});
