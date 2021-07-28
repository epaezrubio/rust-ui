import '../dist/css/main.css';

export interface ProgressProps {
  style: 'success' | 'info' | 'warning' | 'danger';
  min?: number;
  max?: number;
  value?: number;
  lightValue?: number;
}

export function getProgressHtml({
  style = 'success',
  min = 0,
  max = 100,
  value = 20,
  lightValue = 5,
}: ProgressProps): string {
  return `
<div class="progress progress-${style}">
  <div class="progress-label">${value}%</div>
  <div class="progress-bar bg-${style}" role="progressbar" style="width: ${value}%" aria-valuenow="${value}" aria-valuemin="${min}"
      aria-valuemax="${max}"></div>
  <div class="progress-bar bg-light-${style}" role="progressbar" style="width: ${lightValue}%" aria-valuenow="${lightValue}"
      aria-valuemin="${min}" aria-valuemax="${max}"></div>
</div>`;
}

export const createProgress = ({
  style = 'success',
  min = 0,
  max = 100,
  value = 20,
  lightValue = 5,
}: ProgressProps): HTMLElement => {
  const progress = document.createElement('div');

  const percentValue = Math.round(((value - min) / (max - min)) * 100);
  const percentLightValue = Math.round(((lightValue - min) / (max - min)) * 100);

  progress.innerHTML = getProgressHtml({ style, min, max, value: percentValue, lightValue: percentLightValue });

  return progress.children[0] as HTMLElement;
};
