import { decorate, observable } from "mobx";
import { instance } from "./instance";

//Data
import categories from "../categoriesData";

class AuctionStore {
  categoryList = categories;
  auctions = [];
  auctionItems = [];
  loading = true;

  fetchCategories = async () => {
    try {
      const res = await instance.get("");
      const categories = res.data;
      this.categories = categories;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };

  fetchAuctions = async () => {
    try {
      const res = await instance.get("");
      const auctions = res.data;
      this.auctions = auctions;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };

  fetchAuctionItems = async () => {
    try {
      const res = await instance.get("");
      const auctionItems = res.data;
      this.auctionItems = auctionItems;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(AuctionStore, {
  categoryList: observable,
  auctions: observable,
  auctionItems: observable,
  loading: observable
});

const auctionStore = new AuctionStore();

export default auctionStore;
