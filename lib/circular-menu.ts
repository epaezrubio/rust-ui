export interface CircularMenuOptionCost {
  quantity: number;
  resource: string;
  stock: number;
}

export interface CircularMenuOptionType {
  label: string;
  description: string;
  sprite: string;
  enabled: boolean;
  cost: CircularMenuOptionCost;
}

class CircularMenuOption {
  public element: HTMLImageElement | null = null;

  constructor(private menu: CircularMenu, public option: CircularMenuOptionType) { }

  public init(): void {
    this.element = document.createElement("img");

    this.element.classList.add('circular-menu-item');
    this.element.style.width = `${this.menu.centerRadius / 4}px`;
    this.element.style.height = `${this.menu.centerRadius / 4}px`;

    this.element.src = this.option.sprite;

    this.setOptionData();

    this.menu.containerElement.appendChild(this.element);
  }

  public setOptionData(): void {
    if (!this.element) {
      return;
    }

    this.element.innerText = this.option.label;
  }

  public setPosition(position: { x: number; y: number; }) {
    if (!this.element) {
      return;
    }

    this.element.style.transform = `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`;
  }

  focus() {
    this.element?.classList.add('focused');
  }

  blur() {
    this.element?.classList.remove('focused');
  }

  public destroy() {
    if (!this.element) {
      return;
    }

    this.element.remove();
  }
}

class CircularMenuBackdrop {
  private element: HTMLDivElement | null = null;

  constructor(private menu: CircularMenu) { }

  public init(): void {
    this.element = document.createElement('div');
    this.element.classList.add('circular-menu-backdrop');
    this.element.addEventListener('mousemove', this.onMouseMove);

    this.menu.containerElement.appendChild(this.element);
  }

  private onMouseMove = (event: MouseEvent): void => {
    const center = {
      x: this.menu.containerElement.clientWidth / 2,
      y: this.menu.containerElement.clientHeight / 2
    };

    // top is 0 and increases clockwise to Math.PI * 2
    const angle = Math.atan2(center.x - event.offsetX, event.offsetY - center.y) + Math.PI;

    const optionArc = this.menu.optionArc;

    // find closest option and compensate with modulo the first option extending under 0 deg
    const hoveredOptionIndex = Math.round(angle / optionArc) % this.menu.options.length;

    const hoveredOption = this.menu.options[hoveredOptionIndex];

    if (hoveredOption !== undefined) {
      this.menu.setFocusedOption(hoveredOption);
    }
  };

  public destroy() {
    if (!this.element) {
      return;
    }

    this.element.removeEventListener('mousemove', this.onMouseMove);
  }
}

class CircularMenuSelection {
  private element: HTMLDivElement | null = null;
  private rotation = 0;

  constructor(private menu: CircularMenu) { }

  public init(): void {
    this.element = document.createElement('div');
    this.element.classList.add('circular-menu-selection');
    this.element.style.background = `radial-gradient(circle at center, transparent ${this.menu.settings.innerRadius}px, ${this.menu.settings.selectionBackground} ${this.menu.settings.innerRadius + 1}px, ${this.menu.settings.selectionBackground} ${this.menu.settings.outerRadius - 1}px, transparent ${this.menu.settings.outerRadius}px)`;

    if (this.menu.options.length > 1) {
      // size of this angle at the edge
      const tanSize: number = Math.tan(this.menu.optionArc / 2) * this.menu.width / 2;

      this.element.style.clipPath = `polygon(50% 50%, ${this.menu.width / 2 - tanSize}px 0, ${this.menu.width / 2 + tanSize}px 0)`;
    }

    this.menu.containerElement.appendChild(this.element);
  }

  public setAngle(angle: number) {
    if (!this.element) {
      return;
    }

    // find shortest path (clockwise or anti-clockwise) between current angle and target,
    // this may mean oversteeping PI * 2 or understeeping 0
    const loops = Math.floor(this.rotation / (Math.PI * 2));
    const loopedRotation = angle + (loops * Math.PI * 2);

    const rotationDelta = loopedRotation - this.rotation;
    if (rotationDelta >= Math.PI) {
      this.rotation = loopedRotation - Math.PI * 2;
    } else if (rotationDelta < -Math.PI) {
      this.rotation = loopedRotation + Math.PI * 2;
    } else {
      this.rotation = loopedRotation;
    }


    this.element.style.transform = `rotate(${this.rotation}rad)`;
  }
}

class CircularMenuFocusedOption {
  private element: HTMLDivElement | null = null;
  private imageElement: HTMLImageElement | null = null;
  private titleElement: HTMLDivElement | null = null;
  private descriptionElement: HTMLParagraphElement | null = null;
  private costElement: HTMLSpanElement | null = null;
  private resourceElement: HTMLSpanElement | null = null;
  private stockElement: HTMLSpanElement | null = null;

  constructor(private menu: CircularMenu) { }

