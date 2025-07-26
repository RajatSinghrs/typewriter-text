import { TypewriterOptions } from './typewriter.types';

export class Typewriter {
  private el: HTMLElement;
  private options: Required<TypewriterOptions>;
  private index = 0;
  private charIndex = 0;
  private isDeleting = false;
  private loopTimeout: any;
  private isPaused = false;
  private isStopped = false;
  private status: 'idle' | 'typing' | 'paused' | 'stopped' = 'idle';


  constructor(el: HTMLElement, options: TypewriterOptions) {
    this.el = el;
    this.options = {
      speed: 100,
      deleteSpeed: 50,
      delayBetween: 1000,
      pauseBetweenLoops: 2000,
      loop: true,
      cursor: true,
      cursorChar: '|',
      startDelay: 0,
      pauseOnHover: false,
      randomSpeed: false,
      autoStart: true,
      textStyleClass: '',
      onComplete: () => { },
      ...options,
    };
    if (this.options.textStyleClass) {
      const span = document.createElement('span');
      span.className = this.options.textStyleClass;
      this.el.appendChild(span);
    } else {
      this.el.appendChild(document.createTextNode(''));
    }

    // Setup cursor
    if (this.options.cursor) {
      const cursor = document.createElement('span');
      cursor.className = 'typewriter-cursor';
      cursor.textContent = this.options.cursorChar;
      this.el.appendChild(cursor);
    }

    // Hover listeners
    if (this.options.pauseOnHover) {
      this.el.addEventListener('mouseenter', this.pause);
      this.el.addEventListener('mouseleave', this.resume);
    }

    if (this.options.autoStart) {
      this.start();
    }

  }
  public start() {
    this.isStopped = false;
    this.status = 'typing';
    if (this.options.startDelay > 0) {
      setTimeout(() => this.type(), this.options.startDelay);
    } else {
      this.type();
    }
  }

  private type() {
    if (this.isStopped || this.isPaused) return;

    const currentText = this.options.text[this.index];
    const visibleText = currentText.substring(0, this.charIndex);

    const textNode = this.el.childNodes[0];
    textNode.textContent = visibleText;

    const nextSpeed = this.options.randomSpeed
      ? this.getRandomSpeed()
      : (this.isDeleting ? this.options.deleteSpeed : this.options.speed);

    if (!this.isDeleting) {
      if (this.charIndex < currentText.length) {
        this.charIndex++;
        this.loopTimeout = setTimeout(() => this.type(), nextSpeed);
      } else if (this.options.loop) {
        this.isDeleting = true;
        this.loopTimeout = setTimeout(() => this.type(), this.options.delayBetween);
      } else {
        this.status = 'stopped';
        this.options.onComplete?.();
      }
    } else {
      if (this.charIndex > 0) {
        this.charIndex--;
        this.loopTimeout = setTimeout(() => this.type(), nextSpeed);
      } else {
        this.isDeleting = false;
        this.index = (this.index + 1) % this.options.text.length;
        this.loopTimeout = setTimeout(() => this.type(), this.options.pauseBetweenLoops);
      }
    }
  }

  private getRandomSpeed(): number {
    const base = this.isDeleting ? this.options.deleteSpeed : this.options.speed;
    const variation = base * 0.3;
    return base + Math.floor((Math.random() - 0.5) * variation);
  }

  public pause = () => {
    this.isPaused = true;
    this.status = 'paused';
    clearTimeout(this.loopTimeout);
  };

  public resume = () => {
    if (!this.isPaused || this.isStopped) return;
    this.isPaused = false;
    this.status = 'typing';
    this.type();
  };

  public stop() {
    clearTimeout(this.loopTimeout);
    this.isStopped = true;
    this.status = 'stopped';
  }

  public reset() {
    this.stop();
    this.index = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.isPaused = false;
    this.status = 'idle';
    this.el.childNodes[0].textContent = '';
  }

  public updateText(newText: string[]) {
    this.options.text = newText;
    this.reset();
    this.start();
  }

  public isRunning(): boolean {
    return this.status === 'typing';
  }

  public destroy() {
    this.stop();
    this.el.innerHTML = '';
    this.el.removeEventListener('mouseenter', this.pause);
    this.el.removeEventListener('mouseleave', this.resume);
  }

}
