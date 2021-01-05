<template>
  <div v-if="!colorsData.loading" class="row m-0 colors">
    <div
      class="col color"
      v-for="color in computedColorsData"
      :key="color"
      :style="`background-color: ${color.hex}`"
    >
      <div :class="`hex-color ${color.fontColor}`">
        {{ color.rgb.fullColor }}
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

export default {
  setup() {
    const url: ComputedRef = computed(() => 'http://colormind.io/api/');
    const colorsData = ref(useFetch<any>(url));
    const computedColorsData: ComputedRef<Colors[]> = computed(() => {
      const colors: Colors[] = [];
      if (colorsData.value.data) {
        colorsData.value.data.result.forEach((data: any) => {
          const rgbColor: Rgb = {
            red: data[0],
            green: data[1],
            blue: data[2],
            fullColor: `rgb(${data[0]},${data[1]},${data[2]})`,
          };
          const hexColor = rgbToHex(rgbColor);
          const color: Colors = {
            rgb: rgbColor,
            hex: `#${hexColor[0]}${hexColor[1]}${hexColor[2]}`,
            fontColor: setFontColor([data[0], data[1], data[2]]),
          };
          colors.push(color);
        });
        return colors;
      }
      return [];
    });

    return {
      colorsData,
      computedColorsData,
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
