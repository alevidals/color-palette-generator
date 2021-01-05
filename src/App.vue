<template>
  <NavBarComponent />
  <router-view />
</template>

<script lang="ts">
import NavBarComponent from '@/components/NavBarComponent.vue';

export default {
  components: {
    NavBarComponent,
  },
};
</script>

<style lang="scss"></style>
