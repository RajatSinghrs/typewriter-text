import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appTypewriter]'
})
export class TypewriterDirective implements AfterViewInit {
  @Input('appTypewriter') text!: string[];
  @Input() speed = 100;
  @Input() deleteSpeed = 50;
  @Input() delayBetween = 1000;
  @Input() loop = true;
  @Input() cursor = true;
  @Input() cursorChar = '|';

  private charIndex = 0;
  private isDeleting = false;
  private textIndex = 0;
  private loopTimeout: any;

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    if (!this.text || !this.text.length) return;

    if (this.cursor) {
      const span = document.createElement('span');
      span.className = 'typewriter-cursor';
      span.textContent = this.cursorChar;
      this.el.nativeElement.appendChild(span);
    }

    this.type();
  }

  private type() {
    const currentText = this.text[this.textIndex];
    const visibleText = currentText.substring(0, this.charIndex);

    if (this.el.nativeElement.childNodes.length > 0) {
      this.el.nativeElement.childNodes[0].textContent = visibleText;
    }

    if (!this.isDeleting) {
      if (this.charIndex < currentText.length) {
        this.charIndex++;
        this.loopTimeout = setTimeout(() => this.type(), this.speed);
      } else if (this.loop) {
        this.isDeleting = true;
        this.loopTimeout = setTimeout(() => this.type(), this.delayBetween);
      }
    } else {
      if (this.charIndex > 0) {
        this.charIndex--;
        this.loopTimeout = setTimeout(() => this.type(), this.deleteSpeed);
      } else {
        this.isDeleting = false;
        this.textIndex = (this.textIndex + 1) % this.text.length;
        this.loopTimeout = setTimeout(() => this.type(), 200);
      }
    }
  }
}
