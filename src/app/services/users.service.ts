import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl = environment.API_URL;
  constructor(
    private tokenService:TokenService,
    private http: HttpClient
  ) { }

  getUsers(){
    const token = this.tokenService.getToken();
    return this.http.get<User[]>( `${this.apiUrl}/api/v1/users`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
  }
}
