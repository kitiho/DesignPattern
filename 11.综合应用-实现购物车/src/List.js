import $ from 'jquery';
import { GET_LIST } from './config/config';
import CreateItem from './CreateItem';

export default class List {
  constructor(app) {
    this.app = app;
    this.$el = $('<div>');
  }
  loadData() {
    let res = fetch(GET_LIST).then(result => result.json());
    return res;
  }

  initItemList(data) {
    data.forEach(itemData => {
      let item = CreateItem(this, itemData);
      item.init();
    });
  }
  render() {
    this.app.$el.append(this.$el);
  }
  init() {
    this.loadData()
      .then(data => {
        console.log(data);
        this.initItemList(data);
      })
      .then(() => {
        this.render();
      });
  }
}
