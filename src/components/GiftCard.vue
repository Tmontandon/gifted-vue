
<template>
  <div class="col-4">
    <div class="gift-card">
      <div class="card p-3 my-2">
        <!-- TODO why does this have to be binded? why not put double curly in th quotes? -->
        <!-- TODO Review the difference between @click and v-onclick -->
        <!-- NOTE is it v-on:click or v-onclick -->
        <img :src="gift.url" alt="present" class="img-fluid rounded-1 gift-image" id="giftImage" @click="openGift()" />
        <div class="card-body text-center">
          <h5 class="mb-0 mt-3">
            {{gift.tag}}
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- 
IMG ${this.opened ? this.url : '/assets/img/gift.png'} 
ONCLICK app.giftsController.openGift('${this.opened ? '' : this.id}')
TAG ${this.tag}
-->
<script>
import { Gift } from '../Models/Gift.js';

export default {
  props: {
    gift: {
      type: Gift, required: true
    }
  },

  setup() {
    return {

    }
  }
}
</script>


<style lang="scss" scoped>

</style>