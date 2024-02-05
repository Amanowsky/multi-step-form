import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { usePricesStore } from "./pricesStore";

export const useMainStore = defineStore("store", () => {

 const name = ref("");
 const email = ref("");
 const phone = ref("");
 const selectedPlan = ref("arcade");
 const isYearly = ref(false);
 const selectedAddons = ref(Array());
 const store = usePricesStore();
 selectedAddons.value.push("os")
 selectedAddons.value.push("ls")

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
 const getSelectedAddons = computed<Array<string>>(()=>{
  return selectedAddons.value;
 })
 const getAllCost = computed<Number>(() => {
  let cost = 0;
    selectedAddons.value.forEach(el => {
      cost += el === 'os' ? store.getPriceOs : el === 'ls' ? store.getPriceLs : store.getPriceCp;
    })
    cost += selectedPlan.value === 'arcade' ? store.getPriceArcade : selectedPlan.value === 'advanced' ? store.getPriceAdvanced : store.getPricePro;
  return cost;
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
 function addAddons(val:string):void {
  selectedAddons.value.push(val);
 }
 function removeAddons(index:number):void{
  selectedAddons.value.splice(index,1);
 }




  return {getName, getEmail, getPhone, getSelectedPlan, getIsYearly, getSelectedAddons, getAllCost,
           setName, setEmail, setPhone, setSelectedPlan, setIsYearly, addAddons, removeAddons};
});
