import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypewriterDirective } from './typewriter.directive';

@NgModule({
  declarations: [TypewriterDirective],
  imports: [CommonModule],
  exports: [TypewriterDirective]
})
export class TypewriterModule {}
