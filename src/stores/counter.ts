import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMainStore = defineStore("store", () => {

 const name = ref("");
 const email = ref("");
 const phone = ref("");

 const getName = computed<string>(() => {
  return name.value;
 })
 const getEmail = computed<string>(() => {
  return email.value;
 })
 const getPhone = computed<string>(() => {
  return phone.value;
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



  return { name ,email ,phone ,getName, getEmail, getPhone, setName, setEmail, setPhone };
});
