import { Directive, ElementRef, Input, OnInit, OnDestroy, OnChanges, SimpleChanges, Inject, PLATFORM_ID, ChangeDetectionStrategy, Renderer2, NgZone } from '@angular/core';
import { Typewriter } from './typewriter'
import { TypewriterOptions } from './typewriter.types';
import { isPlatformBrowser } from '@angular/common';


@Directive({
  selector: '[typewriter]',
})
export class TypewriterDirective implements OnInit, OnChanges, OnDestroy {
  @Input('typewriter') text: string | string[] = '';
  @Input() speed?: number;
  @Input() deleteSpeed?: number;
  @Input() delayBetween?: number;
  @Input() pauseBetweenLoops?: number;
  @Input() loop?: boolean;
  @Input() cursor?: boolean;
  @Input() cursorChar?: string;
  @Input() startDelay?: number;
  @Input() pauseOnHover?: boolean;
  @Input() randomSpeed?: boolean;
  @Input() autoStart?: boolean;
  @Input() textStyleClass?: string;

  private typewriterInstance?: Typewriter;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private el: ElementRef<HTMLElement>, private renderer: Renderer2, private ngZone: NgZone) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initTypewriter();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['text'] && !changes['text'].isFirstChange()) {
      this.typewriterInstance?.updateText(
        Array.isArray(this.text) ? this.text : [this.text]
      );
    }
  }

  private initTypewriter() {

    const options: TypewriterOptions = {
      text: Array.isArray(this.text) ? this.text : [this.text],
      speed: this.speed,
      deleteSpeed: this.deleteSpeed,
      delayBetween: this.delayBetween,
      pauseBetweenLoops: this.pauseBetweenLoops,
      loop: this.loop,
      cursor: this.cursor,
      cursorChar: this.cursorChar,
      startDelay: this.startDelay,
      pauseOnHover: this.pauseOnHover,
      randomSpeed: this.randomSpeed,
      autoStart: this.autoStart,
      textStyleClass: this.textStyleClass,
    };
    this.ngZone.runOutsideAngular(() => {
      this.typewriterInstance = new Typewriter(this.el.nativeElement, options);
    });
  }

  ngOnDestroy(): void {
    this.typewriterInstance?.destroy();
  }
}
