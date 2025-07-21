// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]) // Provide routing if needed
  ]
}).catch(err => console.error(err));