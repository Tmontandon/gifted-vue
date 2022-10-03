import { AppState } from "../AppState.js"
import { Gift } from "../Models/Gift.js";
import { giftApi } from "./AxiosService.js"

class GiftService {

  async getGifts() {
    const res = await giftApi.get('')
    console.log(res.data);
    AppState.gifts = res.data.map(g => new Gift(g))
  }
}

export const giftService = new GiftService