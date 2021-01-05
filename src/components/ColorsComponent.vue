<template>
  <div v-if="!colorsData.loading" class="row m-0 colors">
    <div
      class="col color"
      v-for="color in computedColorsData"
      :key="color"
      :style="`background-color: ${color.hex}`"
    >
      <div :class="`hex-color ${color.fontColor}`">
        <span v-if="selectedType == ColorTypes.rgb">
          {{ color.rgb.fullColor }}
        </span>
        <span v-if="selectedType == ColorTypes.hex">
          {{ color.hex }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line
import { computed, ComputedRef, onMounted, ref } from 'vue';
import useFetch from '@/hooks/useFetch';
import { Colors, Rgb } from '@/interfaces/interfaces';
import rgbToHex from '@/helpers/colorConverter';
import setFontColor from '@/helpers/setFontColor';
import { ColorTypes } from '@/enum/enums';
import selectedType from '@/global/selectedType';
import colorsGlobal from '@/global/colorsGlobal';

export default {
  setup() {
    return {
      colorsData: colorsGlobal.colorsData,
      computedColorsData: colorsGlobal.computedColorsData,
      ColorTypes,
      selectedType: selectedType.selectedType,
    };
  },
};
</script>
<style scoped lang="scss">
.middle {
  display: flex;
  height: calc(100vh - 50px);
  justify-content: center;
  align-items: center;
}
.colors {
  height: calc(100vh - 50px);

  .color {
    color: white;
    font-size: 1.5rem;
    position: relative;
    .hex-color {
      text-align: center;
      width: 100%;
      bottom: 50px;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
    }
  }
}
</style>
