import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       const word = route.url[0].path.toLowerCase();
       if(word.startsWith('kit')){
        this.router.navigate(['/kitchenset'])
       }else if(word.startsWith('mob') || word.startsWith('pho')){
        this.router.navigate(['/mobiles'])
       }else if(word.startsWith('boo') || word.startsWith('novels')){
        this.router.navigate(['/books'])
       }
    return true;
  }
  
}
