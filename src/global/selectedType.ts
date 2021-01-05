import { ColorTypes } from '@/enum/enums';
import { ref } from 'vue';

const selectedType = ref(ColorTypes.rgb);

function changeSelectedType(colorType: ColorTypes) {
  selectedType.value = colorType;
}

export default {
  selectedType,
  changeSelectedType,
};
