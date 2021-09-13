import '../dist/css/main.css';

import { CircularMenu } from '../lib/circular-menu';

export interface MenuProps {
  width: number;
  height: number;
  items: number;
}

export function getMenuHtml(props: MenuProps): string {
  return `<div id="circular-menu" style="width: ${props.width}px; height: ${props.height}px;">`;
}


export function getMenuHtmlAndScript(props: MenuProps): string {
  return `${getMenuHtml(props)}

<script>
  const buildingBlocks = [
      { cost: { quantity: 75, resource: 'Wood', stock: 1230 }, description: 'Building block of type door', label: 'Door', sprite: 'images/circular-menu/door.png' },
      { cost: { quantity: 25, resource: 'Wood', stock: 1230 }, description: 'Building block of type floor-frame-triangle', label: 'Floor-frame-triangle', sprite: 'images/circular-menu/floor-frame-triangle.png' },
      { cost: { quantity: 70, resource: 'Wood', stock: 1230 }, description: 'Building block of type floor-frame', label: 'Floor frame', sprite: 'images/circular-menu/floor-frame.png' },
      { cost: { quantity: 105, resource: 'Wood', stock: 1230 }, description: 'Building block of type foundation-ramp', label: 'Foundation ramp', sprite: 'images/circular-menu/foundation-ramp.png' },
      { cost: { quantity: 20, resource: 'Wood', stock: 1230 }, description: 'Building block of type foundation-stairs', label: 'Foundation stairs', sprite: 'images/circular-menu/foundation-stairs.png' },
      { cost: { quantity: 75, resource: 'Wood', stock: 1230 }, description: 'Building block of type foundation-triangle', label: 'Foundation triangle', sprite: 'images/circular-menu/foundation-triangle.png' },
      { cost: { quantity: 75, resource: 'Wood', stock: 1230 }, description: 'Building block of type foundation', label: 'Foundation', sprite: 'images/circular-menu/foundation.png' },
      { cost: { quantity: 15, resource: 'Wood', stock: 1230 }, description: 'Building block of type stairs-2', label: 'Stairs 2', sprite: 'images/circular-menu/stairs-2.png' },
      { cost: { quantity: 2000, resource: 'Wood', stock: 1230 }, description: 'Building block of type stairs-triangle-1', label: 'Stairs triangle 1', sprite: 'images/circular-menu/stairs-triangle-1.png' },
      { cost: { quantity: 75, resource: 'Wood', stock: 1230 }, description: 'Building block of type stairs-triangle-2', label: 'Stairs triangle 2', sprite: 'images/circular-menu/stairs-triangle-2.png' },
      { cost: { quantity: 13, resource: 'Wood', stock: 1230 }, description: 'Building block of type wall-half', label: 'Wall half', sprite: 'images/circular-menu/wall-half.png' },
      { cost: { quantity: 75, resource: 'Wood', stock: 1230 }, description: 'Building block of type wall-low', label: 'Wall low', sprite: 'images/circular-menu/wall-low.png' },
      { cost: { quantity: 120, resource: 'Wood', stock: 1230 }, description: 'Building block of type wall', label: 'Wall', sprite: 'images/circular-menu/wall.png' },
      { cost: { quantity: 75, resource: 'Wood', stock: 1230 }, description: 'Building block of type window', label: 'Window', sprite: 'images/circular-menu/window.png' },
  ];

  const el = document.getElementById('circular-menu');
  const menu = new CircularMenu(el, buildingBlocks);

  menu.init();
</script>`;
}

export const createMenu = (props: MenuProps): HTMLElement => {
  const menu = document.createElement('div');
  menu.innerHTML = getMenuHtml(props);

  const el = menu.children[0] as HTMLElement;
  el.style.margin = '2rem';

  const buildingBlocks = [
      { cost: { quantity: 75, resource: 'Wood', stock: 1230 }, description: 'Building block of type door', label: 'Door', sprite: 'images/circular-menu/door.png' },
      { cost: { quantity: 25, resource: 'Wood', stock: 1230 }, description: 'Building block of type floor-frame-triangle', label: 'Floor-frame-triangle', sprite: 'images/circular-menu/floor-frame-triangle.png' },
      { cost: { quantity: 70, resource: 'Wood', stock: 1230 }, description: 'Building block of type floor-frame', label: 'Floor frame', sprite: 'images/circular-menu/floor-frame.png' },
      { cost: { quantity: 105, resource: 'Wood', stock: 1230 }, description: 'Building block of type foundation-ramp', label: 'Foundation ramp', sprite: 'images/circular-menu/foundation-ramp.png' },
      { cost: { quantity: 20, resource: 'Wood', stock: 1230 }, description: 'Building block of type foundation-stairs', label: 'Foundation stairs', sprite: 'images/circular-menu/foundation-stairs.png' },
      { cost: { quantity: 75, resource: 'Wood', stock: 1230 }, description: 'Building block of type foundation-triangle', label: 'Foundation triangle', sprite: 'images/circular-menu/foundation-triangle.png' },
      { cost: { quantity: 75, resource: 'Wood', stock: 1230 }, description: 'Building block of type foundation', label: 'Foundation', sprite: 'images/circular-menu/foundation.png' },
      { cost: { quantity: 15, resource: 'Wood', stock: 1230 }, description: 'Building block of type stairs-2', label: 'Stairs 2', sprite: 'images/circular-menu/stairs-2.png' },
      { cost: { quantity: 2000, resource: 'Wood', stock: 1230 }, description: 'Building block of type stairs-triangle-1', label: 'Stairs triangle 1', sprite: 'images/circular-menu/stairs-triangle-1.png' },
      { cost: { quantity: 75, resource: 'Wood', stock: 1230 }, description: 'Building block of type stairs-triangle-2', label: 'Stairs triangle 2', sprite: 'images/circular-menu/stairs-triangle-2.png' },
      { cost: { quantity: 13, resource: 'Wood', stock: 1230 }, description: 'Building block of type wall-half', label: 'Wall half', sprite: 'images/circular-menu/wall-half.png' },
      { cost: { quantity: 75, resource: 'Wood', stock: 1230 }, description: 'Building block of type wall-low', label: 'Wall low', sprite: 'images/circular-menu/wall-low.png' },
      { cost: { quantity: 120, resource: 'Wood', stock: 1230 }, description: 'Building block of type wall', label: 'Wall', sprite: 'images/circular-menu/wall.png' },
      { cost: { quantity: 75, resource: 'Wood', stock: 1230 }, description: 'Building block of type window', label: 'Window', sprite: 'images/circular-menu/window.png' },
  ];

  const circularMenu = new CircularMenu(el, buildingBlocks.slice(0, props.items), props);
  circularMenu.init();

  return el;
};