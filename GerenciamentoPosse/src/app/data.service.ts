import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from '../app/entidades/user';

@Injectable({providedIn: 'root'})
export class DataService {
    private mainUrl = 'http://localhost:8080';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    create(user : User): Promise<User> {
        const url = this.mainUrl + '/api/users/postusers';
        return this.http
            .post(url, JSON.stringify(user), {headers : this.headers})
            .toPromise()
            .then(res => res.json() as User)
            .catch(this.handleError);
    }

    getAllUser() : Promise<User[]> {
        const url = this.mainUrl + '/api/users/getallusers';
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as User[]);
            //.catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Error', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }
}