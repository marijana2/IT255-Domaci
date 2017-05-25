import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Object[], anotherValue: string): Object[] {
    if (value == null) {
      return null;
    }
    if (anotherValue !== undefined) {
      return value.filter((item: Object) =>
      item['ime'].toLowerCase().indexOf(anotherValue.toLowerCase()) !== -1);
    } else {
      return value;
    }
  }
}
