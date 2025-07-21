import { Component } from '@angular/core';
import { TypewriterComponent } from '../../../typewriter/src/public-api';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterModule,TypewriterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-app';
   typewriterOptions = {
    text: ['Standalone Angular FTW!', 'Typewriter Works!'],
    speed: 80,
    deleteSpeed: 40,
    delayBetween: 1000,
    loop: true,
    cursor: true,
  };

}
