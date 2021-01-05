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

<style lang="scss">
body {
  max-height: 100vh;
  height: 100vh;
  background-color: #0c0b10;
}
</style>
