import { Story, Meta } from '@storybook/html';
import { Items } from '../lib/items';
import { createInventory, createInventoryItem, getInventoryHtml, getInventoryItemHtml, InventoryItemProps } from './Inventory';
import { itemsControl } from './items';

export default {
  title: 'Components/Inventory',
} as Meta;

const InventoryTemplate: Story = () => {
  return createInventory();
};

export const Inventory = InventoryTemplate.bind({});
Inventory.parameters = {
  docs: {
    source: {
      code: getInventoryHtml()
    },
  },
};

const inventoryItemProps: InventoryItemProps = {
  sprite: Items.PICKAXE,
  quantity: undefined,
  durability: undefined,
  selected: false
};
const InventoryItemTemplate: Story = (args: InventoryItemProps) => {
  return createInventoryItem(args);
};
export const InventoryItem = InventoryItemTemplate.bind({});
InventoryItem.args = inventoryItemProps;
InventoryItem.argTypes = {
  sprite: itemsControl,
  quantity: {
      control: { type: 'number', min: 0 },
  },
  durability: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
  }
};
InventoryItem.parameters = {
  docs: {
    source: {
      code: getInventoryItemHtml(inventoryItemProps)
    },
  },
};