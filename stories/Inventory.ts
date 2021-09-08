import '../dist/css/main.css';

export interface InventoryItemProps {
  sprite?: string;
  selected?: boolean;
  quantity?: number;
  durability?: number;
}

export function getInventoryItemHtml({
  sprite,
  selected,
  quantity,
  durability,
}: InventoryItemProps = {}): string {
  const itemSprite = sprite ? `
              <div class="item-sprite" style="background-image: url('${sprite}')"></div>` : '';
  const itemQuantity = quantity ? `
              <div class="item-quantity">${quantity}</div>` : '';
  const itemDurability = durability ? `
              <div class="item-durability bg-success" style="height: ${durability}%"></div>` : '';

  return `<div class="item-container${selected ? ' selected' : ''}">${itemSprite}${itemQuantity}${itemDurability}
            </div>`;
}

export function getInventoryHtml(): string {
  return `
      <div class="inventory">
        <div class="item-row">
            ${ getInventoryItemHtml() }
            ${ getInventoryItemHtml() }
            ${ getInventoryItemHtml() }
            ${ getInventoryItemHtml() }
            ${ getInventoryItemHtml() }
            ${ getInventoryItemHtml() }
        </div>
        <div class="item-row">
            ${ getInventoryItemHtml() }
            ${ getInventoryItemHtml() }
            ${ getInventoryItemHtml() }
            ${ getInventoryItemHtml() }
            ${ getInventoryItemHtml() }
            ${ getInventoryItemHtml() }
        </div>
        <div class="item-row">
            ${ getInventoryItemHtml() }
            ${ getInventoryItemHtml() }
            ${ getInventoryItemHtml() }
            ${ getInventoryItemHtml() }
            ${ getInventoryItemHtml() }
            ${ getInventoryItemHtml() }
        </div>
        <div class="item-row spaced">
            ${ getInventoryItemHtml() }
            ${ getInventoryItemHtml() }
            ${ getInventoryItemHtml() }
            ${ getInventoryItemHtml() }
            ${ getInventoryItemHtml() }
            ${ getInventoryItemHtml() }
        </div>
        <div class="item-row">
            ${ getInventoryItemHtml({ sprite: 'rifle.ak', quantity: 30, durability: 33 }) }
            ${ getInventoryItemHtml({ sprite: 'syringe.medical' }) }
            ${ getInventoryItemHtml({ sprite: 'jackhammer', durability: 97 }) }
            ${ getInventoryItemHtml() }
            ${ getInventoryItemHtml() }
            ${ getInventoryItemHtml({ sprite: 'explosive.timed', quantity: 7, selected: true }) }
        </div>
    </div>`;
}

export const createInventory = (): HTMLElement => {
  const progress = document.createElement('div');
  progress.innerHTML = getInventoryHtml();

  return progress.children[0] as HTMLElement;
};

export const createInventoryItem = (props: InventoryItemProps): HTMLElement => {
  const progress = document.createElement('div');
  progress.innerHTML = getInventoryItemHtml(props);

  return progress.children[0] as HTMLElement;
};