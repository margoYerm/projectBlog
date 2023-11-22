import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RegisterRequestInterface } from "../types/registerRequest.interface";
import { Observable, map } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { AuthResponseInterface } from "../types/authResponse.interface";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
}) 

export class AuthService {
    constructor(
        private http: HttpClient
    ) {}

    register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + '/users';
        const url1 = 'https://api.realworld.io/api/users'

        const urlLocal = 'http://localhost:3000/api/users'

        return this.http
            .post<AuthResponseInterface>(url1, data)
            .pipe(map((response) => response.user))
    }
}
 