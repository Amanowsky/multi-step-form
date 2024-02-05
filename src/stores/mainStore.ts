import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMainStore = defineStore("store", () => {

const ARCADEPRICE_M = 9;
const ADVANCEDPRICE_M = 12;
const PROPRICE_M = 15;
const OSPRICE_M = 1;
const LSPRICE_M = 2;
const CPPRICE_M = 2;
const ARCADEPRICE_Y = 90;
const ADVANCEDPRICE_Y = 120;
const PROPRICE_Y = 150;
const OSPRICE_Y = 10;
const LSPRICE_Y = 20;
const CPPRICE_Y = 20;


 const name = ref("");
 const email = ref("");
 const phone = ref("");
 const selectedPlan = ref("arcade");
 const isYearly = ref(false);
 const selectedAddons = ref(Array());

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
  if(isYearly.value === true){
    selectedAddons.value.forEach(el => {
      cost += el === 'os' ? OSPRICE_Y : el === 'ls' ? LSPRICE_Y : CPPRICE_Y;
    })
    cost += selectedPlan.value === 'arcade' ? ARCADEPRICE_Y : selectedPlan.value === 'advanced' ? ADVANCEDPRICE_Y : PROPRICE_Y;
  }else{
    selectedAddons.value.forEach(el => {
      cost += el === 'os' ? OSPRICE_M : el === 'ls' ? LSPRICE_M : CPPRICE_M;
    })
    cost += selectedPlan.value === 'arcade' ? ARCADEPRICE_M : selectedPlan.value === 'advanced' ? ADVANCEDPRICE_M : PROPRICE_M;
  }
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
 function getPriceY(name: string): Number | null {
    return name === 'arcade' ? ARCADEPRICE_Y 
          :name === 'advanced' ? ADVANCEDPRICE_Y
          :name === 'pro' ? PROPRICE_Y
          :name === 'os' ? OSPRICE_Y
          :name === 'ls' ? LSPRICE_Y
          :name === 'cp' ? CPPRICE_Y : null
 }
 function getPriceM(name: string): Number | null {
  return name === 'arcade' ? ARCADEPRICE_M
          :name === 'advanced' ? ADVANCEDPRICE_M
          :name === 'pro' ? PROPRICE_M
          :name === 'os' ? OSPRICE_M
          :name === 'ls' ? LSPRICE_M
          :name === 'cp' ? CPPRICE_M : null
 }



  return {getName, getEmail, getPhone, getSelectedPlan, getIsYearly, getSelectedAddons, getAllCost,
           setName, setEmail, setPhone, setSelectedPlan, setIsYearly, addAddons, removeAddons, getPriceY, getPriceM};
});
