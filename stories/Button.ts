import '../dist/css/main.css';

export interface ButtonProps {
  style: 'primary' | 'secondary' | 'success' | 'danger' | 'link';
  label: string;
}

export function getButtonHtml({
  style = 'primary',
  label,
}: ButtonProps): string {
   return `<a class="btn btn-${style}">${label}</a>`;
}


export const createButton = ({
  style = 'primary',
  label,
}: ButtonProps) : HTMLElement => {
  const btn = document.createElement('div');
  btn.innerHTML = getButtonHtml({ style, label });

  return btn.children[0] as HTMLElement;
};
