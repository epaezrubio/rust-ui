export interface MouseInteractionOptions {
  label: string;
  icon?: string;
}

export class MouseInteractionElement {
  private element : HTMLDivElement | null = null;
  private labelElement : HTMLDivElement | null = null;
  private iconElement : HTMLDivElement | null = null;

  constructor(private target: HTMLElement, private options: MouseInteractionOptions) {
  }

  private onMouseEnter = (event: MouseEvent) => {
    if (!this.element) {
      return;
    }

    this.element.style.display = 'block';
    this.element.style.transform = `translate(${event.offsetX}px, ${event.offsetY}px)`;
  };

  private onMouseMove = (event: MouseEvent) => {
    if (!this.element) {
      return;
    }

    this.element.style.display = 'block';
    this.element.style.transform = `translate(${event.offsetX}px, ${event.offsetY}px)`;
  };

  private onMouseOut = () => {
    if (!this.element) {
      return;
    }

    this.element.style.display = 'none';
  };

  public setOptions (options: MouseInteractionOptions) {
    if (this.labelElement) {
      this.labelElement.innerText = options.label;
    }

    if (this.iconElement) {
      if (options.icon) {
        this.iconElement.innerText = options.label;
        this.iconElement.style.display = 'block';
      } else {
        this.iconElement.innerText = '';
        this.iconElement.style.display = 'none';
      }
    }
  }

  public init(): void {
    this.element = document.createElement('div');
    this.element.classList.add('mouse-interaction');

    this.element.innerHTML = `
      <div class="mouse-interaction-content">
        <i class="material-icons mouse-interaction-icon">${this.options.icon}</i>
        <label class="mouse-interaction-label">${this.options.label}</label>
      </div>
      <i class="mouse-interaction-cursor"></i>
    `;

    this.element.style.display = 'none';
    this.element.style.pointerEvents = 'none';

    this.target.style.cursor = 'none';
    this.target.appendChild(this.element);

    this.target.addEventListener('mouseenter', this.onMouseEnter);
    this.target.addEventListener('mousemove', this.onMouseMove);
    this.target.addEventListener('mouseout', this.onMouseOut);
  }

  public destroy() : void {
    this.element?.remove();
    this.target.removeEventListener('mouseenter', this.onMouseEnter);
    this.target.removeEventListener('mousemove', this.onMouseMove);
    this.target.removeEventListener('mouseout', this.onMouseOut);
  }
}