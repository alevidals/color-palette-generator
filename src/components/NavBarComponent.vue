<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#"> -->
      <img src="../assets/icon.png" height="30" alt="" loading="lazy" />
      <!-- </a> -->
      <ul class="navbar-nav">
        <li class="nav-item me-2">
          <div class="dropdown">
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              Color type
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li
                class="dropdown-item text-uppercase"
                @click="changeSelectedType(ColorTypes.rgb)"
              >
                Rgb
              </li>
              <li
                class="dropdown-item text-uppercase"
                @click="changeSelectedType(ColorTypes.hex)"
              >
                Hex
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item me-2">
          <button
            type="button"
            class="btn btn-primary"
            @click="refreshColors()"
          >
            Refresh
          </button>
        </li>
        <li class="nav-item">
          <button type="button" class="btn btn-primary" @click="generatePDF()">
            Generate PDF
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import selectedType from '@/global/selectedType';
import colorsGlobal from '@/global/colorsGlobal';
import { ColorTypes } from '@/enum/enums';
import createPDF from '@/helpers/createPDF';

export default {
  setup() {
    function changeSelectedType(colorType: ColorTypes) {
      selectedType.changeSelectedType(colorType);
    }

    function refreshColors() {
      colorsGlobal.refreshColors();
    }

    function generatePDF() {
      createPDF(colorsGlobal.computedColorsData);
    }

    return {
      changeSelectedType,
      ColorTypes,
      refreshColors,
      generatePDF,
    };
  },
};
</script>
<style scoped lang="scss">
nav {
  height: 50px;
}
</style>
