<template>
  <div class="container-fluid">
    <!-- SECTION Submit Section! -->
    <section class="row">
      <!-- TODO Make Submit Section -->
    </section>
    <!-- SECTION Gift Cards! -->
    <section class="row">
      <!-- TODO What does v-for do!? -->
      <GiftCard v-for="g in gifts" :gift="g" />
    </section>
  </div>

</template>
      
<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { giftService } from '../services/GiftService.js';


export default {
  setup() {
    // debugger
    async function getGifts() {
      try {
        await giftService.getGifts()
      } catch (error) {
        console.error(error)
      }
    }
    getGifts()
    return {
      gifts: computed(() => AppState.gifts)
    }
  }

}
</script>
      
<style scoped lang="scss">

</style>
