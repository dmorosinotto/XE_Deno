import { Routes } from "@angular/router";
import { AboutPageComponent } from "./about/about-page.component";

export const ROUTES: Routes = [
	{ path: "about", component: AboutPageComponent },
	{ path: "home", loadComponent: () => import("./home/home-page.component") },
	{ path: "", pathMatch: "full", redirectTo: "about" }
];
