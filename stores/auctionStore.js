import { decorate, observable, computed } from "mobx";
import { instance } from "./instance";

//Data
import auctions from "../auctionData";
import auctionItemData from "../auctionItemData";

class AuctionStore {
  categories = [];
  auctions = [];
  catObj = null;
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

  setCatID = (id) => {
    this.catObj = this.categories.find((categorie) => categorie.id === id);
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
      await instance.post("auction/create", auction);
    } catch (err) {
      console.error(err);
    }
  };

  createItems = async (x) => {
    try {
      await instance.post("item/create", x);
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
  submiAuctionCharg = async (Charg) => {
    try {
      await instance.post("", Charg);
    } catch (err) {
      console.log(err);
    }
  };

  submitBids = async (bid) => {
    try {
      await instance.post("", bid);
    } catch (err) {
      console.log(err);
    }
  };

  get filterAuctionsList() {
    if (this.catObj) {
      return this.auctions.filter(
        (auction) => auction.category === this.catObj.id
      );
    }
  }
}

decorate(AuctionStore, {
  categories: observable,
  auctions: observable,
  auctionItem: observable,
  loadingCat: observable,
  loadingAuc: observable,
  catObj: observable,
  filterAuctionsList: computed,
});

const auctionStore = new AuctionStore();
auctionStore.fetchCategories();
auctionStore.fetchAuctions();
export default auctionStore;
