import { HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthService {
	#auth$ = new BehaviorSubject<boolean>(false);
	public isLoggedIn$ = this.#auth$.asObservable();
	public Login() {
		this.#auth$.next(true);
	}
	public Logout() {
		this.#auth$.next(false);
	}
	public appendAuthToken(req: HttpRequest<any>) {
		if (!this.#auth$.value) return req;
		else return req.clone({ setHeaders: { "X-Auth": "$ecr3t" } });
	}
}
