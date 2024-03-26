import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./user";

@Injectable({ providedIn: 'root' })

export class UserService {
    private apiServerUrl = '';

    constructor(private http: HttpClient) { }

    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.apiServerUrl}/user/getUsers`);
    }

    public saveUser(user: User): Observable<User> {
        return this.http.post<User>(`${this.apiServerUrl}/user/saveUser`,user);
    }

}