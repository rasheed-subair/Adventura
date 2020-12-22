import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  capFilterString: string = '';
  transform(value: any, filterString: string, propName: string): any {
    if(filterString.length === 0 || filterString === ''){
      return value;
    }
    const resultArray = [];
    for(const item of value) {
      this.capFilterString = filterString.charAt(0).toUpperCase() + filterString.slice(1);
      if (item[propName] === this.capFilterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
