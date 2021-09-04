import '../dist/css/main.css';

export interface DurabilityProps {
  min?: number;
  max?: number;
  value?: number;
  valueLabel?: string;
}

export function getDurabilityHtml({
  min = 0,
  max = 100,
  value = 20,
  valueLabel = '',
}: DurabilityProps): string {
  const percentValue = Math.round(((value - min) / (max - min)) * 100);

  return `
<div class="durability-progress">
    <div class="durability-progress-text">
        <span class="durability-progress-stability">${valueLabel ? `${Math.floor(percentValue)}% ${valueLabel}` : ''}</span>
        <span class="durability-progress-health">${value} / ${max}</span>
    </div>
    <div class="durability-progress-bar progress">
        <div class="progress-bar" role="progressbar" style="width: ${percentValue}%" aria-valuenow="${percentValue}" aria-valuemin="0"
            aria-valuemax="100"></div>
    </div>
</div>`;
}

export const createDurability = (props: DurabilityProps): HTMLElement => {
  const progress = document.createElement('div');
  progress.innerHTML = getDurabilityHtml(props);

  return progress.children[0] as HTMLElement;
};
