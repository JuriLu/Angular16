import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter} from "@angular/router";
import {routes} from "./routes";

bootstrapApplication(AppComponent ,{
  providers: [
    provideClientHydration(),
    provideRouter(routes)
  ]

})
  .catch((err) => console.error(err));
