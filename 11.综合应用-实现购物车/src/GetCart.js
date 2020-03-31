class Cart {
  constructor() {
    this.list = [];
  }
  add(data) {
    this.list.push(data);
  }
  delete(id) {
    this.list = this.list.filter(item => {
      if (item.id === id) {
        return false;
      }
      return true;
    });
  }
  getList() {
    return this.list
      .map(v => {
        return v.name;
      })
      .join('\n');
  }
}

let getCart = (function() {
  let cart;
  return function() {
    if (!cart) {
      cart = new Cart();
    }
    return cart;
  };
})();

export default getCart;
