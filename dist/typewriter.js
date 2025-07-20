"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typewriter = void 0;
class Typewriter {
    constructor(el, options) {
        this.index = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.el = el;
        this.options = Object.assign({ speed: 100, deleteSpeed: 50, delayBetween: 1000, loop: true, cursor: true, cursorChar: '|' }, options);
        if (this.options.cursor) {
            const span = document.createElement('span');
            span.className = 'typewriter-cursor';
            span.textContent = this.options.cursorChar;
            this.el.appendChild(span);
        }
    }
    start() {
        this.type();
    }
    type() {
        const currentText = this.options.text[this.index];
        const visibleText = currentText.substring(0, this.charIndex);
        this.el.childNodes[0].textContent = visibleText;
        if (!this.isDeleting) {
            if (this.charIndex < currentText.length) {
                this.charIndex++;
                this.loopTimeout = setTimeout(() => this.type(), this.options.speed);
            }
            else if (this.options.loop) {
                this.isDeleting = true;
                this.loopTimeout = setTimeout(() => this.type(), this.options.delayBetween);
            }
        }
        else {
            if (this.charIndex > 0) {
                this.charIndex--;
                this.loopTimeout = setTimeout(() => this.type(), this.options.deleteSpeed);
            }
            else {
                this.isDeleting = false;
                this.index = (this.index + 1) % this.options.text.length;
                this.loopTimeout = setTimeout(() => this.type(), 200);
            }
        }
    }
    stop() {
        clearTimeout(this.loopTimeout);
    }
}
exports.Typewriter = Typewriter;
