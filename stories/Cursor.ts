import '../dist/css/main.css';

import { MouseInteractionElement } from '../lib/interaction-mouse';
import { Items } from '../lib/items';

export interface CursorProps {
  icon?: string;
  label: string;
  image?: string;
}

export function getCursorHtml(props: CursorProps): string {
  return `<div id="cursor" style="display: inline-block" class="mouse-interaction-container m-4">
    <img src="${props.image}" />
</div>`;
}


export function getCursorHtmlAndScript(props: CursorProps): string {
  return `${getCursorHtml(props)}

<script>
  const el = document.getElementById('cursor');
  const mouseInteraction = new MouseInteractionElement(el, { icon: '${props.icon}', label: '${props.label}' });

  mouseInteraction.init();
</script>`;
}

export const createCursor = (props: CursorProps): HTMLElement => {
  const cursor = document.createElement('div');
  cursor.innerHTML = getCursorHtml(props);

  const el = cursor.children[0] as HTMLElement;
  const mouseInteraction = new MouseInteractionElement(el, props);

  mouseInteraction.init();


  return el;
};
