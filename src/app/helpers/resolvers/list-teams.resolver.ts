import { Observable } from '@ionic/angular-toolkit/node_modules/inquirer/node_modules/rxjs/src/internal/Observable';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { RequestService } from '../../services/request.service';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TeamsResolver implements Resolve<any> {
  constructor(private req: RequestService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.req.get('teams').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
