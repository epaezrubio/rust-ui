import { Items } from '../lib/items';


function getItemsOptions() {
  const itemOptions = [];

  for (const value in Items) {
   itemOptions.push(value);
  }

  return itemOptions;
}

export const itemsControl = {
    type: 'select',
    options: getItemsOptions(),
    mapping: Items,
};
