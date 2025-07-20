import { NgModule } from '@angular/core';
import { TypewriterDirective } from './typewriter.directive';

@NgModule({
  declarations: [TypewriterDirective],
  exports: [TypewriterDirective]
})
export class TypewriterModule {}
