import { Injectable } from '@angular/core';

import { Resolve , ActivatedRouteSnapshot} from '@angular/router';
import { MainService } from './main.service';
@Injectable()
export class MainResolver implements Resolve<any> {
  constructor(private service: MainService) {}

  resolve(route: ActivatedRouteSnapshot) {
const id = route.paramMap.get('id');
console.log(id);
// console.log(this.service.getMessageByid(+id).valueChanges())
   return this.service.getMessageByid(id);
  }
}