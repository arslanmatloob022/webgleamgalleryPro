<template>
  <dashboard-one-vue class="component-margin"></dashboard-one-vue>
  <contacts-list-vue class="component-margin"> </contacts-list-vue>
  <customer-support class="component-margin"> </customer-support>
  <document-list class="component-margin"></document-list>
  <lead-list-vue class="component-margin"></lead-list-vue>
  <opertunity-list class="component-margin"></opertunity-list>
</template>

<script>
import DashboardOneVue from "@/components/WebComponents/CRMWebComponents/Dashboards/DashboardOne.vue";
import ContactsListVue from "@/components/WebComponents/CRMWebComponents/ContactsList.vue";
import CustomerSupport from "@/components/WebComponents/CRMWebComponents/CustomerSupport.vue";
import DocumentList from "@/components/WebComponents/CRMWebComponents/DocumentList.vue";
import LeadListVue from "@/components/WebComponents/CRMWebComponents/LeadList.vue";
import OpertunityList from "@/components/WebComponents/CRMWebComponents/OpertunityList.vue";

export default {
  name: "CrmWebPage",
  data() {
    return {};
  },
  components: {
    DashboardOneVue,
    ContactsListVue,
    CustomerSupport,
    DocumentList,
    LeadListVue,
    OpertunityList,
  },
};
</script>

<style scoped>
h1 {
  color: orange;
}
.component-margin {
  margin: 0;
}
</style>
