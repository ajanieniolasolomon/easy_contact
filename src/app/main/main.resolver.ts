import { Injectable } from '@angular/core';

import { Resolve , ActivatedRouteSnapshot} from '@angular/router';
import { MainService } from './main.service';
@Injectable()
export class MainResolver implements Resolve<any> {
  constructor(private service: MainService) {}

  resolve(route: ActivatedRouteSnapshot) {
    // return this.service.getTopPosts();
  }
};