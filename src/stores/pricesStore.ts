import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useMainStore } from "./mainStore";

export const usePricesStore = defineStore("prices", () => {

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

const store = useMainStore();

const getPriceArcade = computed<number>(() => {
    return store.getIsYearly ? ARCADEPRICE_Y : ARCADEPRICE_M;
})
const getPriceAdvanced = computed<number>(() => {
    return store.getIsYearly ? ADVANCEDPRICE_Y : ADVANCEDPRICE_M;
})
const getPricePro = computed<number>(() => {
    return store.getIsYearly ? PROPRICE_Y : PROPRICE_M;
})
const getPriceOs = computed<number>(() => {
    return store.getIsYearly ? OSPRICE_Y : OSPRICE_M;
})
const getPriceLs = computed<number>(() => {
    return store.getIsYearly ? LSPRICE_Y : LSPRICE_M;
})
const getPriceCp = computed<number>(() => {
    return store.getIsYearly ? CPPRICE_Y : CPPRICE_M;
})

const getStringPriceArcade = computed<String>(() => {
    return store.getIsYearly ? `$${ARCADEPRICE_Y}/yr` : `$${ARCADEPRICE_M}/mo`
})
const getStringPriceAdvanced = computed<String>(() => {
    return store.getIsYearly ? `$${ADVANCEDPRICE_Y}/yr` : `$${ADVANCEDPRICE_M}/mo`
})
const getStringPricePro = computed<String>(() => {
    return store.getIsYearly ? `$${PROPRICE_Y}/yr` : `$${PROPRICE_M}/mo`
})
const getStringPriceOs = computed<String>(() => {
    return store.getIsYearly ? `+$${OSPRICE_Y}/yr` : `+$${OSPRICE_M}/mo`
})
const getStringPriceLs = computed<String>(() => {
    return store.getIsYearly ? `+$${LSPRICE_Y}/yr` : `+$${LSPRICE_M}/mo`
})
const getStringPriceCp = computed<String>(() => {
    return store.getIsYearly ? `+$${CPPRICE_Y}/yr` : `+$${CPPRICE_M}/mo`
})


  return {getPriceArcade, getPriceAdvanced, getPricePro, getPriceOs, getPriceLs, getPriceCp,
    getStringPriceArcade, getStringPriceAdvanced, getStringPricePro, getStringPriceOs, getStringPriceLs, getStringPriceCp};
});
