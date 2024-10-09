import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unitCm',
})
export class UnitCmPipe implements PipeTransform {
  transform(value: number): string {
    if (typeof value !== 'number') {
      return '';
    }
    return value + ' cm';
  }
}
