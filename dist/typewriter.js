"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typewriter = void 0;
class Typewriter {
    constructor(el, options) {
        this.index = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.isPaused = false;
        this.isStopped = false;
        this.status = 'idle';
        this.pause = () => {
            this.isPaused = true;
            this.status = 'paused';
            clearTimeout(this.loopTimeout);
        };
        this.resume = () => {
            if (!this.isPaused || this.isStopped)
                return;
            this.isPaused = false;
            this.status = 'typing';
            this.type();
        };
        this.el = el;
        this.options = Object.assign({ speed: 100, deleteSpeed: 50, delayBetween: 1000, pauseBetweenLoops: 2000, loop: true, cursor: true, cursorChar: '|', startDelay: 0, pauseOnHover: false, randomSpeed: false, autoStart: true, textStyleClass: '', onComplete: () => { } }, options);
        if (this.options.textStyleClass) {
            const span = document.createElement('span');
            span.className = this.options.textStyleClass;
            this.el.appendChild(span);
        }
        else {
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
    start() {
        this.isStopped = false;
        this.status = 'typing';
        if (this.options.startDelay > 0) {
            setTimeout(() => this.type(), this.options.startDelay);
        }
        else {
            this.type();
        }
    }
    type() {
        var _a, _b;
        if (this.isStopped || this.isPaused)
            return;
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
            }
            else if (this.options.loop) {
                this.isDeleting = true;
                this.loopTimeout = setTimeout(() => this.type(), this.options.delayBetween);
            }
            else {
                this.status = 'stopped';
                (_b = (_a = this.options).onComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
            }
        }
        else {
            if (this.charIndex > 0) {
                this.charIndex--;
                this.loopTimeout = setTimeout(() => this.type(), nextSpeed);
            }
            else {
                this.isDeleting = false;
                this.index = (this.index + 1) % this.options.text.length;
                this.loopTimeout = setTimeout(() => this.type(), this.options.pauseBetweenLoops);
            }
        }
    }
    getRandomSpeed() {
        const base = this.isDeleting ? this.options.deleteSpeed : this.options.speed;
        const variation = base * 0.3;
        return base + Math.floor((Math.random() - 0.5) * variation);
    }
    stop() {
        clearTimeout(this.loopTimeout);
        this.isStopped = true;
        this.status = 'stopped';
    }
    reset() {
        this.stop();
        this.index = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.isPaused = false;
        this.status = 'idle';
        this.el.childNodes[0].textContent = '';
    }
    updateText(newText) {
        this.options.text = newText;
        this.reset();
        this.start();
    }
    isRunning() {
        return this.status === 'typing';
    }
    destroy() {
        this.stop();
        this.el.innerHTML = '';
        this.el.removeEventListener('mouseenter', this.pause);
        this.el.removeEventListener('mouseleave', this.resume);
    }
}
exports.Typewriter = Typewriter;
