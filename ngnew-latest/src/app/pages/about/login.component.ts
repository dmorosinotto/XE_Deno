import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthService } from "src/app/state/auth.service";

@Component({
	selector: "app-login",
	standalone: true,
	imports: [CommonModule],
	template: ` <p *ngIf="authService.isLoggedIn$ | async; else login">
			You are logged IN &nbsp;
			<button (click)="authService.Logout()">Logout</button>
		</p>
		<ng-template #login>
			<button (click)="authService.Login()">Login</button>
		</ng-template>`,
	styles: ["button {font-size: 2em; position: absolute }"]
})
export class LoginComponent {
	public authService = inject(AuthService);
}
