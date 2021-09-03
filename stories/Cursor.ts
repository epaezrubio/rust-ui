import '../dist/css/main.css';
import { MouseInteractionElement } from '../lib/interaction-mouse';

export interface CursorProps {
  icon?: string;
  label: string;
}

export function getCursorHtml(): string {
  return `<div id="cursor" style="display: inline-block" class="mouse-interaction-container m-4">
    <img src="images/crate.png" />
</div>
`;
}


export function getCursorHtmlAndScript({ icon = '', label }: CursorProps): string {
  return `${getCursorHtml()}

<script>
  const el = document.getElementById('cursor');
  const mouseInteraction = new MouseInteractionElement(el, { icon: '${icon}', label: '${label}' });

  mouseInteraction.init();
</script>`;
}

export const createCursor = ({ icon, label }: CursorProps): HTMLElement => {
  const cursor = document.createElement('div');
  cursor.innerHTML = getCursorHtml();

  const el = cursor.children[0] as HTMLElement;
  const mouseInteraction = new MouseInteractionElement(el, { icon, label });

  mouseInteraction.init();


  return el;
};
