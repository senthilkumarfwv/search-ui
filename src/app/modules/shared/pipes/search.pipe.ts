import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchData'
})
export class SearchPipe implements PipeTransform {

  transform(list: any[], filterText: string): any {
    return list ? list.filter(item => item.title.search(new RegExp(filterText, 'i')) > -1) : [];
  }

}
