import {
  Component,
  ElementRef,
  Input,
  AfterViewInit,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { Typewriter, TypewriterOptions } from 'typewriter-text-effect';

@Component({
  selector: 'lib-typewriter',
  standalone:true,
  template: `<span #typewriterText><span></span></span>`,
  styles: [`
    .typewriter-cursor {
      animation: blink 0.7s infinite;
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  `],
})
export class TypewriterComponent implements AfterViewInit, OnDestroy {
  @Input() options!: TypewriterOptions;
  @ViewChild('typewriterText', { static: true }) elRef!: ElementRef;

  private typewriter!: Typewriter;

  ngAfterViewInit() {
    if (this.options && this.elRef) {
      this.typewriter = new Typewriter(this.elRef.nativeElement, this.options);
      this.typewriter.start();
    }
  }

  ngOnDestroy() {
    if (this.typewriter) {
      this.typewriter.stop();
    }
  }
}
