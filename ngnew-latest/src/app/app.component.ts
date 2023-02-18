import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
	selector: "app-root",
	template: `
		<h1>Welcome to {{ title }}!</h1>
		<nav>
			<ul>
				<li><a routerLink="/about">About</a></li>
				<li><a routerLink="/home">Home</a></li>
			</ul>
		</nav>
		<router-outlet></router-outlet>
	`,
	styles: ["nav ul { display: flex }", "nav li { width: 100px }"],
	standalone: true,
	imports: [RouterOutlet, RouterLink]
})
export class AppComponent {
	title = `Angular + Deno`;
}
