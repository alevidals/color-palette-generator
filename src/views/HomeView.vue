<template>
  <ColorsComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ColorsComponent from '@/components/ColorsComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    ColorsComponent,
  },
});
</script>