  public init(): void {
    this.element = document.createElement('div');

    this.element.classList.add('circular-menu-focus');

    this.element.innerHTML = `
      <img class="circular-menu-focus-image" data-option-image></img>
      <div class="circular-menu-focus-title" data-option-title></div>
      <p class="circular-menu-focus-description" data-option-description></p>
      <p class="circular-menu-cost">
        <span class="circular-menu-cost-quantity" data-option-cost></span> x <span data-option-resource></span> <span class="circular-menu-cost-stock" data-option-stock></span>
      </p>
    `;

    this.imageElement = this.element.querySelector('[data-option-image]');
    this.titleElement = this.element.querySelector('[data-option-title]');
    this.descriptionElement = this.element.querySelector('[data-option-description]');
    this.costElement = this.element.querySelector('[data-option-cost]');
    this.resourceElement = this.element.querySelector('[data-option-resource]');
    this.stockElement = this.element.querySelector('[data-option-stock]');

    this.menu.containerElement.appendChild(this.element);
  }

  public setFocusedOption(menuOption: CircularMenuOption) {
    if (this.element) {
      this.element.style.display = 'block';
    }

    if (this.imageElement) {
      this.imageElement.src = menuOption.option.sprite;
    }

    if (this.titleElement) {
      this.titleElement.innerText = menuOption.option.label;
    }

    if (this.descriptionElement) {
      this.descriptionElement.innerText = menuOption.option.description;
    }

    if (this.costElement) {
      this.costElement.innerText = menuOption.option.cost.quantity.toString();
    }

    if (this.resourceElement) {
      this.resourceElement.innerText = menuOption.option.cost.resource;
    }

    if (this.stockElement) {
      this.stockElement.innerText = `(${menuOption.option.cost.stock})`;

      if (menuOption.option.cost.quantity > menuOption.option.cost.stock) {
        this.stockElement.classList.add('text-danger');
      } else {
        this.stockElement.classList.remove('text-danger');
      }
    }
  }

  public clearFocusedOption(): void {
    if (!this.element) {
      return;
    }

    this.element.style.display = 'none';
  }
}

export interface CircularMenuSettings {
  innerRadius: number;
  outerRadius: number;
  selectionBackground: string;
}

export class CircularMenu {
  public focusedMenuOption: CircularMenuOption | null = null;

  public backdrop: CircularMenuBackdrop = new CircularMenuBackdrop(this);
  public focusedOption: CircularMenuFocusedOption = new CircularMenuFocusedOption(this);
  public selection: CircularMenuSelection = new CircularMenuSelection(this);
  public options: CircularMenuOption[] = [];

  public settings: CircularMenuSettings;

  get centerRadius(): number {
    return this.settings.innerRadius + (this.settings.outerRadius - this.settings.innerRadius) / 2;
  }

  get width(): number {
    return this.containerElement.clientWidth;
  }

  get height(): number {
    return this.containerElement.clientHeight;
  }

  get optionArc(): number {
    // how much of the circumference each option takes
    return (Math.PI * 2) / this.options.length;
  }

  get focusedOptionAngle(): number {
    return this.focusedOptionIndex * this.optionArc;
  }

  get focusedOptionIndex(): number {
    if (!this.focusedMenuOption) {
      return -1;
    }

    return this.options.indexOf(this.focusedMenuOption);
  }

  constructor(public containerElement: HTMLElement, options: CircularMenuOptionType[] = [], settings: Partial<CircularMenuSettings> = {}) {
    const minDimension = Math.min(containerElement.clientWidth, containerElement.clientHeight);

    this.settings = {
      outerRadius: minDimension / 2,
      innerRadius: minDimension / 2 - 100,
      selectionBackground: '#b13824',
      ...settings
    };

    this.setOptions(options);
  }

  public init(): void {
    this.containerElement.classList.add('circular-menu');

    this.containerElement.style.background = `radial-gradient(circle at center, transparent ${this.settings.innerRadius}px, white ${this.settings.innerRadius + 1}px, white ${this.settings.outerRadius - 1}px, transparent ${this.settings.outerRadius}px)`;

    this.backdrop.init();
    this.selection.init();
    this.focusedOption.init();

    this.options.forEach((option) => {
      option.init();
    });

    // position elements
    this.options.forEach((option, i) => {
      const offsetAngle = (Math.PI * 2 / this.options.length) * i - Math.PI / 2;
      const position = { x: Math.cos(offsetAngle) * this.centerRadius, y: Math.sin(offsetAngle) * this.centerRadius };

      option.setPosition(position);
    });

    const defaultOption = this.options[0];

    if (defaultOption) {
      this.setFocusedOption(defaultOption);
    }
  }

  public setFocusedOption(option: CircularMenuOption | null): void {
    this.focusedMenuOption?.blur();
    this.focusedMenuOption = option;

    if (!option) {
      this.focusedOption.clearFocusedOption();
      return;
    }

    this.focusedMenuOption?.focus();
    this.focusedOption.setFocusedOption(option);
    this.selection.setAngle(this.focusedOptionAngle);
  }

  public setOptions(options: CircularMenuOptionType[]): void {
    this.destroyOptions();

    this.options = options.map((option) => {
      const menuOption = new CircularMenuOption(this, option);

      return menuOption;
    });
  }

  public destroyOptions(): void {
    this.options.forEach((option) => {
      option.destroy();
    });

    this.options = [];
  }

  public destroy(): void {
    this.containerElement.classList.remove('circular-menu');

    this.backdrop.destroy();
    this.destroyOptions();
    return;
  }
}
