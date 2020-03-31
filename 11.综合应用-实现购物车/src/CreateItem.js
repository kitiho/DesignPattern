import Item from './Item';

function creatteDiscount(itemData) {
  return new Proxy(itemData, {
    get(target, key, receiver) {
      if (key === 'name') {
        return `${target[key]}[折扣]`;
      }
      if (key === 'price') {
        return target[key] * 0.8;
      }
      return target[key];
    }
  });
}
export default function(list, itemData) {
  if (itemData.discount) {
    itemData = creatteDiscount(itemData);
  }
  return new Item(list, itemData);
}
