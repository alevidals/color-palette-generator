import rgbToHex from '@/helpers/colorConverter';
import setFontColor from '@/helpers/setFontColor';
import useFetch from '@/hooks/useFetch';
import { Colors, Rgb } from '@/interfaces/interfaces';
import { computed, ComputedRef, ref } from 'vue';

const url: ComputedRef = computed(() => 'http://colormind.io/api/');
const colorsData = ref(useFetch<any>(url));

let computedColorsData: ComputedRef<Colors[]> = computed(() => {
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

function refreshColors() {
  colorsData.value = useFetch<any>(url);
  computedColorsData = computed(() => {
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
}

export default {
  colorsData,
  computedColorsData,
  refreshColors,
};
