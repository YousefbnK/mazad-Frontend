import { decorate, observable } from "mobx";
import { instance } from "./instance";

//Data
import auctions from "../auctionData";
import auctionItemData from "../auctionItemData";

class AuctionStore {
  categories = [];
  auctions = [];
  auctionItem = auctionItemData;
  loadingCat = true;
  loadingAuc = true;

  fetchCategories = async () => {
    try {
      const res = await instance.get("category/");
      const categories = res.data;
      this.categories = categories;
      this.loadingCat = false;
    } catch (err) {
      console.error(err);
    }
  };

  fetchAuctions = async () => {
    try {
      const res = await instance.get("auction/");
      const auctions = res.data;
      this.auctions = auctions;
      this.loadingAuc = false;
    } catch (err) {
      console.error(err);
    }
  };

  createAuctions = async (auction) => {
    try {
      await instance.get("auction/create", auction);
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

  submitBids = async (bid) => {
    try {
      await instance.post("", bid);
    } catch (err) {
      console.log(err);
    }
  };
}

decorate(AuctionStore, {
  categories: observable,
  auctions: observable,
  auctionItem: observable,
  loadingCat: observable,
  loadingAuc: observable,
});

const auctionStore = new AuctionStore();
auctionStore.fetchCategories();
auctionStore.fetchAuctions();
export default auctionStore;
