import { Injectable } from '@angular/core';
import { CanActivate, } from '@angular/router';
import { Router } from '@angular/router';

import { TokenService } from '@services/token.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }
  canActivate(): boolean {
    const token = this.tokenService.getToken();
    if (token) {
      this.router.navigate(['app/boards'])
      return false;
    }
    return true;
  }

}
