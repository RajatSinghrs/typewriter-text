// import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
// import { Typewriter, TypewriterOptions } from '../../../dist'; // or src/ if developing locally

// @Directive({
//   selector: '[appTypewriter]'
// })
// export class TypewriterDirective implements AfterViewInit {
//   @Input('appTypewriter') text!: string[];
//   @Input() speed?: number;
//   @Input() deleteSpeed?: number;
//   @Input() delayBetween?: number;
//   @Input() loop?: boolean;

//   constructor(private el: ElementRef) {}

//   ngAfterViewInit(): void {
//     const options: TypewriterOptions = {
//       text: this.text,
//       speed: this.speed,
//       deleteSpeed: this.deleteSpeed,
//       delayBetween: this.delayBetween,
//       loop: this.loop,
//     };

//     const typewriter = new Typewriter(this.el.nativeElement, options);
//     typewriter.start();
//   }
// }
