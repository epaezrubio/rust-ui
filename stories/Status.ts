import '../dist/css/main.css';
import { createProgress, getProgressHtml } from './Progress';

export interface StatusProps {
  style: 'success' | 'info' | 'warning' | 'danger';
  min?: number;
  max?: number;
  value?: number;
  lightValue?: number;
  icon?: string;
}

export function getStatusHtml({ style, min, max, value, lightValue, icon }: StatusProps): string {
  const progress = createProgress({ style, min, max, value, lightValue, percentage: false }).outerHTML;

  return `
    <div class="feature-progress">
        <i class="feature-progress-icon material-icons">${icon}</i>
        ${progress}
    </div>`;

  const healthProgress = createProgress({ style: 'success', min: 0, max: 100, value: 75, lightValue: 5, percentage: false }).outerHTML;
  const drinkProgress = createProgress({ style: 'info', min: 0, max: 255, value: 255, lightValue: 0, percentage: false }).outerHTML;
  const foodProgress = createProgress({ style: 'warning', min: 0, max: 255, value: 100, lightValue: 0, percentage: false }).outerHTML;

  return `
    <div class="feature-progress">
        <i class="feature-progress-icon material-icons">add</i>
        ${healthProgress}
    </div>
    <div class="feature-progress">
        <i class="feature-progress-icon material-icons">local_drink</i>
        ${drinkProgress}
    </div>
    <div class="feature-progress">
        <i class="feature-progress-icon material-icons">restaurant_menu</i>
        ${foodProgress}
    </div>`;
}

export const createStatus = (props: StatusProps): HTMLElement => {
  const progress = document.createElement('div');
  progress.innerHTML = getStatusHtml(props);

  return progress.children[0] as HTMLElement;
};
