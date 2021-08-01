import '../dist/css/main.css';

export interface ProgressProps {
  style: 'success' | 'info' | 'warning' | 'danger';
  min?: number;
  max?: number;
  value?: number;
  label?: string;
  lightValue?: number;
  percentage?: boolean;
}

export function getProgressHtml({
  style = 'success',
  min = 0,
  max = 100,
  value = 20,
  lightValue = 5,
  percentage = true
}: ProgressProps): string {
  const percentValue = Math.round(((value - min) / (max - min)) * 100);
  const percentLightValue = Math.round(((lightValue - min) / (max - min)) * 100);

  return `
<div class="progress progress-${style}">
  <div class="progress-label">${value}${percentage ? '%' : ''}</div>
  <div class="progress-bar bg-${style}" role="progressbar" style="width: ${percentValue}%" aria-valuenow="${value}" aria-valuemin="${min}"
      aria-valuemax="${max}"></div>
  <div class="progress-bar bg-light-${style}" role="progressbar" style="width: ${percentLightValue}%" aria-valuenow="${lightValue}"
      aria-valuemin="${min}" aria-valuemax="${max}"></div>
</div>`;
}

export const createProgress = ({
  style = 'success',
  min = 0,
  max = 100,
  value = 20,
  lightValue = 5,
  percentage = true,
}: ProgressProps): HTMLElement => {
  const progress = document.createElement('div');

  progress.innerHTML = getProgressHtml({ style, min, max, value, lightValue, percentage });

  return progress.children[0] as HTMLElement;
};
