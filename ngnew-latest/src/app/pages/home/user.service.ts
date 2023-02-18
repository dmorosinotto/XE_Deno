import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { TUser, TFilter } from "@models/user.model";

@Injectable()
export class UserService {
	http = inject(HttpClient);

	private apiUrl(path: string) {
		let base = environment.APIURL;
		if (base.endsWith("/") && path.startsWith("/")) return base + path.substring(1);
		else if (!base.endsWith("/") && !path.startsWith("/")) return base + "/" + path;
		else return base + path;
	}

	getAll() {
		return this.http.get<TUser[]>(this.apiUrl("/users"));
	}

	getOne(id: number) {
		return this.http.get<TUser>(this.apiUrl(`/user/${id}`));
	}

	delBy(filter: Partial<TUser> /*TFilter*/) {
		return this.http.post(this.apiUrl("/users/kill"), filter);
	}
}
