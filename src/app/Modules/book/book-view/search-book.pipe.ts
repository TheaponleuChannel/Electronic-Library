import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBook'
})
export class SearchBookPipe implements PipeTransform {

  transform(value: any[], FilterText: string): any {
    if(!value) return null;
    if(!FilterText) return value;
    return value ? value.filter(item => item.title.search(new RegExp(FilterText, 'i')) > -1) : [];
  }


}
