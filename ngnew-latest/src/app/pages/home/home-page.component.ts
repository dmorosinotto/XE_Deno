import { Component, inject, ChangeDetectionStrategy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LetModule } from "@ngrx/component";
import { UserService } from "./user.service";
import { Subject, Observable, exhaustMap } from "rxjs";
import { TUser } from "@models/user.model";

@Component({
	selector: "app-users-page",
	standalone: true,
	imports: [CommonModule, LetModule],
	template: `
		<p>home-page works {{ now | date : "HH:mm:ss.SSS" }}!</p>
		<button (click)="load$.next(true)">LOAD</button>
		<ng-container *ngrxLet="user$ as data; error as e; suspenseTpl: loading">
			<article *ngFor="let row of data">
				<pre>{{ row | json }}</pre>
				<button (click)="delByCap(row.cap)">DELETE</button>
			</article>
			<h4 *ngIf="e">ERROR: {{ e | json }}</h4>
		</ng-container>
		<ng-template #loading> Loading ... </ng-template>
	`,
	providers: [UserService],
	styles: ["article {position: relative}", "article button { position: absolute; top: 0; }"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export default class HomePageComponent {
	userService = inject(UserService);
	load$ = new Subject<boolean>();
	user$ = this.load$.pipe(exhaustMap(() => this.userService.getAll()));

	delByCap(cap: string) {
		this.userService.delBy({ cap }).subscribe({
			next: ret => console.log(ret),
			error: e => alert(JSON.stringify(e)),
			complete: () => this.load$.next(true)
		});
	}

	get now(): Date {
		console.count("now");
		return new Date();
	}
}
