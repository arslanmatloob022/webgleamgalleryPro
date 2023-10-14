<template>
  <dashboard-one-vue class="component-margin"></dashboard-one-vue>
  <contacts-list-vue class="component-margin"> </contacts-list-vue>
  <customer-support class="component-margin"> </customer-support>
  <document-list class="component-margin"></document-list>
  <lead-list-vue class="component-margin"></lead-list-vue>
  <opertunity-list class="component-margin"></opertunity-list>
</template>

<script>
import DashboardOneVue from "@/components/WGGComponents/ByWebsiteComponents/CRMWebComponents/Dashboards/DashboardOne.vue";
import ContactsListVue from "@/components/WGGComponents/ByWebsiteComponents/CRMWebComponents/ContactsList.vue";
import CustomerSupport from "@/components/WGGComponents/ByWebsiteComponents/CRMWebComponents/CustomerSupport.vue";
import DocumentList from "@/components/WGGComponents/ByWebsiteComponents/CRMWebComponents/DocumentList.vue";
import LeadListVue from "@/components/WGGComponents/ByWebsiteComponents/CRMWebComponents/LeadList.vue";
import OpertunityList from "@/components/WGGComponents/ByWebsiteComponents/CRMWebComponents/OpertunityList.vue";
export default {
  name: "CrmWebPage",
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
