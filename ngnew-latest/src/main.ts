import { AppComponent } from "./app/app.component";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter, withHashLocation } from "@angular/router";
import { ROUTES } from "./app/pages/routes";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { authInterceptor } from "./app/state/auth.interceptor";

bootstrapApplication(AppComponent, {
	providers: [provideRouter(ROUTES, withHashLocation()), provideHttpClient(withInterceptors([authInterceptor]))]
}).catch(err => console.error(err));
