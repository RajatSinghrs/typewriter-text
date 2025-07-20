export interface TypewriterOptions {
  text: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
  loop?: boolean;
  cursor?: boolean;
  cursorChar?: string;
}

export class Typewriter {
  private el: HTMLElement;
  private options: Required<TypewriterOptions>;
  private index = 0;
  private charIndex = 0;
  private isDeleting = false;
  private loopTimeout: any;

  constructor(el: HTMLElement, options: TypewriterOptions) {
    this.el = el;
    this.options = {
      speed: 100,
      deleteSpeed: 50,
      delayBetween: 1000,
      loop: true,
      cursor: true,
      cursorChar: '|',
      ...options,
    };

    if (this.options.cursor) {
      const span = document.createElement('span');
      span.className = 'typewriter-cursor';
      span.textContent = this.options.cursorChar;
      this.el.appendChild(span);
    }
  }

  public start() {
    this.type();
  }

  private type() {
    const currentText = this.options.text[this.index];
    const visibleText = currentText.substring(0, this.charIndex);

    this.el.childNodes[0].textContent = visibleText;

    if (!this.isDeleting) {
      if (this.charIndex < currentText.length) {
        this.charIndex++;
        this.loopTimeout = setTimeout(() => this.type(), this.options.speed);
      } else if (this.options.loop) {
        this.isDeleting = true;
        this.loopTimeout = setTimeout(() => this.type(), this.options.delayBetween);
      }
    } else {
      if (this.charIndex > 0) {
        this.charIndex--;
        this.loopTimeout = setTimeout(() => this.type(), this.options.deleteSpeed);
      } else {
        this.isDeleting = false;
        this.index = (this.index + 1) % this.options.text.length;
        this.loopTimeout = setTimeout(() => this.type(), 200);
      }
    }
  }

  public stop() {
    clearTimeout(this.loopTimeout);
  }
}
