import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TypewriterModule } from '../../../typewriter/src/public-api';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterModule,TypewriterModule],
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
