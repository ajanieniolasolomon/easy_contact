import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Date'
})
export class MainPipe implements PipeTransform {

  transform(value: any): any {
   const d = new Date(value);
   const offset = 1;
   const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
   const nd = new Date(utc + (3600000 * offset)).toLocaleString();
   return `${{nd}}`;
  }

}
