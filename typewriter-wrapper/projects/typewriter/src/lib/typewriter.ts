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

    private textSpan!: HTMLSpanElement;
    private cursorSpan?: HTMLSpanElement;

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

        injectTypewriterStyles();
        this.setupElements();

        if (this.options.pauseOnHover) {
            this.el.addEventListener('mouseenter', this.pause);
            this.el.addEventListener('mouseleave', this.resume);
        }

        if (this.options.autoStart) {
            this.start();
        }
    }

    private setupElements() {
        this.el.innerHTML = '';

        this.textSpan = document.createElement('span');
        this.textSpan.className = this.options.textStyleClass || 'typewriter-text';
        this.el.appendChild(this.textSpan);

        if (this.options.cursor) {
            this.cursorSpan = document.createElement('span');
            this.cursorSpan.className = 'typewriter-cursor';
            this.cursorSpan.textContent = this.options.cursorChar;
            this.el.appendChild(this.cursorSpan);
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

        this.textSpan.textContent = visibleText;

        const baseSpeed = this.isDeleting ? this.options.deleteSpeed : this.options.speed;
        const nextSpeed = this.options.randomSpeed ? this.getRandomSpeed(baseSpeed) : baseSpeed;

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

    private getRandomSpeed(base: number): number {
        const variation = base * 0.3;
        return Math.max(16, base + Math.floor((Math.random() - 0.5) * variation)); // Min ~60 FPS
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
        this.textSpan.textContent = '';
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

function injectTypewriterStyles() {
    if (document.getElementById('typewriter-style')) return;

    const style = document.createElement('style');
    style.id = 'typewriter-style';
    style.textContent = `
    .typewriter-text {
      display: inline-block;
      white-space: pre;
    }
    .typewriter-cursor {
      display: inline-block;
      animation: blink 1s step-end infinite;
      margin-left: 2px;
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  `;
    document.head.appendChild(style);
}
